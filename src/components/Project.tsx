import React from "react";
import mock01 from '../assets/images/mir.jpg';
import mock02 from '../assets/images/check.png';
import mock03 from '../assets/images/entry.png';
import mock04 from '../assets/images/drone.jpg';
import mock05 from '../assets/images/rover.jpg';
import mock06 from '../assets/images/traffic.png';
import mock07 from '../assets/images/pa.png';
import mock08 from '../assets/images/arm.png';
import mock09 from '../assets/images/bot.png';
import mock10 from '../assets/images/Algo.png';
import mock11 from '../assets/images/things.png';
import mock12 from '../assets/images/ros.png';
import '../assets/styles/Project.scss';

const projectsData = [
  {
    category: "Projects",
    items: [
      {
        img: mock05,
        imgWidth: "60%",
        title: "GNSS RTK-enabled Ground Rover",
        description:
          "Deployed a GNSS RTK-enabled ground rover for high-precision autonomous navigation in vineyards at NRCG, collaborating with scientists for agricultural data collection.",
        link: "https://yourlinkforgnssrover.com",
        linkEnabled: false,
        containerClass: "",
      },
      {
        img: mock04,
        imgWidth: "55%",
        title: "Drone for Pipeline Leakage Detection",
        description:
          "Designed and built a drone in collaboration with CoEOGE for data collection and pipeline leakage detection using aerial monitoring techniques.",
        link: "https://yourlinkfordroneproject.com",
        linkEnabled: false,
        containerClass: "",
      },
    ],
  },
  {
    category: "Personal Projects",
    items: [
      {
        img: mock01,
        imgWidth: "100%",
        title: "Miniature Inspection Robot (MIR)",
        description:
          "The MIR remote inspection vehicle enables precise, real-time inspections in confined industrial spaces using a flexible design with advanced LiDAR and camera systems. (ROS, Python, 3D Printing, GNSS RTK, Fusion 360).",
        link: "https://yourlinkformir.com",
        linkEnabled: false,
        containerClass: "",
      },
      {
        img: mock09,
        imgWidth: "100%",
        title: "Navigation on TurtleBot 3 with Gazebo and RViz",
        description:
          "Implemented navigation on the ROS platform using TurtleBot 3, performing obstacle avoidance and optimized path planning to reach goal positions. Utilized SLAM with LiDAR for mapping and visualized the 3D environment in RViz. (ROS, Rviz, SLAM, D*, Gazebo).",
        link: "https://yourlinkforturtlebot3.com",
        linkEnabled: false,
        containerClass: "",
      },
      {
        img: mock08,
        imgWidth: "49%",
        title: "Bionic ARM",
        description:
          "The bionic arm project developed a functional prosthetic that responds to user commands, showcasing the potential of advanced prosthetics to enhance the lives of individuals with limb loss or impairment. (3D Printing, Arduino, Sensors, Robotics).",
        link: "https://yourlinkforbionicarm.com",
        linkEnabled: false,
        containerClass: "bionic",
      },
      {
        img: mock07,
        imgWidth: "79%",
        title: "Personal Assistant Robot",
        description:
          "The PA robot is a telecontrolled mobile platform capable of various movements and operations, operated through a custom-built application. (3D Printing, Arduino, Sensors, Robotics).",
        link: "https://yourlinkforpersonalassistantrobot.com",
        linkEnabled: false,
        containerClass: "pa-robot",
      },
      {
        img: mock06,
        imgWidth: "78%",
        title: "Intelligent Traffic Control System With Smart Box",
        description:
          "A project to automate traffic signals using a self-made smart box that monitors and regulates traffic autonomously, with manual override for emergencies and real-time feedback displayed on an LCD for central monitoring. (Arduino, Sensors, PCB Design, Communication Protocols).",
        link: "https://yourlinkforintelligenttrafficcontrol.com",
        linkEnabled: false,
        containerClass: "",
      },
      {
        img: mock10,
        imgWidth: "100%",
        title: "Advanced Path Planning with RRT & PRM",
        description:
          "Developed intelligent path planning in MATLAB using RRT and PRM algorithms. Fine-tuned cost maps for efficient route optimization, simulating real-time robotic navigation in complex environments. (MATLAB, Robotics Toolbox, Optimization).",
        link: "https://yourlinkforintelligenttrafficcontrol.com",
        linkEnabled: false,
        containerClass: "",
      },
      {
        img: mock02,
        imgWidth: "85%",
        title: "Production Monitoring with ThingSpeak",
        description:
          "Developed a centralized HTML-based interface to visualize real-time widgets and production flow graphs from ThingSpeak, streamlining multi-line monitoring at Salzer Groups. (ThingSpeak, HTML, IoT, Data Visualization).",
        link: "https://yourlinkforintelligenttrafficcontrol.com",
        linkEnabled: false,
        containerClass: "",
      },
      {
        img: mock03,
        imgWidth: "110%",
        title: "IIoT-Based Entry Monitor & Alarm System",
        description:
          "Developed an IIoT-based Entry Monitoring & Alarm System to enhance facility security through real-time sensor data, alerts, and automated control.",
        link: "https://yourlinkforintelligenttrafficcontrol.com",
        linkEnabled: false,
        containerClass: "",
      },
      {
        img: mock11,
        imgWidth: "90%",
        title: "IIoT-Based Production Monitor Development",
        description:
          "Developed an IIoT-based Production Monitor to enhance operational efficiency through real-time data tracking and analysis.",
        link: "https://yourlinkforintelligenttrafficcontrol.com",
        linkEnabled: false,
        containerClass: "",
      },
      {
        img: mock12,
        imgWidth: "80%",
        title: "ROS Workspace Mapping and Scanning",
        description:
          "Mapped and scanned workspace boundaries in ROS to teach the bot about obstacles and its path.",
        link: "https://yourlinkforintelligenttrafficcontrol.com",
        linkEnabled: false,
        containerClass: "",
      },
    ],
  },
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      {projectsData.map(({ category, items }) => (
        <React.Fragment key={category}>
          <h1>{category}</h1>
          <div className="projects-grid">
            {items.map(
              (
                { img, imgWidth, title, description, link, linkEnabled, containerClass },
                index
              ) =>
                linkEnabled ? (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className={`project ${containerClass}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <img src={img} className="zoom" alt="thumbnail" width={imgWidth} />
                    </div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                  </a>
                ) : (
                  <div key={index} className={`project ${containerClass}`}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <img src={img} className="zoom" alt="thumbnail" width={imgWidth} />
                    </div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                  </div>
                )
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Project;
