import api from "../services/apiConfig";
import { useNavigate } from "react-router-dom";

export default function DeleteButton(props) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    await api.delete(`/${props.id}`);
    toast("Deleting Post");
    setTimeout(() => {
      navigate("/api/posts");
    }, 3000);
  };

  return <button onClick={handleDelete}>Delete Post</button>;
};
