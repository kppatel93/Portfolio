import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>work experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2014-2015</h3>
            <p>I have worked as Junior Web developer at JPWebpanel from September 2014 till Octomber 2015. I Consulted regularly with customers on project status, proposals and technical issues. I Transformed existing websites to correct errors, upgrade interfaces, and improve efficiency </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018-2020</h3>
            <p>I am working as Freelancer from July 2018 till current date and have developed Websites as Per Client's requirements and specifications. Right now I am using React as a Frontend techonlogy and Node as backend technology for full web application development. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
