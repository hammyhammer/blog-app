import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import api from "../services/apiConfig";

import {getPosts} from "../services/post.js"
import Layout from "./Layout";

export default function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const posts = await getPosts();
            setPosts(posts.data);
        };
        fetchPosts();
    }, []);

    return (
        <Layout>
            <ul> 
                {posts?.map((post) => {
                    return (
                        <li key={post._id}>
                            <Link to={`/api/${post._id}`}>
                                <div>
                                    <h3>{post.title}</h3>
                                    <h4>{post.content}</h4>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </Layout>
    );
};
