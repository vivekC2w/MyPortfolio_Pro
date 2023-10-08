import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "_" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Core Java", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Sound Cloud Clone",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "SoundClone is a music streaming web application that I developed to showcase my skills in front-end development. It features a user-friendly interface, user authentication, audio playback, and various interactive functionalities, enhancing the user's music streaming experience.",
      subHeading:
        "Technologies Used: React, Redux, JavaScript, JWT, HTML, CSS, Bootstrap.",
    },
    {
      title: "Instagram Clone ",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "This Insta clone project replicates popular social media features, including user authentication, profiles, posts, likes, comments, follows, and search.",
      subHeading: "Technologies Used: MERN stack,  Cloudinary, Nodemailer.",
    },
    {
      title: "YouTube Clone",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "Build a responsive YouTube clone with React 18, functional components, and hooks for smooth state management. Utilize Context API for global state, Tailwind CSS for UI, and Axios for HTTP requests.",
      subHeading:
        "Technologies Used: React , Tailwind CSS, Redux, Rapid API, Axios",
    },
    {
      title: "Food Ordering App ",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "Food ordering application, inspired by Swiggy, offers a diverse range of restaurants and cuisines for user to explore. It ensures a smooth and enjoyable food ordering experience for the user.",
      subHeading: "Technologies Used: React JS, Tailwind CSS, Redux.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"BACHELOR OF INFORMATION TECHNOLOGY"}
        subHeading={"Savitribai Phule Pune University, Pune"}
        fromDate={"2017"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"COLLEGE OF ARTS AND SCIENCE"}
        subHeading={"MSG College of Arts and Science, Malegaon"}
        fromDate={"2015"}
        toDate={"2017"}
      />
      <ResumeHeading
        heading={"High School"}
        subHeading={"KBH Vidyalaya, Malegaon"}
        fromDate={"2010"}
        toDate={"2015"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Accenture"}
          subHeading={"Application Developer"}
          fromDate={"2021"}
          toDate={"present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as an Application Developer at Accenture and also
            learning Full Stack development.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Configured and set up monitoring for power backup devices,
            security/environment, and NetBotz sensors in client data center.
          </span>
          <br />
          <span className="resume-description-text">
            - Support the Multiple DevOps tools like Zabbix, HPE OneView, APC
            DCE/NetBotz, and Ansible AWX.
          </span>
          <br />
          <span className="resume-description-text">
            - Communicate with partners and vendors on behalf of the company.
          </span>
          <br />
          <span className="resume-description-text">
            - Designing and developing test automation scripts.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Cricket"
        description="Apart from being a tech enthusiast and a code writer, I also love to play Cricket in my free time"
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something I can never compromise with."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in PlayStation games, pushing the rank, and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="oops... no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
