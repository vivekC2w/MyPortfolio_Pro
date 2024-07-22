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
    { skill: "Typescript", ratingPercentage: 85 },
    { skill: "Java", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo DB", ratingPercentage: 70 },
    { skill: "PostgreSQL", ratingPercentage: 80 },
    { skill: "Prisma ORM", ratingPercentage: 80 },
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
          heading={"ALT Mobility"}
          subHeading={"SDE 1"}
          fromDate={"Mar-2024"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed Battery Analytics System: Engineered a backend solution
            for real-time battery performance monitoring, extending battery
            lifespan by 20%.
          </span>
          <br />
          <span className="resume-description-text">
            - Implemented Real-Time Alerts: Deployed a full-stack solution for
            deep discharge, low utilization, and offline vehicle alerts,
            reducing downtime by 15%.
          </span>
          <br />
          <span className="resume-description-text">
            - Engineered IoT Data Retrieval: Built a system for real-time
            telemetry data from 500+ IoT-enabled electric vehicles, boosting
            data accuracy and operational efficiency by 30%.
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated 2FA in FleetOS: Added two-factor authentication with
            TOTP and SMS OTP, reducing unauthorized access incidents by 40%.
          </span>
          <br />
          <span className="resume-description-text">
            - Spearheaded DCO Product Development: Launched the Driver-Cum-Owner
            product, facilitating 50+ new driver onboardings in one month.
          </span>
          <br />
          <span className="resume-description-text">
            - Designed Secure Payment System: Implemented a payments system
            using Easebuzz and Zoho Books APIs, ensuring PCI-DSS compliance and
            managing 300+ monthly transactions.
          </span>
          <br />
          <span className="resume-description-text">
            - Created Dynamic Lease Payment Module: Developed a system for
            dynamic lease payment calculations, optimizing processing times for
            50+ drivers.
          </span>
          <br />
          <span className="resume-description-text">
            - Launched Part-Payment Option: Introduced a flexible payment plan
            for security deposits, benefiting 20+ drivers over 45 days.
          </span>
          <br />
          <span className="resume-description-text">
            - Enhanced Payment Processing: Improved the payment system with
            webhooks and refund APIs, reducing transaction errors by 25%.
          </span>
          <br />
          <span className="resume-description-text">
            - Automated Payment Reporting: Built an automated system for
            tracking outstanding payments, decreasing delays by 15%.
          </span>
          <br />
        </div>
        <ResumeHeading
          heading={"Accenture"}
          subHeading={"Software Engineer Frontend"}
          fromDate={"Oct-2021"}
          toDate={"Feb-2024"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Worked as Frontend Developer at Accenture.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed a comprehensive system for managing subscriptions,
            including trials, conversions to paid, and renewals, ensuring timely
            reminders using SendGrid.
          </span>
          <br />
          <span className="resume-description-text">
            - Built and managed email templates for personalized notifications
            on subscription status, utilizing SendGrid to automate and
            streamline communication.
          </span>
          <br />
          <span className="resume-description-text">
            - Created a user-friendly dashboard for managing subscriptions,
            providing real-time insights for product owners and managers.
          </span>
          <br />
          <span className="resume-description-text">
            - Implemented robust API endpoints (GET, POST, PUT, DELETE, PATCH)
            to enhance the functionality and integration of the subscription
            management system.
          </span>
          <br />
          <span className="resume-description-text">
            - Enabled efficient tracking of subscription statuses (active,
            expired, renewal needed), improving overall user experience and
            operational efficiency.
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
