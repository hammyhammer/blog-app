import Layout from "./Layout";

const default_input = {
  title: "",
  content: "",
}

export default function CreatePost() {

  const [input, setInput] = useState(default_input)

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
    const res = api.post("/", { fields })
    setInput(default_input)
  }


  return (
    <Layout>
      <h2 className="create-title">Create Post Page</h2>
      <form className="create-form">
        <label htmlFor="title">Title</label>
        <input
          type="text"
        />
        <label htmlFor="content">Content</label>
        <input
          type="text"
        />
        <button className="create-button">Create Post (Dummy)</button>
      </form>
    </Layout>
  );
};
