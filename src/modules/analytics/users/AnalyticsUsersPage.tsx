"use client"

import { Container, CountryData, CountryList, FilterBox, SearchBar, Wrapper } from './styles'

const AnalyticsUsersPage = () => {

    return (
        <Wrapper>
            <SearchBar>
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
            </SearchBar>
            
            <Container>
                <h2>Users</h2>

                <CountryList>
                    <ul className="head">
                        <li>S/N</li>
                        <li>Name</li>
                        <li>Country</li>
                        <li>Email</li>
                        <li>Role / permission </li>
                        <li></li>
                    </ul>
                    {[1,2,3,4,5,6,7,8].map((item, idx) => {
                        return <CountryData key={idx}>
                            <li>#93890</li>
                            <li>
                                <img src="/temp/temp-person.png" alt="" />
                                <span>Nadine Bradtke</span>
                            </li>
                            <li>
                                <img src="/temp/temp-flag.png" alt="" />
                                <span>Canada</span>
                            </li>

                            <li>VonRueden@gmail.com</li>
                            <li>Director</li>
                            <li>Active</li>
                        </CountryData>
                    })}
                </CountryList>
            </Container>
        </Wrapper>
    )
}

export default AnalyticsUsersPage