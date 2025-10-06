"use client"
import { GoPlusCircle } from 'react-icons/go'
import { FormWrapper } from '../styles'
import { Form, Input, Row, UploadBox, Wrapper } from './styles'
import { useFormContext } from 'react-hook-form'

const SecondStep = () => {
    const { register, formState: { errors }, watch, setValue } = useFormContext()
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
        if (e.target.files && e.target.files.length > 0) {
            setValue(fieldName, e.target.files)
        }
    }

    return (
        <Wrapper>
            <FormWrapper>
                <h2>Emergency Contact Details</h2>
                <Form>
                    <Row>
                        <Input $error={!!errors.emergencyFirstName}>
                            <label htmlFor="emergencyFirstName">First Name</label>
                            <input 
                                id="emergencyFirstName"
                                type="text"
                                {...register('emergencyFirstName', { required: 'Emergency contact name is required' })}
                            />
                            {errors.emergencyFirstName && (
                                <span className="text-danger">{errors.emergencyFirstName.message as string}</span>
                            )}
                        </Input>
                        <Input $error={!!errors.emergencyPhone}>
                            <label htmlFor="emergencyPhone">Phone Number</label>
                            <input 
                                id="emergencyPhone"
                                type="tel"
                                {...register('emergencyPhone', { 
                                    required: 'Emergency phone is required',
                                    pattern: {
                                        value: /^[0-9\-+ ]+$/,
                                        message: 'Invalid phone number'
                                    }
                                })}
                            />
                            {errors.emergencyPhone && (
                                <span className="text-danger">{errors.emergencyPhone.message as string}</span>
                            )}
                        </Input>
                        <Input $error={!!errors.emergencyRelationship}>
                            <label htmlFor="emergencyRelationship">Relationship</label>
                            <input 
                                id="emergencyRelationship"
                                type="text"
                                {...register('emergencyRelationship', { 
                                    required: 'Relationship is required' 
                                })}
                            />
                            {errors.emergencyRelationship && (
                                <span className="text-danger">{errors.emergencyRelationship.message as string}</span>
                            )}
                        </Input>
                    </Row>

                    <Input $error={!!errors.emergencyAddress}>
                        <label htmlFor="emergencyAddress">Address</label>
                        <input 
                            id="emergencyAddress"
                            type="text"
                            {...register('emergencyAddress', { 
                                required: 'Emergency address is required' 
                            })}
                        />
                        {errors.emergencyAddress && (
                            <span className="text-danger">{errors.emergencyAddress.message as string}</span>
                        )}
                    </Input>
                </Form>
            </FormWrapper>

            <FormWrapper>
                <h2>ID Upload</h2>
                <Form>
                    <Row>
                        <Input $error={!!errors.idType}>
                            <label htmlFor="idType">ID Type</label>
                            <select 
                                id="idType"
                                {...register('idType', { required: 'ID type is required' })}
                            >
                                <option value="">select</option>
                                <option value="passport">Passport</option>
                                <option value="driving_license">Driving License</option>
                                <option value="national_id">National ID</option>
                            </select>
                            {errors.idType && (
                                <span className="text-danger">{errors.idType.message as string}</span>
                            )}
                        </Input>
                        <Input $error={!!errors.idFullName}>
                            <label htmlFor="idFullName">Full Name (as on ID)</label>
                            <input 
                                id="idFullName"
                                type="text"
                                {...register('idFullName', { 
                                    required: 'Full name on ID is required' 
                                })}
                            />
                            {errors.idFullName && (
                                <span className="text-danger">{errors.idFullName.message as string}</span>
                            )}
                        </Input>
                        <Input $error={!!errors.idNumber}>
                            <label htmlFor="idNumber">ID Number</label>
                            <input 
                                id="idNumber"
                                type="text"
                                {...register('idNumber', { 
                                    required: 'ID number is required' 
                                })}
                            />
                            {errors.idNumber && (
                                <span className="text-danger">{errors.idNumber.message as string}</span>
                            )}
                        </Input>

                        <Input $error={!!errors.idDocument}>
                            <label htmlFor="idDocument">ID Document (PDF/Image)</label>
                            <input
                                type="file"
                                id="idDocument"
                                // style={{ visibility: 'hidden' }}
                                onChange={(e) => handleFileChange(e, 'idDocument')}
                                accept="image/*,.pdf"
                            />
                            <UploadBox>
                                {watch('idDocument')?.[0] ? (
                                    <div className="img-box">
                                        <span>{watch('idDocument')[0].name}</span>
                                    </div>
                                ) : (
                                    <div className="img-box">
                                        <img src="/icons/file-icon.svg" alt="" />
                                    </div>
                                )}
                                <div className="info">
                                    <h3>Upload a file <span>or drag and drop</span></h3>
                                    <p>JPEG, PNG, GIF, PDF up to 10MB</p>
                                </div>
                            </UploadBox>
                            {errors.idDocument && (
                                <span className="text-danger">ID document is required</span>
                            )}
                        </Input>
                    </Row>

                    {/* <button 
                        type="button" 
                        className="add-new-id-btn"
                        onClick={() => {
                            // Handle adding a new ID (you might want to manage this in parent component)
                            console.log('Add new ID clicked')
                        }}
                    >
                        <GoPlusCircle />
                        <span>Add a new ID</span>
                    </button> */}
                </Form>
            </FormWrapper>

            <FormWrapper>
                <h2>Bank Details</h2>
                <Form>
                    <Row>
                        <Input $error={!!errors.accountNumber}>
                            <label htmlFor="accountNumber">Account Number</label>
                            <input 
                                id="accountNumber"
                                type="text"
                                {...register('accountNumber', { 
                                    required: 'Account number is required',
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: 'Account number must contain only numbers'
                                    }
                                })}
                            />
                            {errors.accountNumber && (
                                <span className="text-danger">{errors.accountNumber.message as string}</span>
                            )}
                        </Input>
                        <Input $error={!!errors.accountName}>
                            <label htmlFor="accountName">Account Name</label>
                            <input 
                                id="accountName"
                                type="text"
                                {...register('accountName', { 
                                    required: 'Account name is required' 
                                })}
                            />
                            {errors.accountName && (
                                <span className="text-danger">{errors.accountName.message as string}</span>
                            )}
                        </Input>
                        <Input $error={!!errors.bankName}>
                            <label htmlFor="bankName">Bank Name</label>
                            <input 
                                id="bankName"
                                type="text"
                                {...register('bankName', { 
                                    required: 'Bank name is required' 
                                })}
                            />
                            {errors.bankName && (
                                <span className="text-danger">{errors.bankName.message as string}</span>
                            )}
                        </Input>
                    </Row>

                    <Input $error={!!errors.bankAddress}>
                        <label htmlFor="bankAddress">Bank Address</label>
                        <input 
                            id="bankAddress"
                            type="text"
                            {...register('bankAddress', { 
                                required: 'Bank address is required' 
                            })}
                        />
                        {errors.bankAddress && (
                            <span className="text-danger">{errors.bankAddress.message as string}</span>
                        )}
                    </Input>
                </Form>
            </FormWrapper>
        </Wrapper>
    )
}

export default SecondStep