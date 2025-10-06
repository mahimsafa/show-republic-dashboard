import { useState } from "react";
import {
  Container,
  TableItems,
  TableWrapper,
  FilterBox,
  SearchBar,
  Wrapper,
} from "./styles";
import UserProfile from "../users_tab/user-profile/UserProfile";
import { BsChevronRight } from "react-icons/bs";
import Pagination from "@/components/Pagination";

const RolesTab = () => {
  const [currentTab, setCurrentTab] = useState("all");
  const [showProfileModal, setShowProfileModal] = useState(false);
  return (
    <>
      <Wrapper>
        <SearchBar>
          <img className="search-icon" src="/icons/search-icon.svg" alt="" />
          <input type="text" placeholder="Search" />

          <FilterBox>
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
          </FilterBox>
        </SearchBar>

        <Container>
          <TableWrapper>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, idx) => {
              return (
                <TableItems key={idx} onClick={() => setShowProfileModal(true)}>
                  <li>
                    <b>Marketing</b>
                    <span>Created Jan. 5th 2021</span>
                  </li>
                  <li>
                    <img src="/icons/people-icon.svg" alt="" />
                    <span>Roles: 4</span>
                  </li>
                  <li>
                    <img src="/icons/persons-icon.svg" alt="" />
                    <span>Admins: 25</span>
                  </li>
                  <li>
                    <BsChevronRight />
                  </li>
                </TableItems>
              );
            })}
          </TableWrapper>

          <Pagination
            currentPage={1}
            totalItems={10}
            itemsPerPage={10}
            onPageChange={(page) => console.log(page)}
          />
        </Container>
      </Wrapper>
      {showProfileModal && (
        <UserProfile
          closeModal={() => setShowProfileModal(false)}
          admin={null}
        />
      )}
    </>
  );
};

export default RolesTab;
