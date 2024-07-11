import React from "react";
import { useTranslation } from "react-i18next";
import BlogPost from "./BlogPost";
import logo from "../images/logo.png";
import headerLogo from "../images/headerLogo.png";

const Home = () => {
  const { t } = useTranslation();

  const posts = [
    {
      image: logo,
      title: "This way is wrong about UI Design.",
      date: "NOV 23 2020",
      description:
        "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    },
    {
      image: headerLogo,
      title: "This way is wrong about UI Design.",
      date: "NOV 23 2020",
      description:
        "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    },
    // Qo'shimcha postlarni qo'shing
  ];

  return (
    <div className="home">
      <h2>{t("home_title")}</h2>
      <p>{t("home_description")}</p>
      <p>{t("home_content")}</p>
      <div className="posts">
        {posts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
