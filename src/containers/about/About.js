import React from "react";
import "./About.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Contact() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main about-margin-top" id="about">
        <h1 className="heading about-title">About Me</h1>
        <div className="about-div-main">
          <div className="about-image-div">
            <img
              alt="Contact Mail"
              src={require("../../assets/images/greetImg.jpg")}
            ></img>
          </div>
          <div className="about-header">
            <p className="subTitle about-subtitle">Software Engineer</p>
            <div className="about-text-div">
              My name is Walter Hills and I am a Software Engineer. I love
              creating applications and the more I create, the more I learn. I
              am particularly focused on frontend development and have recently
              been working with React and Redux. I have a background in
              Psychology and it is fascinating to see how website design and
              functionality can be tailored to give the user the exact
              experience that the developer, or client, has in mind. After
              getting my degree in Psychology and briefly working as a
              counselor, I studied at App Academy to learn how to build
              full-stack applications and I haven't looked back. Every day I
              learn more about Software Engineering and more efficient ways to
              accomplish similar results. I am excited to build a career in this
              industry and I am currently seeking employment to this end.
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
