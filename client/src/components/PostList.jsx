import { useState, useEffect } from "react";
import DeleteButton from "../components/DeleteButton.jsx"
import { deletePost } from "../services/post.js";
import { getPosts } from "../services/post.js"
import Layout from "./Layout";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts()
      setPosts(posts.data);
    };
    fetchPosts();
  }, [toggle]);
  const handleToggle = () => {
    setToggle(!toggle)
  }

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
                <DeleteButton handleToggle={handleToggle}
                  _id={post._id}
                />
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  );
};
