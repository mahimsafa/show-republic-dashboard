import img1 from "../../assets/images/profile/img11.png";
import img2 from "../../assets/images/profile/img1.png";
import img3 from "../../assets/images/profile/img2.png";
import img4 from "../../assets/images/profile/img3.png";
import img5 from "../../assets/images/profile/img4.png";
import img6 from "../../assets/images/profile/img5.png";
import img7 from "../../assets/images/profile/img6.png";
import img8 from "../../assets/images/profile/img7.png";
import img9 from "../../assets/images/profile/img8.png";
import img10 from "../../assets/images/profile/img9.png";
import img11 from "../../assets/images/profile/img10.png";
import { StaticImageData } from "next/image";

interface StoreItem {
    id: string;
    img: string | StaticImageData;
    title: string;
    delivery: string;
    company: string;
}

export const store: StoreItem[] = [
    {
        id: "1",
        img: img1,
        title: "New Custom Shoes M34 SZ56 w12.5",
        delivery: "Delivery Nation wide",
        company: "Nike"
    },
    {
        id: "2",
        img: img2,
        title: "Sony Supper bass headphoes",
        delivery: "Limited delivery areas",
        company: "Sony"
    },
    {
        id: "3",
        img: img3,
        title: "Smart watch ",
        delivery: "Delivery Nation wide",
        company: "Nike"
    },
    {
        id: "4",
        img: img4,
        title: "Handcrafted Metal Bike",
        delivery: "Delivery Nation wide",
        company: "Nike"
    },
    {
        id: "5",
        img: img5,
        title: "Handcrafted Metal Chicken",
        delivery: "Delivery Nation wide",
        company: "Nike"
    },
    {
        id: "6",
        img: img6,
        title: "Gorgeous Gold Steel black strap wrist watch",
        delivery: "Delivery Nation wide",
        company: "Jumian"
    },
    {
        id: "7",
        img: img7,
        title: "Tasty Frozen Chips",
        delivery: "Delivery Nation wide",
        company: "Canon "
    },
    {
        id: "8",
        img: img8,
        title: "Apple Airpods ",
        delivery: "Delivery Nation wide",
        company: "Apple"
    },
    {
        id: "9",
        img: img9,
        title: "Handmade Metal Pizza",
        delivery: "Delivery Nation wide",
        company: "Apple"
    },
    {
        id: "10",
        img: img10,
        title: "Ergonomic Metal Table",
        delivery: "Delivery Nation wide",
        company: "Apple"
    },
    {
        id: "11",
        img: img11,
        title: "Fantastic Soft Ball",
        delivery: "Delivery Nation wide",
        company: "Apple"
    },
    {
        id: "12",
        img: img11,
        title: "Fantastic Soft Ball",
        delivery: "Delivery Nation wide",
        company: "Apple"
    }
];
