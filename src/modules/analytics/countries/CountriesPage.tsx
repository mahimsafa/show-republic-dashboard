"use client"
import { useRouter } from 'next/navigation'
import { Container, CountryData, CountryList, FilterBox, SearchBar, Wrapper } from './styles'

const CountriesPage = () => {
    const router = useRouter()

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
                <h2>Countries</h2>

                <CountryList>
                    {[1,2,3,4,5,6,7,8].map((item, idx) => {
                        return <CountryData key={idx}>
                        <li onClick={() => router.push("/analytics/users")}>
                            <img src="/temp/temp-flag.png" alt="" />
                            <span>Canada</span>
                        </li>

                        <li>Users: 235,343</li>
                        <li>Brands: 23,342</li>
                        <li>Creator: 102,342</li>
                        <li>
                            <img src="/icons/right-arrow-icon.svg" alt="" />
                        </li>
                    </CountryData>
                    })}
                </CountryList>
            </Container>
        </Wrapper>
    )
}

export default CountriesPage