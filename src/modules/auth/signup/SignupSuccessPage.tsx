import { Container, Head, Wrapper } from "./styles";
import React from "react";

function SignupSuccessPage() {
  return (
    <Wrapper>
      <Head>
        <div className="left-img patterns-wrapper">
          <img src="/icons/auth/pattern-2-vector.svg" alt="" />
          <img src="/icons/auth/pattern-1-vector.svg" alt="" />
        </div>

        <p>Registration successful</p>
        <p>
          Go to <a href="/login">login</a>
        </p>

        <div className="right-img patterns-wrapper">
          <img src="/icons/auth/pattern-3-vector.svg" alt="" />
          <img src="/icons/auth/pattern-4-vector.svg" alt="" />
        </div>
      </Head>
    </Wrapper>
  );
}

export default SignupSuccessPage;
