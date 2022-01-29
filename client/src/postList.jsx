import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/apiConfig";


export default function postList() {
    const [post, setPosts] = useState([]);

    useEffect(() => {
        const fecthPosts = async () => {
            const res = await api.get(/** waiting for api config */)
            setPosts(res.data.records);
        };
        fecthPosts()
    }, []);

  return (
    <div>
        <ul> 
            {postList.map((post) => {
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
    </div>
  )
}
