"use client";

import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import {
  ActionWrapper,
  Container,
  Meta,
  PopupContent,
  PopupModal,
  TabItem,
  TabWrapper,
  TopHead,
  Wrapper,
} from "./styles";
import ProfileTab from "./profile_tab/ProfileTab";
import { useState } from "react";
import PerformanceTab from "./performance_tab/PerformanceTab";
import LoginLogsTab from "./login_logs_tab/LoginLogsTab";
import { RiCloseLargeFill } from "react-icons/ri";
import client from "@/lib/axios-client";

const UserProfile: React.FC<{ closeModal: () => void; user: any }> = ({
  closeModal,
  user,
}) => {
  const router = useRouter()
  const [showBlackListModal, setShowBlackListModal] = useState(false);
  const [currentTab, setCurrentTab] = useState("profile");
  const [loading, setLoading] = useState(false);

  const handleBlackList = async () => {
    // TODO: handle black list

    try {
      setLoading(true);
      await client.post(`api/v1/admin/users/${user.id}/toggle-status`);
    } catch (error) {
      alert("Something went wrong");
    } finally {
      // close modal
      setShowBlackListModal(false);
      setLoading(false);
      router.refresh()
    }
  };

  return (
    <>
      <Wrapper>
        <Container>
          <Meta>
            <h5>{user.id}</h5>

            <div className="close" onClick={() => closeModal()}>
              <IoMdClose />
            </div>
          </Meta>

          <TopHead>
            <div className="info">
              <img
                src={user.avatar ? user.avatar : "/images/avatar.webp"}
                alt=""
              />
              <h3>{user.name}</h3>
            </div>

            <span className="status">
              {user.isBlocked ? "Blocked" : "Active"}
            </span>
          </TopHead>

          <TabWrapper>
            <TabItem
              isActive={currentTab == "profile"}
              onClick={() => setCurrentTab("profile")}
            >
              Profile
            </TabItem>
            <TabItem
              isActive={currentTab == "performance"}
              onClick={() => setCurrentTab("performance")}
            >
              Performance
            </TabItem>
            {/* <TabItem isActive={currentTab == "login_logs"} onClick={() => setCurrentTab("login_logs")}>Login logs</TabItem> */}
          </TabWrapper>

          {currentTab == "profile" ? (
            <ProfileTab data={user} />
          ) : currentTab == "performance" ? (
            <PerformanceTab user={user} />
          ) : (
            <LoginLogsTab />
          )}

          <ActionWrapper onClick={() => setShowBlackListModal(true)}>
            <button>
              <img src="/icons/warning-icon.svg" alt="" />
              <span>{user.isBlocked ? "Activate user" : "Block user"}</span>
            </button>
          </ActionWrapper>
        </Container>
      </Wrapper>

      {showBlackListModal && (
        <PopupModal>
          <PopupContent>
            <div className="head">
              <div
                className="close"
                onClick={() => setShowBlackListModal(false)}
              >
                <RiCloseLargeFill />
              </div>
            </div>

            <div className="icon-box">
              <img src="/icons/warning-triangle-icon.svg" alt="" />
            </div>

            <h2>{user.isBlocked ? "Activate User" : "Blacklist User"}</h2>
            <p>
              Are you sure you want to{" "}
              {user.isBlocked ? "activate" : "blacklist"} this user
            </p>

            <div className="info">
              <img
                src={user.avatar ? user.avatar : "/images/avatar.webp"}
                alt=""
              />
              <h3>{user.name}</h3>
            </div>

            <div className="actions">
              <button onClick={() => setShowBlackListModal(false)}>
                No, Cancel
              </button>
              <button onClick={() => handleBlackList()}>
                {loading
                  ? "Processing..."
                  : user.isBlocked
                    ? "Yes! Activate"
                    : "Yes! Black List"}
              </button>
            </div>
          </PopupContent>
        </PopupModal>
      )}
    </>
  );
};

export default UserProfile;
