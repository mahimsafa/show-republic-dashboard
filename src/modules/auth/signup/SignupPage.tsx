"use client";
import { useRouter } from "next/navigation";
import { Container, Form, Head, Wrapper } from "./styles";
import { useEffect, useState } from "react";
import SignupSuccessPage from "./SignupSuccessPage";

interface ISignupPageProps {
  tokenInfo: any;
  register: (data: any) => Promise<any>;
}

const SignupPage = ({ tokenInfo, register }: ISignupPageProps) => {
  const router = useRouter();
  const [counter, setCounter] = useState(4);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!tokenInfo.success) {
      const interval = setInterval(() => {
        setCounter((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            router.push("/login");
          }
          return prev - 1;
        });
      }, 1000);
  
      return () => clearInterval(interval);
    }
  }, [tokenInfo.success, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    //   @ts-expect-error ignore
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    if (!name) {
      setLoading(false);
      setError("Name is required");
      return;
    }
    if (!password) {
      setLoading(false);
      setError("Password is required");
      return;
    }
    console.log(password, confirmPassword);
    if (password !== confirmPassword) {
      setLoading(false);
      setError("Passwords do not match");
      return;
    }
    const payload = {
      name,
      token: tokenInfo.data.token,
      password,
    };
    setLoading(false);
    try {
      const response = await register(payload);
      if (!response.success) {
        router.push("/login");
      }
    } catch (error) {
      setError(error?.message || "An error occurred while registering");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Head>
        <div className="left-img patterns-wrapper">
          <img src="/icons/auth/pattern-2-vector.svg" alt="" />
          <img src="/icons/auth/pattern-1-vector.svg" alt="" />
        </div>

        {/* <h1>Let's get you started!</h1> */}
        <h1>Let&apos;s get you started!</h1>

        <div className="right-img patterns-wrapper">
          <img src="/icons/auth/pattern-3-vector.svg" alt="" />
          <img src="/icons/auth/pattern-4-vector.svg" alt="" />
        </div>
      </Head>
      
      {tokenInfo.success ? (
        <>
          <Container>
            <Form onSubmit={handleSubmit}>
              <h2>Welcome to Show Republic</h2>
              <h6>Set a new password to complete your registration</h6>

              <input
                disabled
                value={tokenInfo.data.email}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="cursor-not-allowed"
                readOnly
                style={{
                  cursor: "not-allowed",
                  color: "gray",
                }}
              />
              <input type="text" name="name" id="name" placeholder="Name" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
              {error && <p className="text-danger">{error}</p>}
              <button type="submit">Join</button>
            </Form>
          </Container>
        </>
      ) : (
        <div className="d-flex flex-column align-items-center">
          <p className="text-danger">Invalid token</p>
          <p>Redirecting to login page in {(counter -1) < 0 ? 0 : counter -1} seconds...</p>
        </div>
      )}
    </Wrapper>
  );
};

export default SignupPage;
