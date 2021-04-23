import React from "react";
import "./Blog.css";
import BlogCard from "../../components/blogCard/BlogCard";
import { blogSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Blogs() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="edu">
        <div className="blog-header">
          <h1 className="blog-header-text">{blogSection.title}</h1>
          <p className="subTitle blog-subtitle">{blogSection.subtitle}</p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            <BlogCard
              blog={{
                url: blogSection.blogs[0].url,
                image: blogSection.blogs[0].image,
                title: blogSection.blogs[0].title,
                description: blogSection.blogs[0].description,
                description2: "Nov 2020 - Apr 2021",
              }}
            />
            <BlogCard
              blog={{
                url: blogSection.blogs[1].url,
                image: blogSection.blogs[1].image,
                title: blogSection.blogs[1].title,
                description: blogSection.blogs[1].description,
                description2: "Dec 2017 - Dec 2019",
              }}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
