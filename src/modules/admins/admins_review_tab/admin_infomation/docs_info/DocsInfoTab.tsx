"use client"

import { TbDownload } from 'react-icons/tb'
import { DownloadOfferLetter, FieldCol, IdentityDocs, InfoWSection, Row, Wrapper } from './styles'

const DocsInfoTab = () => {

    return (
        <Wrapper>
            <InfoWSection>
                <h2>Offer Letter</h2>
                
                <DownloadOfferLetter>
                    <select name="" id="">
                        <option value="select">Select download file formate</option>
                    </select>

                    <button>
                        <img src="/icons/download-icon.svg" alt="" />
                        <span>Download letter</span>
                    </button>
                </DownloadOfferLetter>
            </InfoWSection>

            <InfoWSection>
                <h2>Identity Documents</h2>

                <IdentityDocs>
                    <div className="item">
                        <div className="head">
                            <div className="attachment-box">
                                <img src="/icons/img-icon.svg" alt="" />
                                <span>IMG23.jpeg</span>
                            </div>

                            <TbDownload />
                        </div>

                        <ul>
                            <li>
                                <span>ID Type:</span>
                                <b>National ID card</b>
                            </li>
                            <li>
                                <span>Name:</span>
                                <b>Richard Adedeji Obaro</b>
                            </li>
                            <li>
                                <span>No:</span>
                                <b>1234567890</b>
                            </li>
                        </ul>
                    </div>


                    <div className="item">
                        <div className="head">
                            <div className="attachment-box">
                                <img src="/icons/img-icon.svg" alt="" />
                                <span>IMG23.jpeg</span>
                            </div>

                            <TbDownload />
                        </div>

                        <ul>
                            <li>
                                <span>ID Type:</span>
                                <b>National ID card</b>
                            </li>
                            <li>
                                <span>Name:</span>
                                <b>Richard Adedeji Obaro</b>
                            </li>
                            <li>
                                <span>No:</span>
                                <b>1234567890</b>
                            </li>
                        </ul>
                    </div>
                </IdentityDocs>
            </InfoWSection>


            <InfoWSection>
                <h2>Bank details</h2>

                <FieldCol>
                    <span>Full Name</span> 
                    <b>Richard Adedeji Obaro</b>
                </FieldCol>

                <Row>
                    <FieldCol>
                        <span>Account number</span> 
                        <b>0126765699</b>
                    </FieldCol>
                    <FieldCol>
                        <span>Bank Name</span> 
                        <b>Guaranty Trust Bank</b>
                    </FieldCol>
                </Row>
            </InfoWSection>
        </Wrapper>
    )
}

export default DocsInfoTab