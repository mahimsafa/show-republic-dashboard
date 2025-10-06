"use client";
import { FormEvent, useState } from "react";
import {
  InviteSuccessContent,
  InviteUserContent,
  PopupModal,
  TabItem,
  TabWrapper,
  Wrapper,
} from "./styles";
import UsersTab from "./users_tab/UsersTab";
import RolesTab from "./roles_tab/RolesTab";
import AdminsReviewTab from "./admins_review_tab/AdminsReviewTab";
import { RiCloseLargeFill } from "react-icons/ri";
import { IAdmin } from "@/typings/admin";

interface Props {
  admins: IAdmin[] | null;
  inviteAdmin: (email: string) => Promise<any | null>;
}

const AdminsPage = ({ admins, inviteAdmin }: Props) => {
  const [showInviteMembers, setShowInviteMembers] = useState(false);
  const [showInviteSuccess, setShowInviteSuccess] = useState(false);
  const [currentTab, setCurrentTab] = useState("all");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInviteMembers = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    if (!email) {
      setError("Email is required");
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await inviteAdmin(email);
      if (result.success) {
        setShowInviteMembers(false);
        setShowInviteSuccess(true);
      } else {
        setError(result.message || "Failed to invite admin");
      }
    } catch (err: any) {
      setError(
        err.message || "An error occurred while sending the invitation."
      );
    } finally {
      setIsSubmitting(false);
      setError(null);
    }
  };

  return (
    <>
      <Wrapper>
        <TabWrapper>
          <TabItem
            isActive={currentTab == "all"}
            onClick={() => {
              setCurrentTab("all");
            }}
          >
            All users
          </TabItem>
          {/* <TabItem isActive={currentTab == "roles"} onClick={() => {setCurrentTab("roles")}}>Roles</TabItem>
                    <TabItem className="has-notification" isActive={currentTab == "admin_review"} onClick={() => {setCurrentTab("admin_review")}}>Admin Review</TabItem> */}

          <button
            className="add-admin"
            onClick={() => setShowInviteMembers(true)}
          >
            <img src="/icons/add-user.icon.svg" alt="add admin" />
            <span>Add Admin</span>
          </button>
        </TabWrapper>

        {currentTab == "all" ? (
          <UsersTab admins={admins || []} />
        ) : currentTab == "roles" ? (
          <RolesTab />
        ) : (
          <AdminsReviewTab />
        )}

        {showInviteMembers && (
          <PopupModal>
            <InviteUserContent>
              <div className="head">
                <div
                  className="close"
                  onClick={() => {
                    setShowInviteMembers(false);
                    setError(null);
                  }}
                >
                  <RiCloseLargeFill />
                </div>
              </div>

              <form className="content" onSubmit={handleInviteMembers}>
                <h2>Invite Members</h2>

                <div className="input-wrapper">
                  <label htmlFor="">Email Address</label>

                  <div className="input-box">
                    <input
                      type="email"
                      required
                      name="email"
                      placeholder="name@example.com"
                      disabled={isSubmitting}
                    />
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                </div>

                <div className="actions">
                  {/* <button>Cancel</button> */}
                  <button type="submit">
                    {" "}
                    {isSubmitting ? "Sending..." : "Send Invitation"}
                  </button>
                </div>
              </form>
            </InviteUserContent>
          </PopupModal>
        )}

        {showInviteSuccess && (
          <PopupModal>
            <InviteSuccessContent>
              <div className="head">
                <div
                  className="close"
                  onClick={() => {
                    setShowInviteSuccess(false);
                    // setError(null);
                  }}
                >
                  <RiCloseLargeFill />
                </div>
              </div>

              <div className="content">
                <div className="icon-box">
                  <img src="/icons/send-icon.svg" alt="" />
                </div>

                <h2>Invitation Sent</h2>

                <p>
                  Invitation has been sent successfully to the email
                  address{" "}
                </p>

                <div className="actions">
                  <button
                    onClick={() => {
                      setShowInviteSuccess(false);
                      // setError(null);
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </InviteSuccessContent>
          </PopupModal>
        )}
      </Wrapper>
    </>
  );
};

export default AdminsPage;
