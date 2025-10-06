// import { BsArrowDownCircleFill, BsChevronDown } from "react-icons/bs";
import {
  ActiveUsers,
  PerformanceStats,
//   PerformceGraph,
  Wrapper,
} from "./styles";
import client from "@/lib/axios-client";
import { useEffect, useState } from "react";


// {
//     "engagement": {
//         "views": 3,
//         "likes": 7,
//         "comments": 18
//     },
//     "activeUsers": {
//         "last7Days": 2,
//         "total": 4
//     },
//     "subscriptionRevenue": {
//         "today": 0,
//         "thisMonth": 2000,
//         "lastMonth": 2000
//     }
// }


const PerformanceTab = ({ user }: { user: any }) => {
  const [performanceData, setPerformanceData] = useState({
    engagement:{
        views:0,
        likes:0,
        comments:0
    },
    activeUsers:{
        last7Days:0,
        total:0
    },
    subscriptionRevenue:{
        today:0,
        thisMonth:0,
        lastMonth:0
    }
  });
  const [loading, setLoading] = useState(false);
  async function getInitialData(userId: number) {
    try {
      setLoading(true);
      const {data} = await client.get(`api/v1/admin/users/${userId}/performance`);
      if(data){
        setPerformanceData(data);
      }
    } catch (error) {
      return [];
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getInitialData(user.id);
  }, [user]);

  return (
    <Wrapper>
      {loading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <ActiveUsers>
            <h3>Subscribers</h3>
            <ul>
              <li>
                <span>Last 7 days</span>
                <b>{performanceData.activeUsers.last7Days}</b>
              </li>
              <li>
                <span>Total</span>
                <b>{performanceData.activeUsers.total}</b>
              </li>
            </ul>
          </ActiveUsers>

          <PerformanceStats>
            <h3>Engagement</h3>
            {/* <div className="meta">
          <span>Last 7 days vs previous 7 days</span>
          <BsChevronDown />
        </div> */}

            <ul>
              <li>
                <h6>Views</h6>
                <h4>{performanceData.engagement.views}</h4>
                {/* <span>+442 (+17%)</span> */}
              </li>
              <li>
                <h6>Likes</h6>
                <h4>{performanceData.engagement.likes}</h4>
                {/* <span>+1.10 (+17%)</span> */}
              </li>
              <li>
                <h6>Comments</h6>
                <h4>{performanceData.engagement.comments}</h4>
                {/* <span>+1.10 (+17%)</span> */}
              </li>
            </ul>
          </PerformanceStats>

          {/* <PerformceGraph>
        <div className="head">
          <ul>
            <h3>Churn Rate</h3>
            <li>
              <span>2%</span>
              <BsArrowDownCircleFill />
            </li>
          </ul>

          <div className="filter">
            <div className="info">
              <span>13-19 Jan 2024</span>
              <b>Last 7 days</b>
            </div>
            <BsChevronDown />
          </div>
        </div>

        <img src="/temp/perfomance-graph-temp-img.png" alt="" />
      </PerformceGraph> */}
        </>
      )}
    </Wrapper>
  );
};

export default PerformanceTab;
