import React from "react";
import Sidebar from "../components/Sidebar";
import "../partials/HomePage.module.css";

const HomePage = () => {

    const SidebarItems = [
        { path: "/", icon: "Icon1", title: "Title1" },
        { path: "/about", icon: "Icon2", title: "Title2" },
        { path: "/contact", icon: "Icon3", title: "Title3" },
    ];

    return (
        <div>
            <Sidebar items={SidebarItems} />
        </div>
    );
};

export default HomePage;