import { useState } from "react";
import {
  Container,
  TableItems,
  TableWrapper,
  FilterBox,
  SearchBar,
  Wrapper,
} from "./styles";
import UserProfile from "./user-profile/UserProfile";
import { IAdmin } from "@/typings/admin";
import { getImgURL } from "@/utils/image";

interface Props {
  admins: IAdmin[];
}

const UsersTab = ({ admins }: Props) => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [adminDetails, setAdminDetails] = useState<IAdmin | null>(null);
  if (!admins) return null;
  return (
    <>
      <Wrapper>
        {/* <SearchBar>
                    <img className="search-icon" src="/icons/search-icon.svg" alt="" />
                    <input type="text" placeholder="Search" />
                    <FilterBox>
                        <button>
                            <img src="/icons/filter-icon.svg" alt="" />
                            <span>Filter</span>
                            <img className="down-arrow" src="/icons/arrow-down-icon.svg" alt="" />
                        </button>
                        <button>
                            <img src="/icons/sort-icon.svg" alt="" />
                            <span>Sort By</span>
                            <img className="down-arrow" src="/icons/arrow-down-icon.svg" alt="" />
                        </button>
                    </FilterBox>
                </SearchBar> */}

        <Container>
          <TableWrapper>
            <ul className="head">
              <li>ID</li>
              <li>Name</li>
              <li>Role / permission</li>
              <li>Email</li>
              <li>Status</li>
            </ul>
            {admins.map((item, idx) => {
              return (
                <TableItems key={idx}>
                  <li>{item.id}</li>
                  <li>
                    <img src={getImgURL(item.profilePicture)} alt={item.name} />
                    <span>{item.name}</span>
                  </li>
                  <li>
                    <span>{item.jobTitle}</span>
                  </li>

                  <li
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setAdminDetails(item);
                      setShowProfileModal(true);
                    }}
                  >
                    {item.email}
                  </li>
                  <li>{item?.isActive ? "Active" : "Inactive"}</li>
                </TableItems>
              );
            })}
          </TableWrapper>

          {/* <Pagination currentPage={1} totalItems={10} itemsPerPage={10} onPageChange={(page) => console.log(page)} /> */}
        </Container>
      </Wrapper>
      {showProfileModal && (
        <UserProfile
          closeModal={() => setShowProfileModal(false)}
          admin={adminDetails}
        />
      )}
    </>
  );
};

export default UsersTab;
