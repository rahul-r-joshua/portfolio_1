import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

// Import the image
import avatarImage from '../assets/images/SHA04400.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* Use the imported image */}
          <img src={avatarImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/rahul-r-joshua" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/rahul-ramasamy-in/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Rahul Ramasamy</h1>
          <p>Robotics and Automation Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/rahul-r-joshua" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/rahul-ramasamy-in/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
