import { useNavigate } from "react-router-dom";
import { deletePost } from "../services/post.js";

export default function DeleteButton(props) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    await deletePost(props._id);
    // Use navigate is not firing on event.
    navigate("/posts");
  };

  return <button onClick={handleDelete}>Delete Post</button>;
};
