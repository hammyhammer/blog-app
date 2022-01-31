import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/apiConfig";

import Layout from "./Layout";

export default function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await api.get()
            setPosts(res.data.records);
        };
        fetchPosts()
    }, []);

    return (
        <Layout>
            <ul> 
                {posts.map((post) => {
                    return (
                        <li key={post.id}>
                            <Link to={`/api/${post.id}`}>
                                <div>
                                    <h3>{post.fields.title}</h3>
                                    <h4>{post.fields.content}</h4>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </Layout>
    );
};
