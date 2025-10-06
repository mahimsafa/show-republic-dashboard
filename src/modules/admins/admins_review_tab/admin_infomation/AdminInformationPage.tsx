"use client"

import { useState } from 'react'
import { ActionsWrapper, Container, FieldCol, InfoWrapper, InfoWSection, ProfileCard, Row, TabItem, TabWrapper, Wrapper } from './styles'
import PrsonalInfoTab from './personal_info/PrsonalInfoTab'
import JobInfoTab from './job_info/JobInfoTab'
import DocsInfoTab from './docs_info/DocsInfoTab'

const AdminInformationPage = () => {
    const [currentTab, setCurrentTab] = useState("personal_info")

    return (
        <Wrapper>
            <Container>
                <ProfileCard>
                    <div className="img-wrapper">
                        <img src="/temp/profile-face-temp.png" alt="" />
                    </div>

                    <h2>Richard Obaro</h2>

                    <FieldCol>
                        <span>Employee ID</span> 
                        <b>Colab12345</b>
                    </FieldCol>

                    <FieldCol>
                        <span>Role</span> 
                        <b>Marketing</b>
                    </FieldCol>

                    <FieldCol>
                        <span>Gender</span> 
                        <b>Male</b>
                    </FieldCol>

                    <FieldCol>
                        <span>Date of birth</span> 
                        <b>10th May 2000</b>
                    </FieldCol>

                    <FieldCol>
                        <span>Hire date</span> 
                        <b>09th May 2022</b>
                    </FieldCol>

                    <FieldCol>
                        <span>Job Type</span> 
                        <b>Contract</b>
                    </FieldCol>
                </ProfileCard>

                <InfoWrapper>
                    <TabWrapper>
                        <TabItem isActive={currentTab == "personal_info"} onClick={() => {setCurrentTab("personal_info")}}>Personal data</TabItem>
                        <TabItem isActive={currentTab == "job_info"} onClick={() => {setCurrentTab("job_info")}}>Job Information</TabItem>
                        <TabItem isActive={currentTab == "docs_info"} onClick={() => {setCurrentTab("docs_info")}}>Documents</TabItem>
                    </TabWrapper>
                    
                    {currentTab == "personal_info" ? <PrsonalInfoTab /> : currentTab == "job_info" ? <JobInfoTab /> : <DocsInfoTab /> }
                    <ActionsWrapper>
                        <button>Decline</button>
                        <button>Approve Profile</button>
                    </ActionsWrapper>
                </InfoWrapper>
            </Container>
        </Wrapper>
    )
}

export default AdminInformationPage