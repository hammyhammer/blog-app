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
                {posts.map((posts) => {
                    return (
                        <li key={posts.id}>
                            <Link to={`/api/${posts.id}`}>
                                <div>
                                    <h3>{posts.fields.title}</h3>
                                    <h4>{posts.fields.content}</h4>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </Layout>
    );
};
