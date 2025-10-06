"use client";
// import { useRouter } from "next/navigation";
import {
  Container,
  Demography,
  Earnings,
  EarningsWrapper,
  Export,
  Filter,
  GraphCard,
  GraphWrapper,
  LocationContent,
  LocationsWrapper,
  MetaBox,
  StatsWrapper,
  TopHead,
  Wrapper,
} from "./styles";
// import GoogleMapReact from "google-map-react";
import Link from "next/link";
import AgeGroups from "../dashboard/AgeGroups";
import Gender from "../dashboard/Gender";
import Accounts from "../dashboard/Accounts";

const AnalyticPage = ({data}: any) => {
//   const router = useRouter();

  return (
    <Wrapper>
      <Container>
        {/* <TopHead>
          <Earnings>
            <img src="/images/analytics/stats-icon.png" alt="" />
            <div>
              <span>Total Earnings:</span>
              <b>$250,500</b>
            </div>
            <span className="earninc-inc">+5.3% from yesterday</span>
          </Earnings>

          <MetaBox>
            <Filter>
              <button className="ctr">
                <img src="/icons/left-arrow-icon.svg" alt="" />
              </button>
              <select name="" id="">
                <option value="">This Month</option>
              </select>
              <button className="ctr">
                <img src="/icons/right-arrow-icon.svg" alt="" />
              </button>
            </Filter>

            <Export>
              <span>Export</span>
              <img src="/icons/download-arrow-icon.svg" alt="" />
            </Export>
          </MetaBox>
        </TopHead> */}

        <EarningsWrapper>
          <li>
            <h5>{data?.analytics?.ads || 0}</h5>
            <span>Earnings from ads</span>
          </li>
          <li>
            <h5>{data?.analytics?.onlinepayment || 0}</h5>
            <span>Earnings from online payment</span>
          </li>
          <li>
            <h5>{data?.analytics?.coins || 0}</h5>
            <span>Total Coins gained</span>
          </li>
        </EarningsWrapper>

        <StatsWrapper>
          <li>
            <h4>{data?.analytics?.posts || 0}</h4>
            <span>Posts</span>
          </li>
          <li>
            <h4>{data?.analytics?.ads || 0}</h4>
            <span>Ads</span>
          </li>
        </StatsWrapper>


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
              <AgeGroups agedata={data?.demography?.agegroups} />
            </GraphCard>
            <GraphCard>
              <h3>Gender</h3>
              {/* <img src="/temp/gender-temp-img.png" alt="" /> */}
              <Gender genderdata={data?.demography?.gender} />
            </GraphCard>
            <GraphCard>
              <h3>Accounts</h3>
              {/* <img src="/temp/accounts-temp-img.png" alt="" /> */}
              <Accounts accountData={data?.demography?.accounts} />
            </GraphCard>
          </GraphWrapper>
        </Demography>
      </Container>


        {/* <Demography>
          <div className="head">
            <img src="/icons/demography-icon.svg" alt="" />
            <p>Demography</p>

            <Link href="/analytics/countries">SEE DETAILS</Link>
          </div>

          <GraphWrapper>
            <GraphCard>
              <h3>Age Groups</h3>
              <img src="/temp/age-temp-img.png" alt="" />
            </GraphCard>
            <GraphCard>
              <h3>Gender</h3>
              <img src="/temp/gender-temp-img.png" alt="" />
            </GraphCard>
            <GraphCard>
              <h3>Accounts</h3>
              <img src="/temp/accounts-temp-img.png" alt="" />
            </GraphCard>
          </GraphWrapper>

          <LocationsWrapper>
            <LocationContent>
              <h3>Locations</h3>

              <div className="map-wrapper">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "" }}
                  defaultCenter={{
                    lat: 10.99835602,
                    lng: 77.01502627,
                  }}
                  defaultZoom={11}
                ></GoogleMapReact>
              </div>
            </LocationContent>
          </LocationsWrapper>
        </Demography> */}
      </Container>
    </Wrapper>
  );
};

export default AnalyticPage;
