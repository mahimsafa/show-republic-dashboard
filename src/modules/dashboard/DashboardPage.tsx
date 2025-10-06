"use client"
import Link from "next/link";
import {
  Container,
  Demography,
  UserStats,
  GraphCard,
  GraphWrapper,
  TopHead,
  Wrapper,
} from "./styles";

import AgeGroups from "./AgeGroups";
import Gender from "./Gender";
import Accounts from "./Accounts";

const DashboardPage = ({data, admin}) => {
  
  return (
    <Wrapper>
      <TopHead>
        <h2>Welcome, {admin.name}</h2>
        <h4>Marketing</h4>
        <UserStats>
          <li>
            <b>{data.admins}</b>
            <span>Admins</span>
          </li>
          <li>
            <b>{data.users}</b>
            <span>Users</span>
          </li>
          <li>
            <b>{data.suspended}</b>
            <span>Suspended</span>
          </li>
        </UserStats>
      </TopHead>
      <Container>
        <Demography>
          <div className="head">
            <img src="/icons/demography-icon.svg" alt="" />
            <p>Demography</p>

            <Link href="/analytics">SEE DETAILS</Link>
          </div>

          <GraphWrapper>
            <GraphCard>
              <h3>Age Groups</h3>
              {/* <img src="/temp/age-temp-img.png" alt="" /> */}
              <AgeGroups agedata={data.agegroups} />
            </GraphCard>
            <GraphCard>
              <h3>Gender</h3>
              {/* <img src="/temp/gender-temp-img.png" alt="" /> */}
              <Gender genderdata={data.gender} />
            </GraphCard>
            <GraphCard>
              <h3>Accounts</h3>
              {/* <img src="/temp/accounts-temp-img.png" alt="" /> */}
              <Accounts accountData={data.accounts} />
            </GraphCard>
          </GraphWrapper>
        </Demography>
      </Container>
    </Wrapper>
  );
};

export default DashboardPage;
