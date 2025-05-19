import React from "react";
import mock01 from '../assets/images/mir.jpg'; // Replace with your relevant project image paths
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

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                    <a /* href="https://yourlinkforbionicarm.com" */ target="_blank" rel="noreferrer">
                            <img src={mock05} className="zoom" alt="thumbnail" width="60%" />
                        </a>
                    </div>
                    <a /* href="https://yourlinkforgnssrover.com" */ target="_blank" rel="noreferrer"><h2>GNSS RTK-enabled Ground Rover</h2></a>
                    <p>Deployed a GNSS RTK-enabled ground rover for high-precision autonomous navigation in vineyards at NRCG, collaborating with scientists for agricultural data collection.</p>
                </div>
                <div className="project">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <a /* href="https://yourlinkforbionicarm.com" */ target="_blank" rel="noreferrer">
                            <img src={mock04} className="zoom" alt="thumbnail" width="55%" />
                        </a>
                    </div>
                    <a /* href="https://yourlinkfordroneproject.com" */ target="_blank" rel="noreferrer"><h2>Drone for Pipeline Leakage Detection</h2></a>
                    <p>Designed and built a drone in collaboration with CoEOGE for data collection and pipeline leakage detection using aerial monitoring techniques.</p>
                </div>
            </div>

            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a /*  href="https://yourlinkformir.com" */ target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a /* href="https://yourlinkformir.com" */ target="_blank" rel="noreferrer"><h2>Miniature Inspection Robot (MIR)</h2></a>
                    <p>The MIR remote inspection vehicle enables precise, real-time inspections in confined industrial spaces using a flexible design with advanced LiDAR and camera systems. (ROS, Python, 3D Printing, GNSS RTK, Fusion 360).</p>
                </div>
                <div className="project">
                    <a /* href="https://yourlinkforturtlebot3.com" */ target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a /* href="https://yourlinkforturtlebot3.com" */ target="_blank" rel="noreferrer"><h2>Navigation on TurtleBot 3 with Gazebo and RViz</h2></a>
                    <p>Implemented navigation on the ROS platform using TurtleBot 3, performing obstacle avoidance and optimized path planning to reach goal positions. Utilized SLAM with LiDAR for mapping and visualized the 3D environment in RViz. (ROS, Rviz, SLAM, D*, Gazebo).</p>
                </div>
               <div className="project bionic">
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <a /* href="https://yourlinkforbionicarm.com" */ target="_blank" rel="noreferrer">
                    <img src={mock08} className="zoom" alt="thumbnail" width="122%" />
                    </a>
                </div>
                <a /* href="https://yourlinkforbionicarm.com" */ target="_blank" rel="noreferrer"><h2>Bionic ARM</h2></a>
                <p>The bionic arm project developed a functional prosthetic that responds to user commands, showcasing the potential of advanced prosthetics to enhance the lives of individuals with limb loss or impairment. (3D Printing, Arduino, Sensors, Robotics).</p>
                </div>

                <div className="project pa-robot">
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <a /* href="https://yourlinkforpersonalassistantrobot.com" */ target="_blank" rel="noreferrer">
                    <img src={mock07} className="zoom" alt="thumbnail" width="78%" />
                    </a>
                </div>
                <a /* href="https://yourlinkforpersonalassistantrobot.com" */ target="_blank" rel="noreferrer"><h2>Personal Assistant Robot</h2></a>
                <p>The PA robot is a telecontrolled mobile platform capable of various movements and operations, operated through a custom-built application. (3D Printing, Arduino, Sensors, Robotics).</p>
                </div>
                <div className="project">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <a /* href="https://yourlinkforbionicarm.com" */ target="_blank" rel="noreferrer">
                            <img src={mock06} className="zoom" alt="thumbnail" width="78%" />
                        </a>
                    </div>
                    <a /* href="https://yourlinkforintelligenttrafficcontrol.com" */ target="_blank" rel="noreferrer"><h2>Intelligent Traffic Control System With Smart Box</h2></a>
                    <p>A project to automate traffic signals using a self-made smart box that monitors and regulates traffic autonomously, with manual override for emergencies and real-time feedback displayed on an LCD for central monitoring. (Arduino, Sensors, PCB Design, Communication Protocols).</p>
                </div>
                <div className="project">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <a /* href="https://yourlinkforbionicarm.com" */ target="_blank" rel="noreferrer">
                            <img src={mock10} className="zoom" alt="thumbnail" width="65%" />
                        </a>
                    </div>
                    <a /* href="https://yourlinkforintelligenttrafficcontrol.com" */ target="_blank" rel="noreferrer"><h2>Advanced Path Planning with RRT & PRM</h2></a>
                    <p>Developed intelligent path planning in MATLAB using RRT and PRM algorithms. Fine-tuned cost maps for efficient route optimization, simulating real-time robotic navigation in complex environments. (MATLAB, Robotics Toolbox, Optimization).</p>
                </div>
                <div className="project">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <a /* href="https://yourlinkforbionicarm.com" */ target="_blank" rel="noreferrer">
                            <img src={mock02} className="zoom" alt="thumbnail" width="65%" />
                        </a>
                    </div>
                    <a /* href="https://yourlinkforintelligenttrafficcontrol.com" */ target="_blank" rel="noreferrer"><h2>Production Monitoring with ThingSpeak</h2></a>
                    <p>Developed a centralized HTML-based interface to visualize real-time widgets and production flow graphs from ThingSpeak, streamlining multi-line monitoring at Salzer Groups. (ThingSpeak, HTML, IoT, Data Visualization).</p>
                </div>
                <div className="project">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <a /* href="https://yourlinkforbionicarm.com" */ target="_blank" rel="noreferrer">
                            <img src={mock03} className="zoom" alt="thumbnail" width="83%" />
                        </a>
                    </div>
                    <a /* href="https://yourlinkforintelligenttrafficcontrol.com" */ target="_blank" rel="noreferrer"><h2>IIoT-Based Entry Monitor & Alarm System</h2></a>
                    <p>Developed an IIoT-based Entry Monitoring & Alarm System to enhance facility security through real-time sensor data, alerts, and automated control.</p>
                </div>
                <div className="project">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <a /* href="https://yourlinkforbionicarm.com" */ target="_blank" rel="noreferrer">
                            <img src={mock11} className="zoom" alt="thumbnail" width="90%" />
                        </a>
                    </div>
                    <a /* href="https://yourlinkforintelligenttrafficcontrol.com" */ target="_blank" rel="noreferrer"><h2>IIoT-Based Production Monitor Development</h2></a>
                    <p>Developed an IIoT-based Production Monitor to enhance operational efficiency through real-time data tracking and analysis.</p>
                </div>
                <div className="project">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <a /* href="https://yourlinkforbionicarm.com" */ target="_blank" rel="noreferrer">
                            <img src={mock12} className="zoom" alt="thumbnail" width="80%" />
                        </a>
                    </div>
                    <a /* href="https://yourlinkforintelligenttrafficcontrol.com" */ target="_blank" rel="noreferrer"><h2>ROS Workspace Mapping and Scanning</h2></a>
                    <p>Mapped and scanned workspace boundaries in ROS to teach the bot about obstacles and its path.</p>
                </div>
                
            </div>
        </div>
    );
}
export default Project;