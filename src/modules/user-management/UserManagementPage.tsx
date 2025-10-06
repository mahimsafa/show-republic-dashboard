"use client";
import { useState } from "react";
import {
  Container,
  TableItems,
  TableWrapper,
  FilterBox,
  SearchBar,
  TabItem,
  TabWrapper,
  Wrapper,
} from "./styles";
import Pagination from "@/components/Pagination";
import UserProfile from "./user-profile/UserProfile";

const UserManagementPage = ({data}) => {
  const [currentTab, setCurrentTab] = useState("all");
  const [selectedUser, setSelectedUser] = useState(null);
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
          {/* <TabItem
            isActive={currentTab == "blacklisted"}
            onClick={() => {
              setCurrentTab("blacklisted");
            }}
          >
            Black Lists
          </TabItem> */}
        </TabWrapper>
        <SearchBar>
          <img className="search-icon" src="/icons/search-icon.svg" alt="" />
          <input type="text" placeholder="Search" />

          {/* <FilterBox>
            <button>
              <img src="/icons/filter-icon.svg" alt="" />
              <span>Filter</span>
              <img
                className="down-arrow"
                src="/icons/arrow-down-icon.svg"
                alt=""
              />
            </button>
            <button>
              <img src="/icons/sort-icon.svg" alt="" />
              <span>Sort By</span>
              <img
                className="down-arrow"
                src="/icons/arrow-down-icon.svg"
                alt=""
              />
            </button>
          </FilterBox> */}
        </SearchBar>

        <Container>
          <TableWrapper>
            <ul className="head">
              <li>ID</li>
              <li>Name</li>
              <li>Account Type</li>
              <li>Email</li>
              <li>Status</li>
            </ul>
            {data.data.map((item: any) => {
              return (
                <TableItems key={item.id} >
                  <li>{item.id}</li>
                  <li onClick={() => setSelectedUser(item)} style={{cursor: "pointer"}}>
                    <img src={item.avatar?item.avatar:"/images/avatar.webp"} alt="" />
                    <span >{item.name}</span>
                  </li>
                  <li>
                    <span>{item.isCreator ? "Creator" : "User"}</span>
                  </li>

                  <li>{item.email}</li>
                  <li>{item.isBlocked ? "Blocked" : "Active"}</li>
                </TableItems>
              );
            })}
          </TableWrapper>

          <Pagination
            currentPage={data.pagination?.page}
            totalItems={data.pagination?.total}
            itemsPerPage={data.pagination?.limit}
            onPageChange={(page) => console.log(page)}
          />
        </Container>
      </Wrapper>
      {selectedUser && (
        <UserProfile closeModal={() => setSelectedUser(null)} user={selectedUser} />
      )}
    </>
  );
};

export default UserManagementPage;
