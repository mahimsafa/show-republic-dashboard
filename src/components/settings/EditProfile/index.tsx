"use client";
import Image from "next/image";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { BiMessageSquareEdit } from "react-icons/bi";
import "./style.css";
interface StoreItem {
  id: string;
  img: string;
  title: string;
  delivery: string;
  company: string;
}

interface Playlist {
  img: string;
  icon: string;
  title: string;
  views: string;
  time: string;
}

interface UserProfile {
  id: string;
  banner: string;
  profile: string;
  name: string;
  email: string;
  category: string;
  date: string;
  description: string;
  username: string;
  subscribers: string;
  videos: string;
  website: string;
  location: string;
  mobile: string;
  store: StoreItem[];
  playlists: Playlist[];
}
interface Props {
  data: UserProfile;
}
const handleform = (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
}
const EditProfile: React.FC<Props> = ({ data }) => {
  return (
    <Form className="edit-profile d-flex flex-column gap-3 pt-sm-3" onSubmit={handleform}>
      <div className="position-relative">
        <Image
          src={data.banner}
          alt="banner"
          width={800}
          height={125}
          className="banner"
        />
        <button
          type="button"
          className="btn-edit-banner d-flex align-items-center gap-1"
        >
          <span className="edit-icon">
            <BiMessageSquareEdit />
          </span>
          <span>Edit banner</span>
        </button>
      </div>

      <div className="d-flex gap-2">
        <div className="position-relative">
          <Image
            src={data.profile}
            alt="profile"
            width={130}
            height={130}
            className="rounded-circle profile-img"
          />
          <button
            type="button"
            className="btn-edit-profile d-flex justify-content-center align-items-center"
          >
            <span className="edit-icon-2 d-flex justify-content-center align-items-center">
              <BiMessageSquareEdit />
            </span>
          </button>
        </div>

        <div className="d-flex flex-column gap-2">
          <h4 className="text-lg">{data.name}</h4>
          <p className="text-sm">
            {data.email}
            <span className="fw-bold opacity-25 px-1">&#124;</span>
            {data.username}
          </p>
          <p className="text-sm-2">{data.description}</p>
          <div className="d-flex flex-wrap gap-2">
            <div className="d-flex align-items-center gap-2">
              <Image
                src="/images/common/gift.png"
                alt="cat"
                width={24}
                height={24}
                className="gift-icon"
              />
              <p className="text-sm-2">{data.category}</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Image
                src="/images/common/calendar.png"
                alt="cal"
                width={24}
                height={24}
                className="calender-icon"
              />
              <p className="text-sm-2">{data.date}</p>
            </div>
          </div>
        </div>
      </div>

      <Row className="g-3">
        <Col md={6} className="d-flex flex-column gap-3">
          <div className="d-flex flex-column gap-1">
            <label htmlFor="name" className="text-sm-3">
              Display name
            </label>
            <input
              type="text"
              value={data.name}
              placeholder="name@example.com"
            />
          </div>
          <div className="d-flex flex-column gap-1">
            <label className="text-sm-3">Bio</label>
            <input
              type="text"
              value={data.description}
              placeholder="name@example.com"
            />
          </div>
          <div className="d-flex flex-column gap-1">
            <label className="text-sm-3">Website</label>
            <input
              type="text"
              value={data.website}
              placeholder="name@example.com"
            />
          </div>
        </Col>
        <Col className="d-flex flex-column gap-3">
          <div className="d-flex flex-column gap-1">
            <label className="text-sm-3">Username</label>
            <input
              type="text"
              value={data.username}
              placeholder="name@example.com"
            />
          </div>
          <div className="d-flex flex-column gap-1">
            <label className="text-sm-3">Location</label>
            <input
              type="text"
              value={data.location}
              placeholder="name@example.com"
            />
          </div>
          <div className="d-flex flex-column gap-1">
            <label className="text-sm-3">Mobile</label>
            <input
              type="text"
              value={data.mobile}
              placeholder="name@example.com"
            />
          </div>
        </Col>
      </Row>

      <button className="btn-submit" type="submit">
        Save Changes
      </button>
    </Form>
  );
};

export default EditProfile;
