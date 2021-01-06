import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">my services</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
              <h3 className="title">Web Design</h3>
              <p>I approach each project individually and always focus on the result. I design eyecatching websites to give users a great and satisfactory experience  </p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>

              <h3 className="title">Web Development</h3>
              <p>Your website will be build with a new proven technologies. You will get pixel perfect website build from given Wireframes.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookF} size="2x" /></div>

              <h3 className="title">Facebook Ads SMM</h3>
              <p>Your potential clients will see your services or product on Facebook</p>
            </div>
          </div>
          {/* - */}
        </div>
      </div>
    </div>

  )
}

export default Services;
