import React from "react";
import { BlogProvider } from "./context/BlogContext";
import BlogPost from "./components/BlogPost";
import "./i18n/i18n";

const App = () => {
  return (
    <BlogProvider>
      <div className="App">
        <BlogPost />
      </div>
    </BlogProvider>
  );
};

export default App;
