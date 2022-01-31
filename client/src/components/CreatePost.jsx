import Layout from "./Layout";

export default function CreatePost() {
    return (
        <Layout>
            <h2 className="create-title">Create Post Page</h2>
            <form className= "create-form">
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
