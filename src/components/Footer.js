import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>D-203, Vedant Complex, Tulinj Road, Nallasopara(East)</p>
            </div>
            <div className="d-flex">
              <p>Phone: +91-8080716817</p>
            </div>
            <div className="d-flex">
              <p>Email: patelkapil16@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center ">
            <div className="d-flex justify-content-center social">
            <div className="rounded-social-buttons">
                    <a className="social-button facebook" href="https://www.facebook.com/kapil.patel.5851/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a className="social-button twitter" href="https://twitter.com/kapildrocker" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                    <a className="social-button linkedin" href="https://www.linkedin.com/in/kapil-patel9011/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a className="social-button github" href="https://github.com/kppatel93" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            </div>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Kapil Patel | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
