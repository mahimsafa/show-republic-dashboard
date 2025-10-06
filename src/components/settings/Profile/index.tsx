/* eslint-disable no-redeclare */
import React from 'react';
import './style.css';
import { getImgURL } from '@/utils/image';

interface UserProfile {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    emailVerified: boolean;
    profilePicture: string | null;
    gender: string | null;
    location: string | null;
    mobile: string | null;
    dateOfBirth: string | null;
    hireDate: string | null;
    nationality: string | null;
    maritalStatus: string | null;
    state: string | null;
    city: string | null;
    address: string | null;
    postalCode: string | null;
    timezone: string | null;
    jobTitle: string | null;
    jobType: string;
    workLocation: string | null;
    salary: string | null;
    createdAt: string;
    updatedAt: string;
}

interface Props {
    data: UserProfile;
}

const ProfilePage: React.FC<Props> = ({ data }) => {
  return (
    <div className="profile-page">
      <div className="profile-sidebar">
        <div className="profile-img">
            <img src={getImgURL(data.profilePicture)} alt="" />
            {/* {data.avatar ? (
                <img src={data.avatar} alt="Profile" className="img" />
            ) : (
                <div className="avatar-placeholder">{data.name.charAt(0)}</div>
            )} */}
            <h2>{data.name}</h2>
        </div>
        <div className="profile-flex">
            <div className="field">
                <h1>Employee ID</h1>
                <p>{data.id}</p>
            </div>
            <div className="field">
                <h1>Email</h1>
                <p>{data.email}</p>
            </div>
            <div className="field">
                <h1>Gender</h1>
                <p>{data.gender || 'N/A'}</p>
            </div>
            <div className="field">
                <h1>Date of Birth</h1>
                <p>{data.dateOfBirth || 'N/A'}</p>
            </div>
            <div className="field">
                <h1>Hire Date</h1>
                <p>{data.hireDate ? new Date(data.hireDate).toLocaleDateString() : 'N/A'}</p>
            </div>
            <div className="field">
                <h1>Job Type</h1>
                <p>{data.jobType}</p>
            </div>
        </div>
      </div>

      <div className="main-content">
        <div className="personal-data">
          <h3>Personal Data</h3>
          <div className="grid">
          <div className="field full-width">
                <h1>Full Name</h1>
                <p>{data.name}</p>
            </div>
            <div className="field">
                <h1>Birth date</h1>
                <p>{data.dateOfBirth ? new Date(data.dateOfBirth).toLocaleDateString() : 'N/A'}</p>
            </div>
            <div className="field">
                <h1>Gender</h1>
                <p>{data.gender || 'N/A'}</p>
            </div>
            <div className="field">
                <h1>Nationality</h1>
                <p>{data.nationality || 'N/A'}</p>
            </div>
            <div className="field">
                <h1>Marital Status</h1>
                <p>{data.maritalStatus || 'N/A'}</p>
            </div>
            <div className="field">
                <h1>State</h1>
                <p>{data.state || 'N/A'}</p>
            </div>
            <div className="field">
                <h1>City</h1>
                <p>{data.city || 'N/A'}</p>
            </div>
            <div className="field">
                <h1>Time Zone</h1>
                <p>{data.timezone || 'N/A'}</p>
            </div>
          </div>
        </div>

        <div className="job-info">
          <h3>Job Info</h3>
          <div className="grid">
            <div className="field">
                <h1>Job Title</h1>
                <p>{data.jobTitle || 'N/A'}</p>
            </div>
            <div className="field">
                <h1>Employee ID</h1>
                <p>{data.id}</p>
            </div>
            <div className="field">
                <h1>Work Location</h1>
                <p>{data.workLocation || 'N/A'}</p>
            </div>
            <div className="field">
                <h1>Email</h1>
                <p>{data.email}</p>
            </div>
            <div className="field">
                <h1>Start Date</h1>
                <p>{data.hireDate ? new Date(data.hireDate).toLocaleDateString() : 'N/A'}</p>
            </div>
            <div className="field">
                <h1>Salary</h1>
                <p>{data.salary || 'N/A'}</p>
            </div>
            <div className="field">
                <h1>Job Type</h1>
                <p>{data.jobType}</p>
            </div>
          </div>
        </div>

        <div className="contact-data">
          <h3>Contact Data</h3>
          <div className="grid">
            <div className="field">
                <h1>Email Address</h1>
                <p>{data.email}</p>
            </div>
            <div className="field">
                <h1>Phone Number</h1>
                <p>{data.phone || data.mobile || 'N/A'}</p>
            </div>
            <div className="field">
                <h1>Postal Code</h1>
                <p>{data.postalCode || 'N/A'}</p>
            </div>
            <div className="field">
                <h1>Address</h1>
                <p>{data.address || 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
