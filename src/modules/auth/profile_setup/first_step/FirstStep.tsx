"use client"
import { Form, Input, Row, Wrapper } from './styles'
import { useFormContext } from 'react-hook-form'
import { useState, useEffect } from 'react'

const countries = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'AU', name: 'Australia' },
    { code: 'IN', name: 'India' },
    { code: 'BD', name: 'Bangladesh' },
    { code: 'SG', name: 'Singapore' },
    { code: 'MY', name: 'Malaysia' },
    { code: 'JP', name: 'Japan' },
    { code: 'KR', name: 'South Korea' },
    { code: 'CN', name: 'China' },
    { code: 'DE', name: 'Germany' },
    { code: 'FR', name: 'France' },
    { code: 'IT', name: 'Italy' },
    { code: 'ES', name: 'Spain' },
    { code: 'BR', name: 'Brazil' },
    { code: 'MX', name: 'Mexico' },
    { code: 'ZA', name: 'South Africa' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'EG', name: 'Egypt' },
    { code: 'SA', name: 'Saudi Arabia' },
    { code: 'AE', name: 'United Arab Emirates' },
    { code: 'RU', name: 'Russia' },
    { code: 'TR', name: 'Turkey' },
    { code: 'ID', name: 'Indonesia' },
    { code: 'TH', name: 'Thailand' },
    { code: 'VN', name: 'Vietnam' },
    { code: 'PH', name: 'Philippines' },
    { code: 'PK', name: 'Pakistan' },
    { code: 'LK', name: 'Sri Lanka' },
    { code: 'NP', name: 'Nepal' },
    { code: 'BT', name: 'Bhutan' },
    { code: 'MV', name: 'Maldives' },
    { code: 'AF', name: 'Afghanistan' },
    { code: 'IR', name: 'Iran' },
    { code: 'IQ', name: 'Iraq' },
    { code: 'JO', name: 'Jordan' },
    { code: 'LB', name: 'Lebanon' },
    { code: 'OM', name: 'Oman' },
    { code: 'QA', name: 'Qatar' },
    { code: 'KW', name: 'Kuwait' },
    { code: 'BH', name: 'Bahrain' },
    { code: 'IL', name: 'Israel' },
    { code: 'PS', name: 'Palestine' },
    { code: 'SY', name: 'Syria' },
    { code: 'YE', name: 'Yemen' },
]

const FirstStep = () => {
    const { register, formState: { errors }, watch, setValue, trigger } = useFormContext()
    const [isCountrySelected, setIsCountrySelected] = useState(false)
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
        if (e.target.files && e.target.files.length > 0) {
            setValue(fieldName, e.target.files)
        }
    }

    return (
        <Wrapper>
            <h2>Personal Details</h2>
            <Form>
                <Row>
                    <Input $error={!!errors.name}>
                        <label htmlFor="name">Full Name</label>
                        <input 
                            id="name"
                            type="text"
                            {...register('name', { required: 'Full name is required' })}
                        />
                        {errors.name && <span className="text-danger">{errors.name.message as string}</span>}
                    </Input>
                </Row>
                <Row>
                    {/* <Input $error={!!errors.email}>
                        <label htmlFor="email">Email</label>
                        <input 
                            id="email"
                            type="email"
                            {...register('email', { 
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address'
                                }
                            })}
                        />
                        {errors.email && <span className="text-danger">{errors.email.message as string}</span>}
                    </Input> */}
                    <Input $error={!!errors.phone}>
                        <label htmlFor="phone">Phone Number</label>
                        <input 
                            id="phone"
                            type="tel"
                            {...register('phone', { 
                                required: 'Phone number is required',
                                pattern: {
                                    value: /^[0-9\-+ ]+$/,
                                    message: 'Invalid phone number'
                                }
                            })}
                        />
                        {errors.phoneNumber && <span className="text-danger">{errors.phoneNumber.message as string}</span>}
                    </Input>
                    <Input $error={!!errors.country}>
                        <label htmlFor="country">Country</label>
                        <select 
                            id="country"
                            {...register('country', { 
                                required: 'Country is required',
                                onChange: (e) => {
                                    setIsCountrySelected(!!e.target.value);
                                    // Clear state and city when country changes
                                    setValue('state', '');
                                    setValue('city', '');
                                    trigger(['state', 'city']);
                                }
                            })}
                        >
                            <option value="">Select a country</option>
                            {countries.map((country) => (
                                <option key={country.code} value={country.name}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                        {errors.country && <span className="    text-danger">{errors.country.message as string}</span>}
                    </Input>
                </Row>
                <Row>
                    <Input $error={!!errors.state}>
                        <label htmlFor="state">State / Province</label>
                        <input
                            id="state"
                            type="text"
                            {...register('state', { 
                                required: 'State/Province is required',
                                disabled: !isCountrySelected
                            })}
                            placeholder={isCountrySelected ? "Enter your state/province" : "Select country first"}
                        />
                        {errors.state && <span className="text-danger">{errors.state.message as string}</span>}
                    </Input>
                    <Input $error={!!errors.city}>
                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            type="text"
                            {...register('city', { 
                                required: 'City is required',
                                disabled: !watch('state')
                            })}
                            placeholder={watch('state') ? "Enter your city" : "Enter state first"}
                        />
                        {errors.city && <span className="text-danger">{errors.city.message as string}</span>}
                    </Input>
                    <Input $error={!!errors.address}>
                        <label htmlFor="address">Address</label>
                        <input 
                            id="address"
                            type="text"
                            {...register('address', { required: 'Address is required' })}
                        />
                        {errors.address && <span className="text-danger">{errors.address.message as string}</span>}
                    </Input>
                </Row>
                <Row>
                    <Input $error={!!errors.postalCode}>
                        <label htmlFor="postalCode">Postal Code</label>
                        <input 
                            id="postalCode"
                            type="text"
                            {...register('postalCode', { required: 'Postal code is required' })}
                        />
                        {errors.postalCode && <span className="text-danger">{errors.postalCode.message as string}</span>}
                    </Input>
                    <Input $error={!!errors.dateOfBirth}>
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <input 
                            id="dateOfBirth"
                            type="date"
                            {...register('dateOfBirth', { required: 'Date of birth is required' })}
                        />
                        {errors.dateOfBirth && <span className="text-danger">{errors.dateOfBirth.message as string}</span>}
                    </Input>
                    <Input $error={!!errors.gender}>
                        <label htmlFor="gender">Gender</label>
                        <select 
                            id="gender"
                            {...register('gender', { required: 'Gender is required' })}
                        >
                            <option value="">select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="prefer-not-to-say">Prefer not to say</option>
                        </select>
                        {errors.gender && <span className="text-danger">{errors.gender.message as string}</span>}
                    </Input>
                </Row>

                <Row>
                    <Input $error={!!errors.maritalStatus}>
                        <label htmlFor="maritalStatus">Marital Status</label>
                        <select 
                            id="maritalStatus"
                            {...register('maritalStatus', { required: 'Marital status is required' })}
                        >
                            <option value="">select</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="divorced">Divorced</option>
                            <option value="widowed">Widowed</option>
                        </select>
                        {errors.maritalStatus && <span className="text-danger">{errors.maritalStatus.message as string}</span>}
                    </Input>
                    <Input $error={!!errors.username}>
                        <label htmlFor="username">Username</label>
                        <input 
                            id="username"
                            type="text"
                            {...register('username', { required: 'Username is required' })}
                        />
                        {errors.username && <span className="text-danger">{errors.username.message as string}</span>}
                    </Input>
                    <Input $error={!!errors.offerLetter}>
                        <label htmlFor="offerLetter">Offer Letter</label>
                        <div className="attachment-select">
                            <input
                                type="file"
                                id="offerLetter"
                                style={{ display: 'none' }}
                                onChange={(e) => handleFileChange(e, 'offerLetter')}
                                accept=".pdf,.doc,.docx"
                            />
                            <label htmlFor="offerLetter">
                                <img src="/icons/attachment-icon.svg" alt="" />
                                <span>
                                    {watch('offerLetter')?.[0]?.name || 'Attach a file'}
                                </span>
                            </label>
                        </div>
                        {errors.offerLetter && <span className="text-danger">{errors.offerLetter.message as string}</span>}
                    </Input>
                </Row>

                <Row>
                    <div className="picture-upload">
                        <input
                            type="file"
                            id="profilePicture"
                            style={{ display: 'none' }}
                            onChange={(e) => handleFileChange(e, 'profilePicture')}
                            accept="image/*"
                        />
                        <label htmlFor="profilePicture" className="img-box">
                            {watch('profilePicture')?.[0] ? (
                                <img 
                                    src={URL.createObjectURL(watch('profilePicture')[0])} 
                                    alt="Profile preview"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            ) : (
                                <span>Click here <br />to Upload</span>
                            )}
                        </label>
                        <b>Upload Your <br />Profile Picture</b>
                    </div>
                    {/* <Input style={{visibility: 'hidden'}} />
                    <Input>
                        <label htmlFor="">Offer Letter</label>
                        <div className="attachment-select">
                            <img src="/icons/attachment-icon.svg" alt="" />
                            <span>Attach a file</span>
                        </div>

                        <ul>
                            <li>letteroff.pdf X</li>
                            <li>letteroff.pdf X</li>
                            <li>letteroff.pdf X</li>
                        </ul>
                    </Input> */}
                </Row>
            </Form>
        </Wrapper>
    )
}

export default FirstStep