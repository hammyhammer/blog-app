import Layout from "./Layout";

export default function CreatePost() {
    return (
        <Layout>
            <h2>Create Post Page</h2>
            <form>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                />
                <label htmlFor="content">Content</label>
                <input
                    type="text"
                />
                <button>Create Post (Dummy)</button>
            </form>
        </Layout>
    );
};
