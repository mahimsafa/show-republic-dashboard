"use client";

import { IoMdClose } from "react-icons/io";
import { ActionWrapper, Container, Meta, TopHead, Wrapper } from "./styles";
import ProfileTab from "./profile_tab/ProfileTab";
import { useState } from "react";
import { IAdmin } from "@/typings/admin";
import { getImgURL } from "@/utils/image";

const UserProfile: React.FC<{ closeModal: () => void; admin: IAdmin }> = ({
  closeModal,
  admin,
}) => {
  return (
    <>
      <Wrapper>
        <Container>
          <Meta>
            <h5>{admin.id}</h5>

            <div className="close" onClick={() => closeModal()}>
              <IoMdClose />
            </div>
          </Meta>

          <TopHead>
            <div className="info">
              <img src={getImgURL(admin.profilePicture)} alt={admin.name} />

              <div className="text-content">
                <h3>{admin.name}</h3>
                <h6>{admin.jobTitle}</h6>
                {/* <span>On 1 week Sick Leave</span> */}
              </div>
            </div>

            {/* <span className="status">On leave</span> */}
          </TopHead>

          <ProfileTab admin={admin} />

          <ActionWrapper>
            <button>
              <img src="/icons/warning-icon.svg" alt="" />
              <span>Blacklist User</span>
            </button>
            <button>
              <img src="/icons/warning-icon.svg" alt="" />
              <span>Suspend Account</span>
            </button>
            <button>
              <img src="/icons/warning-icon.svg" alt="" />
              <span>Remove user</span>
            </button>
          </ActionWrapper>
        </Container>
      </Wrapper>
    </>
  );
};

export default UserProfile;
