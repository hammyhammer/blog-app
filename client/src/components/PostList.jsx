import { useState, useEffect } from "react";
import DeleteButton from "../components/DeleteButton.jsx"

import {getPosts} from "../services/post.js"
import Layout from "./Layout";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts()
      setPosts(posts.data);
    };
    fetchPosts();
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
                <DeleteButton
                  _id = {post._id}
                />
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  );
};
