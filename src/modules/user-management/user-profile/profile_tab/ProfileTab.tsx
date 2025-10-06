import { ActionWrapper, Section, SectionContainer, Wrapper } from "./styles"

const ProfileTab = ({data}) => {
    return <Wrapper>
        <Section>
            <h3>Contact</h3>
            <SectionContainer>
                <ul>
                    <li>
                        <b>Email:</b>
                        <span>{data.email}</span>
                    </li>
                    <li>
                        <b>Phone Number:</b>
                        <span>{data.phone}</span>
                    </li>
                    <li>
                        <b>Username:</b>
                        <span>{data.username}</span>
                    </li>
                </ul>
            </SectionContainer>
        </Section>

        <Section>
            <h3>Account</h3>
            <SectionContainer>
                <h4>Creator</h4>
                <ul>
                    <li>
                        <b>Total Posts:</b>
                        <span>{data.totalPosts || 0}</span>
                    </li>
                    <li>
                        <b>Total Earnings:</b>
                        <span>{data.totalEarnings || 0}</span>
                    </li>
                    <li>
                        <b>Joined:</b>
                        <span>{new Date(data.createdAt).toLocaleDateString()}</span>
                    </li>
                </ul>
            </SectionContainer>
            {/* <SectionContainer>
                <h4>Brand</h4>
                <ul>
                    <li>
                        <b>Total Posts:</b>
                        <span>{data.totalPosts}</span>
                    </li>
                    <li>
                        <b>Total Earnings:</b>
                        <span>{data.totalEarnings}</span>
                    </li>
                    <li>
                        <b>Joined:</b>
                        <span>{new Date(data.createdAt).toLocaleDateString()}</span>
                    </li>
                </ul>
            </SectionContainer> */}
        </Section>

        <Section>
            <h3>Geo-Location</h3>
            <SectionContainer>
                <ul>
                    <li>
                        <b>Location:</b>
                        <span>{data.location} </span>
                    </li>
                    {/* <li>
                        <b>Time Zone:</b>
                        <span>{data.timezone}</span>
                    </li> */}
                </ul>
            </SectionContainer>
        </Section>


        {/* <Section>
            <h3>Additional Information</h3>
            <SectionContainer>
                <ul>
                    <li>
                        <b>Language:</b>
                        <span>{data.language}</span>
                    </li>
                </ul>
            </SectionContainer>
        </Section> */}
    </Wrapper>
}

export default ProfileTab