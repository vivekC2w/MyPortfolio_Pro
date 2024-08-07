import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";
import { SimpleIconsLeetcode } from "../../../utilities/SimpleIconsLeetcode";
import GeeksforGeeksIcon from "../../../utilities/GeeksforGeeksIcon";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://leetcode.com/u/Vivek_Hiray/">
                <span className="fa">
                 <SimpleIconsLeetcode />
                </span>
              </a>
              <a href="https://github.com/vivekC2w">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.geeksforgeeks.org/user/vivek23699/">
                <span className="fa">
                  <GeeksforGeeksIcon />
                </span>
              </a>
              <a href="https://www.linkedin.com/in/vivek-hiray-0a69671ab/">
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
              <a href="https://twitter.com/VivekHirayc2w">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Vivek</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1000,
                    "Software Developer 👨‍💻",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "MERN Stack Dev 📱",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Building end-to-end digital solutions with expertise in both
              front-end and back-end development.
            </span>
          </div>

          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a href="Resume.docx" download="Resume.docx">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
