import { useState, useEffect } from "react";
import "./App.css";
import Post from "./components/Post/Post";
import { db } from "./config/firebase.js";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      // every time a new post is added, this code will be fired
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

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
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
