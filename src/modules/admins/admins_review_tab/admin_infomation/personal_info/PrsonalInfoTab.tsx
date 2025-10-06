"use client"

import { FieldCol, InfoWSection, Row, Wrapper } from './styles'

const PrsonalInfoTab = () => {

    return (
        <Wrapper>
            <InfoWSection>
                <h2>Personal Data</h2>


                <FieldCol>
                    <span>Full Name</span> 
                    <b>Richard Adedeji Obaro</b>
                </FieldCol>

                <Row>
                    <FieldCol>
                        <span>Birth date</span> 
                        <b>10th May 2000</b>
                    </FieldCol>
                    <FieldCol>
                        <span>Gender</span> 
                        <b>Male</b>
                    </FieldCol>
                </Row>
                <Row>
                    <FieldCol>
                        <span>Nationality</span> 
                        <b>Nigerian</b>
                    </FieldCol>
                    <FieldCol>
                        <span>Marital Status</span> 
                        <b>Single</b>
                    </FieldCol>
                </Row>
                <Row>
                    <FieldCol>
                        <span>State</span> 
                        <b>Ontario</b>
                    </FieldCol>
                    <FieldCol style={{visibility: 'hidden'}} />
                </Row>
            </InfoWSection>

            <InfoWSection>
                <h2>Contact Data</h2>
                <Row>
                    <FieldCol>
                        <span>Email address</span> 
                        <b>obaroricheese@gmail.com</b>
                    </FieldCol>
                    <FieldCol>
                        <span>Phone number</span> 
                        <b>+234 7061548319</b>
                    </FieldCol>
                </Row>
                <Row>
                    <FieldCol>
                        <span>Postal code</span> 
                        <b>GHT 07647</b>
                    </FieldCol>
                    <FieldCol>
                        <span>Address</span> 
                        <b>This is your address place holder</b>
                    </FieldCol>
                </Row>
                
            </InfoWSection>

            <InfoWSection>
                <h2>Emergency Contact info</h2>

                <FieldCol>
                    <span>Full Name</span> 
                    <b>Richard Adedeji Obaro</b>
                </FieldCol>

                <FieldCol>
                    <span>Address</span> 
                    <b>This is Address place holder</b>
                </FieldCol>

                <Row>
                    <FieldCol>
                        <span>Phone number</span> 
                        <b>+234 7061548319</b>
                    </FieldCol>
                    <FieldCol>
                        <span>Relationship</span> 
                        <b>Twin Brother</b>
                    </FieldCol>
                </Row>
            </InfoWSection>
        </Wrapper>
    )
}

export default PrsonalInfoTab