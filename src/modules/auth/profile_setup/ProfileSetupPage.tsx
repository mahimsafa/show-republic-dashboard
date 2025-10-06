"use client"
import { IoMdArrowBack } from 'react-icons/io'
import { Asidebar, Container, Form, FormNav, FormWrapper, Head, Input, ConfirmProfileContent, PopupModal, Row, Wrapper, InviteSuccessContent } from './styles'
import FirstStep from './first_step/FirstStep'
import { useEffect, useState } from 'react'
import SecondStep from './second_step/SecondStep'
import { RiCloseLargeFill } from 'react-icons/ri'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-toastify'
import { getAuthToken } from '@/lib/auth'

type FormValues = {
  // Personal Details
  name: string
//   email: string
  phone: string
  username: string
  gender: string
  dateOfBirth: string
  country: string
  state: string
  city: string
  address: string
  postalCode: string
  maritalStatus: string
  offerLetter: FileList
  profilePicture: FileList
  
  // Emergency Contact
  emergencyName: string
  emergencyPhone: string
  emergencyRelationship: string
  emergencyAddress: string
  
  // ID Upload
  idType: string
  idFullName: string
  idNumber: string
  idDocument: FileList
  
  // Bank Details
  accountNumber: string
  accountName: string
  bankName: string
  bankAddress: string
}

const ProfileSetupPage = () => {
    const [currentStep, setCurrentStep] = useState("first")
    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [showSubmitSuccess, setShowSubmitSuccess] = useState(false)
    const [redirectCountdown, setRedirectCountdown] = useState(5)
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    const methods = useForm<FormValues>({
        defaultValues: {
            // Initialize form with empty values
            name: '',
            // email: '',
            phone: '',
            username: '',
            country: '',
            state: '',
            city: '',
            address: '',
            postalCode: '',
            dateOfBirth: '',
            gender: '',
            maritalStatus: '',
            emergencyName: '',
            emergencyPhone: '',
            emergencyRelationship: '',
            emergencyAddress: '',
            idType: '',
            idFullName: '',
            idNumber: '',
            accountNumber: '',
            accountName: '',
            bankName: '',
            bankAddress: ''
        },
        mode: 'onChange'
    })
    
    const { handleSubmit, trigger } = methods
    
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        setIsSubmitting(true)
        try {
            const formData = new FormData()
            
            // Append all form data to formData
            Object.entries(data).forEach(([key, value]) => {
                if (value instanceof FileList && value.length > 0) {
                    formData.append(key, value[0])
                } else if (value !== undefined && value !== null) {
                    formData.append(key, value as string)
                }
            })

            const token = getAuthToken()
            
            const response = await axios.put(process.env.NEXT_PUBLIC_API_URL + '/api/v1/admins/profile-setup', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            })
            
            setShowSubmitSuccess(true)
            setShowConfirmModal(false)
        } catch (error) {
            console.error('Error submitting form:', error)
            toast.error('Failed to submit form. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    useEffect(() => {
        if(showSubmitSuccess){
            // make a countdown feature here
            setRedirectCountdown(5)
            const interval = setInterval(() => {
                setRedirectCountdown((prevCountdown) => prevCountdown - 1)
            }, 1000)
            const timer = setTimeout(() => {
                clearInterval(interval)
                window.location.href = "/dashboard"
            }, 5000)

            return () => {
                clearTimeout(timer)
            }
        }
    }, [showSubmitSuccess])
    return (
        <Wrapper>
            <Head>
                <div className="left-img patterns-wrapper">
                    <img src="/icons/auth/pattern-2-vector.svg" alt="" />
                    <img src="/icons/auth/pattern-1-vector.svg" alt="" />
                </div>

                <h1>Profile Setup</h1>

                <div className="right-img patterns-wrapper">
                    <img src="/icons/auth/pattern-3-vector.svg" alt="" />
                    <img src="/icons/auth/pattern-4-vector.svg" alt="" />
                </div>
            </Head>
            <Container>
                <Asidebar>
                    <h1>WELCOME <br /> <span>ONBOARD</span></h1>
                    <p>Kindly fill in your correct details
                    in the spaces provided.</p>
                    <img src="/icons/welcome-vector.svg" alt="" />
                </Asidebar>

                <FormProvider {...methods}>
                    <FormWrapper>
                        {currentStep === "first" ? <FirstStep /> : <SecondStep />}

                        <FormNav>
                            <button 
                                type="button"
                                style={currentStep === "first" ? { visibility: 'hidden' } : {}}
                                onClick={() => {
                                    if (currentStep === "second") {
                                        setCurrentStep("first")
                                    }
                                }}
                                disabled={currentStep === "first"}
                            >
                                <IoMdArrowBack />
                                <span>Back</span>
                            </button>

                            <button 
                                type="button"
                                onClick={async () => {
                                    if (currentStep === "first") {
                                        const isValid = await trigger([
                                            'name', 'phone', 'country',
                                            'state', 'city', 'address', 'postalCode',
                                            'dateOfBirth', 'gender', 'maritalStatus'
                                        ])
                                        if (isValid) {
                                            setCurrentStep("second")
                                        }
                                    } else {
                                        const isValid = await trigger([
                                            'emergencyName', 'emergencyPhone', 'emergencyRelationship',
                                            'idType', 'idFullName', 'idNumber',
                                            'accountNumber', 'accountName', 'bankName'
                                        ])
                                        if (isValid) {
                                            setShowConfirmModal(true)
                                        }
                                    }
                                }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : currentStep === "second" ? 'Submit' : 'Next'}
                            </button>
                        </FormNav>
                    </FormWrapper>
                </FormProvider>
            </Container>

            {showConfirmModal && (
                <PopupModal>
                    <ConfirmProfileContent>
                        <div className="content">
                            <h2>Are you sure you want to submit your profile for review?</h2>
                            <div className="actions">
                                <button 
                                    onClick={handleSubmit(onSubmit)}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Yes'}
                                </button>
                                <button 
                                    onClick={() => setShowConfirmModal(false)}
                                    disabled={isSubmitting}
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </ConfirmProfileContent>
                </PopupModal>
            )}

            {showSubmitSuccess  && <PopupModal>
                <InviteSuccessContent>
                    <div className="head">
                        <div className="close" onClick={() => setShowSubmitSuccess(false)}>
                            <RiCloseLargeFill />
                        </div>
                    </div>

                    <div className="content">
                        <h2>Profile Submitted </h2>
                        
                        <p>Your profile has been submitted, redirecting to dashboard in {redirectCountdown} seconds </p>

                        <div className="actions">
                            <button onClick={() => window.location.href = "/dashboard"}>Dashboard</button>
                        </div>
                    </div>
                </InviteSuccessContent>
            </PopupModal>}
        </Wrapper>
    )
}

export default ProfileSetupPage