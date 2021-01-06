import React from "react";
import dholu from "../images/dholu.PNG";
import burger from "../images/burger.PNG";
import memories from "../images/memories.PNG";
import badshah from "../images/badshah.PNG";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Portfolio = () => {

  // Dholu Consultants
  const openPopupboxDholu = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={dholu} alt="Dholu Consultants Project" />
        <p>Website for Insurance and RTO agent using React and Styled Components.</p>
        <b>Demo:</b> <a className="hyper-link"  href="/#" onClick={() => window.open("https://dholuconsultants.netlify.app/", "_blank")}>https://dholuconsultants.netlify.app/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link"  href="/#" onClick={() => window.open("https://github.com/8020Coding/netflix-project")}>https://github.com/8020Coding/netflix-project</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Burger Builder
  const openPopupboxBurger = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={burger} alt="burger builder" />
        <p>Small Website to make your own burger and order them using React and Other React components. </p>
        <b>Demo:</b> <a className="hyper-link"  href="/#" onClick={() => window.open("https://kpburgerbuilder.netlify.app/", "_blank")}>https://kpburgerbuilder.netlify.app/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" href="/#" onClick={() => window.open("https://github.com/8020Coding/city-guide-app", "_blank")}>https://github.com/8020Coding/city-guide-app</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Badshah Collections
  const openPopupboxBadshah = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={badshah} alt="badshah collection" />
        <p>E-commerce website for clothing store. I have developed frontend of this website as a Junior developer. </p>
        <b>Demo:</b> <a className="hyper-link" href="/#" onClick={() => window.open("https://www.badshahcollection.com/", "_blank")}>https://www.badshahcollection.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link"  href="/#" onClick={() => window.open("https://github.com/8020Coding/portfilio", "_blank")}>https://github.com/8020Coding/portfilio</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Memories App
  const openPopupboxMemories = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={memories} alt="memories app" />
        <p>Share your memories app using MERN Stack. It's an Open App for everyone who can add their memories with images and can delete them.</p>
        <b>Demo:</b> <a className="hyper-link" href="/#" onClick={() => window.open("https://yourmemories.netlify.app/", "_blank")}>https://yourmemories.netlify.app/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" href="/#" onClick={() => window.open("https://github.com/8020Coding/task-manager", "_blank")}>https://github.com/8020Coding/task-manager</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigTaskManager = {
    titleBar: {
      enable: true,
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxDholu}>
            <img className="portfolio-image" src={dholu} alt="dholu consultants" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxBurger}>
            <img className="portfolio-image" src={burger} alt="Burger Builder" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxBadshah}>
            <img className="portfolio-image" src={badshah} alt="badshah collections" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxMemories}>
            <img className="portfolio-image" src={memories} alt="memories" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigCityGuide} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigTaskManager} />
    </div>
  )
}

export default Portfolio;
