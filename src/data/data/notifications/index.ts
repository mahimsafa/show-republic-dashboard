import { StaticImageData } from "next/image";
import profile from "../../assets/images/Sidebar/profile.jpg";
import image from "../../assets/images/home/thumbnail_sm.png";

// Define the type for a single notification
interface Not{
  userImage: string | StaticImageData;
  name: string;
  image: string | StaticImageData;
  description: string;
  time: string;
}

// Define the type for a collection of notifications on a specific date
interface NotificationsByDate {
  date: string;
  notifications: Not[];
}

// Define the type for the entire array of notifications
export const allNotifications: NotificationsByDate[] = [
  {
    date: "Today",
    notifications: [
      {
        userImage: profile,
        name: "Rayn Frozen",
        image: image,
        description: "Uploaded a Playlist",
        time: "18 minutes ago",
      },
      {
        userImage: profile,
        name: "Rayn Frozen",
        image: image,
        description:
          "Lorem ipsum dolor sit amet consectetur. Non justo sit hendrerit lorem curabitur turpis urna ornare. Arcu consequat.",
        time: "18 minutes ago",
      },
      {
        userImage: profile,
        name: "Rayn Frozen",
        image: image,
        description:
          "Lorem ipsum dolor sit amet consectetur. Non justo sit hendrerit lorem curabitur turpis urna ornare. Arcu consequat.",
        time: "18 minutes ago",
      },
    ],
  },
  {
    date: "Yesterday",
    notifications: [
      {
        userImage: profile,
        name: "Rayn Frozen",
        image: image,
        description:
          "Lorem ipsum dolor sit amet consectetur. Non justo sit hendrerit lorem curabitur turpis urna ornare. Arcu consequat.",
        time: "18 minutes ago",
      },
      {
        userImage: profile,
        name: "Rayn Frozen",
        image: image,
        description:
          "Lorem ipsum dolor sit amet consectetur. Non justo sit hendrerit lorem curabitur turpis urna ornare. Arcu consequat.",
        time: "18 minutes ago",
      },
      {
        userImage: profile,
        name: "Rayn Frozen",
        image: image,
        description:
          "Lorem ipsum dolor sit amet consectetur. Non justo sit hendrerit lorem curabitur turpis urna ornare. Arcu consequat.",
        time: "18 minutes ago",
      },
    ],
  },
  {
    date: "Jan 12, 2024",
    notifications: [
      {
        userImage: profile,
        name: "Rayn Frozen",
        image: image,
        description:
          "Lorem ipsum dolor sit amet consectetur. Non justo sit hendrerit lorem curabitur turpis urna ornare. Arcu consequat.",
        time: "18 minutes ago",
      },
      {
        userImage: profile,
        name: "Rayn Frozen",
        image: image,
        description:
          "Lorem ipsum dolor sit amet consectetur. Non justo sit hendrerit lorem curabitur turpis urna ornare. Arcu consequat.",
        time: "18 minutes ago",
      },
      {
        userImage: profile,
        name: "Rayn Frozen",
        image: image,
        description:
          "Lorem ipsum dolor sit amet consectetur. Non justo sit hendrerit lorem curabitur turpis urna ornare. Arcu consequat.",
        time: "18 minutes ago",
      },
    ],
  },
];
