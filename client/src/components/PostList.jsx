import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/apiConfig";
import DeleteButton from "../components/DeleteButton.jsx"
// import api from "../services/apiConfig";

import { getPosts } from "../services/post.js"
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
        {posts?.map((post) => {

          return (
            <li
              key={post._id}
              className="cards"
            >
              <div>
                <h3>{post.title}</h3>
                <h4>{post.content}</h4>
                <DeleteButton />
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  );
};
