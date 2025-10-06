"use client"

import { FieldCol, InfoWSection, Row, Wrapper } from './styles'

const JobInfoTab = () => {

    return (
        <Wrapper>
            <InfoWSection>
                <h2>Job Info</h2>

                <Row>
                    <FieldCol>
                        <span>Position</span> 
                        <b>Marketer</b>
                    </FieldCol>
                    <FieldCol>
                        <span>Employee ID</span> 
                        <b>Colab12345</b>
                    </FieldCol>
                </Row>

                <Row>
                    <FieldCol>
                        <span>Work Location</span> 
                        <b>Remote</b>
                    </FieldCol>
                    <FieldCol>
                        <span>Work Email</span> 
                        <b>richard@colab.com</b>
                    </FieldCol>
                </Row>

                <Row>
                    <FieldCol>
                        <span>Start date</span> 
                        <b>09th May 2022</b>
                    </FieldCol>
                    <FieldCol>
                        <span>Salary</span> 
                        <b>$2500</b>
                    </FieldCol>
                </Row>

                <Row>
                    <FieldCol>
                        <span>Job Type</span> 
                        <b>Contract </b>
                    </FieldCol>
                    <FieldCol style={{visibility: 'hidden'}} />
                </Row>
            </InfoWSection>
        </Wrapper>
    )
}

export default JobInfoTab