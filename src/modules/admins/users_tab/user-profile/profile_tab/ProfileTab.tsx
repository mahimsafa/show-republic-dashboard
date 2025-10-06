import { IAdmin } from "@/typings/admin"
import { ActionWrapper, PermissionsWrapper, Section, SectionContainer, Wrapper } from "./styles"

interface Props {
    admin: IAdmin
}

const ProfileTab = ({admin}: Props) => {
    return <Wrapper>
        <Section>
            <h3>Contact</h3>
            <SectionContainer>
                <ul>
                    <li>
                        <b>Email:</b>
                        <span>{admin.email}</span>
                    </li>
                    <li>
                        <b>Phone Number:</b>
                        <span>{admin.phone}</span>
                    </li>
                    {/* <li>
                        <b>Username:</b>
                        <span>{admin.username}</span>
                    </li>
                    <li>
                        <b>Employee ID:</b>
                        <span>{admin.employeeId}</span>
                    </li> */}
                </ul>
            </SectionContainer>
        </Section>

        {/* <Section>
            <h3>Leave Information</h3>
            <SectionContainer>
                <ul>
                    <li>
                        <b>Total Number of leave:</b>
                        <span>3</span>
                    </li>
                    <li>
                        <b>Total Approved:</b>
                        <span>2</span>
                    </li>
                </ul>
            </SectionContainer>
        </Section> */}

        <Section>
            <h3>Work Location</h3>
            <SectionContainer>
                <ul>
                    <li>
                        <b>Region:</b>
                        <span>{admin.workLocation}</span>
                    </li>
                    {/* <li>
                        <b>Departments:</b>
                        <span>{admin.department}</span>
                    </li> */}
                </ul>
            </SectionContainer>
        </Section>

        <Section>
            <h3>Geo-Location</h3>
            <SectionContainer>
                <ul>
                    <li>
                        <b>Location:</b>
                        <span>{admin.location} </span>
                    </li>
                    <li>
                        <b>Time Zone:</b>
                        <span>{admin.timezone}</span>
                    </li>
                </ul>
            </SectionContainer>
        </Section>

        <Section>
            <h3>Additional Information</h3>
            <SectionContainer>
                <ul>
                    <li>
                        <b>Language:</b>
                        {/* @ts-expect-error to be implemented */}
                        <span>{admin.language}</span>
                    </li>
                </ul>
            </SectionContainer>
        </Section>

        {/* <PermissionsWrapper>
            <h3>Permissions</h3>

            <button>
                <img src="/icons/key-shield-icon.svg" alt="" />
                <span>View and Edit permissions</span>
            </button>
        </PermissionsWrapper> */}
    </Wrapper>
}

export default ProfileTab