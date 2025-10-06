import img1 from "../../../public/images/Sidebar/profile.jpg";
import img2 from "../../../public/images/Sidebar/profile.jpg";
import img3 from "../../../public/images/Sidebar/profile.jpg";
import img4 from "../../../public/images/Sidebar/profile.jpg";
import img5 from "../../../public/images/Sidebar/profile.jpg";
import img6 from "../../../public/images/Sidebar/profile.jpg";
import img7 from "../../../public/images/Sidebar/profile.jpg";
import img8 from "../../../public/images/Sidebar/profile.jpg";
import img9 from "../../../public/images/Sidebar/profile.jpg";
import img10 from "../../../public/images/Sidebar/profile.jpg";
import img11 from "../../../public/images/Sidebar/profile.jpg";

interface StoreItem {
    id: string;
    img: string;
    title: string;
    delivery: string;
    company: string;
}

export const store: StoreItem[] = [
    {
        id: "1",
        img: img1.src,
        title: "New Custom Shoes M34 SZ56 w12.5",
        delivery: "Delivery Nation wide",
        company: "Nike"
    },
    {
        id: "2",
        img: img2.src,
        title: "Sony Supper bass headphoes",
        delivery: "Limited delivery areas",
        company: "Sony"
    },
    {
        id: "3",
        img: img3.src,
        title: "Smart watch ",
        delivery: "Delivery Nation wide",
        company: "Nike"
    },
    {
        id: "4",
        img: img4.src,
        title: "Handcrafted Metal Bike",
        delivery: "Delivery Nation wide",
        company: "Nike"
    },
    {
        id: "5",
        img: img5.src,
        title: "Handcrafted Metal Chicken",
        delivery: "Delivery Nation wide",
        company: "Nike"
    },
    {
        id: "6",
        img: img6.src,
        title: "Gorgeous Gold Steel black strap wrist watch",
        delivery: "Delivery Nation wide",
        company: "Jumian"
    },
    {
        id: "7",
        img: img7.src,
        title: "Tasty Frozen Chips",
        delivery: "Delivery Nation wide",
        company: "Canon "
    },
    {
        id: "8",
        img: img8.src,
        title: "Apple Airpods ",
        delivery: "Delivery Nation wide",
        company: "Apple"
    },
    {
        id: "9",
        img: img9.src,
        title: "Handmade Metal Pizza",
        delivery: "Delivery Nation wide",
        company: "Apple"
    },
    {
        id: "10",
        img: img10.src,
        title: "Ergonomic Metal Table",
        delivery: "Delivery Nation wide",
        company: "Apple"
    },
    {
        id: "11",
        img: img11.src,
        title: "Fantastic Soft Ball",
        delivery: "Delivery Nation wide",
        company: "Apple"
    },
    {
        id: "12",
        img: img11.src,
        title: "Fantastic Soft Ball",
        delivery: "Delivery Nation wide",
        company: "Apple"
    }
];
