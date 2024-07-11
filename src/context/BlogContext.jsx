import React, { createContext, useReducer } from "react";
import blogReducer from "../reducers/blogReducer";

const initialState = {
  posts: [],
};

const BlogContext = createContext(initialState);

const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  const addPost = (post) => {
    dispatch({ type: "ADD_POST", payload: post });
  };

  const deletePost = (postId) => {
    dispatch({ type: "DELETE_POST", payload: postId });
  };

  const updatePost = (post) => {
    dispatch({ type: "UPDATE_POST", payload: post });
  };

  return (
    <BlogContext.Provider value={{ state, addPost, deletePost, updatePost }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
