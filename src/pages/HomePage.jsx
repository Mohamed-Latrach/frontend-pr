import React from "react";
import { useSelector } from 'react-redux';
import Sidebar from "../components/Sidebar";
import { selectUser } from '../store/userSlice'; // Importing selectUser selector
import "../partials/HomePage.module.css";

const HomePage = () => {
    const user = useSelector(selectUser); // Accessing user state from the Redux store

    const SidebarItems = [
        { path: "/", icon: "Icon1", title: "Title1" },
        { path: "/about", icon: "Icon2", title: "Title2" },
        { path: "/contact", icon: "Icon3", title: "Title3" },
    ];

    return (
        <div>
            {user && <Sidebar items={SidebarItems} />} {/* Render Sidebar if user is logged in */}
        </div>
    );
};

export default HomePage;
