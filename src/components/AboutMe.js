import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p className="about-content">
            Hello! I am Kapil. I have been developing websites for over 2 years. I'm a Full Stack Developer working as Freelancer currently. Technologies I use is MERN(MongoDB, Express, ReactJS and NodeJS).

            I create responsive websites that are displayed on all devices desktops and smartphones.

            My core Skill is Frontend Development using React Library. I have experienced in HTML and CSS along with React. 

            I love tea and playing chess whenever I get free time from coding. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
