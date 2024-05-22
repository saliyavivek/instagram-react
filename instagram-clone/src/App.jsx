import { useState } from "react";
import "./App.css";
import Post from "./components/Post/Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "viveksaliya",
      caption: "it works",
      imageUrl:
        "https://images.unsplash.com/photo-1716203034902-003b9e7e1946?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      username: "deepsaliya",
      caption: "hey there",
      imageUrl:
        "https://images.unsplash.com/photo-1716222165023-b907904d7920?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
          alt=""
        />
      </div>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus
        consequuntur porro veniam dolore, repudiandae totam quo animi autem vel.
      </h1>
      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
