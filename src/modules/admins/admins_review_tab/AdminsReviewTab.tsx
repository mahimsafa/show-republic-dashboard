"use client";
import Pagination from "@/components/Pagination";
import {
  Container,
  TableItems,
  TableWrapper,
  FilterBox,
  SearchBar,
  Wrapper,
} from "./styles";
import { useRouter } from "next/navigation";

const AdminsReviewTab = () => {
  const router = useRouter();
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
            <ul className="head">
              <li>Name</li>
              <li>Email</li>
              <li>Submitted on</li>
              <li></li>
            </ul>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, idx) => {
              return (
                <TableItems key={idx}>
                  <li>
                    <img src="/temp/temp-person.png" alt="" />
                    <span>Nadine Bradtke</span>
                  </li>

                  <li>VonRueden@gmail.com</li>
                  <li>Jan. 5th 2021</li>
                  <li>
                    <button onClick={() => router.push("/admins/:id")}>
                      View Profile
                    </button>
                  </li>
                </TableItems>
              );
            })}
          </TableWrapper>

          <Pagination
            currentPage={1}
            totalItems={10}
            itemsPerPage={10}
            onPageChange={() => {}}
          />
        </Container>
      </Wrapper>
    </>
  );
};

export default AdminsReviewTab;
