import "./App.css";

import { useState } from "react";

function App() {
  let [name, setName] = useState("Jeff");

  let changeName = () => {
    setName("Jeffrey");
  };

  let [post, setPosts] = useState([
    {
      id: 1,
      title: "Post 1",
      body: "This is the body of post 1",
    },
    {
      id: 2,
      title: "Post 2",
      body: "This is the body of post 2",
    },
    {
      id: 3,
      title: "Post 3",
      body: "This is the body of post 3",
    },
  ]);

  let deletePost = (id) => {
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {name}</h1>
        <ul>
          {!!post.length &&
            post.map((post) => (
              <li key={post.id}>
                <p>{post.title}</p>
                <p>{post.body}</p>
                <button onClick={() => deletePost(post.id)}>Delete</button>
              </li>
            ))}
          {!post.length && <p>No Posts Here</p>}
        </ul>
        <button onClick={changeName}>CC</button>
      </header>
    </div>
  );
}

export default App;
