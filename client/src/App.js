import { Route, Routes } from 'react-router-dom';

import Home from "./components/Home";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </div>
  );
};

export default App;
