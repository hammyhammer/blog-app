import Layout from "./Layout";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from "../services/post";

const default_input = {
  title: "",
  content: "",
}

export default function CreatePost(props) {

  const [input, setInput] = useState(default_input);

  const navigate = useNavigate();

  const handleTextInput = (event) => {
    const { id, value } = event.target;
    setInput(prevInput => ({
      ...prevInput,
      [id]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = input;
    const res = createPost("/new", { fields })
    setInput(default_input)
    navigate("/posts")
  }


  return (
    <Layout>
      <h2 className="create-title">Create Post Page</h2>
      <form className="create-form" onSubmit={handleSubmit}>
        <label className="name" htmlFor="title">Title</label>
        <input
             id="title" value={props.title} type="text" onChange={handleTextInput}
        />
        <label className="name" htmlFor="content">Content</label>
        <textarea
            id="content" value={props.content} type="text" onChange={handleTextInput}
        />
        <button className="create-button">Create Post (Dummy)</button>
      </form>
    </Layout>
  );
};
