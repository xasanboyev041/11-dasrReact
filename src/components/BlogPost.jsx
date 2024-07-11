import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import useBlog from "../hooks/useBlog";
import "../index.css";

const BlogPost = () => {
  const { t } = useTranslation();
  const { state, addPost, deletePost, updatePost } = useBlog();
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const handleAddPost = () => {
    addPost({ ...newPost, id: Date.now() });
    setNewPost({ title: "", content: "" });
  };

  return (
    <div className="blog-post">
      <h1>{t("blogTitle")}</h1>
      <p>{t("blogContent")}</p>
      <img src="/src/assets/images/Blog.jpg" alt="Blog" />

      <div className="post-form">
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <button onClick={handleAddPost}>Add Post</button>
      </div>

      <div className="posts">
        {state.posts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => deletePost(post.id)}>Delete</button>
            <button
              onClick={() =>
                updatePost({ ...post, title: post.title + " (updated)" })
              }
            >
              Update
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
