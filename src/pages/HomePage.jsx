import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import axios from 'axios';
import Sidebar from "../components/Sidebar";
import { selectUser } from '../store/userSlice';
import "../partials/HomePage.module.css";

const HomePage = () => {
    const user = useSelector(selectUser);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
                // Handle error (e.g., display an error message)
            }
        };

        fetchPosts();
    }, []);

    const SidebarItems = [
        { path: "/", icon: "Icon1", title: "Title1" },
        { path: "/about", icon: "Icon2", title: "Title2" },
        { path: "/contact", icon: "Icon3", title: "Title3" },
    ];

    return (
        <div>
            {user && <Sidebar items={SidebarItems} />}
            <div>
            {Array.isArray(posts) && posts.map(post => (
                <div key={post._id}>
                    <p>{post.content}</p>
                    <p>{post.createdAt}</p>
            </div>
            ))}
            </div>
        </div>
    );
};

export default HomePage;
