import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faMicrochip, faCogs, faCode, faProjectDiagram, faTools } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const expertiseData = [
    {
        icon: faRobot,
        title: "Robotics & Automation",
        description: "Hands-on experience with mobile robots, drone systems, and ROS-based automation in real-world environments.",
        labels: [
            "ROS2",
            "ArduPilot",
            "AMR",
            "Robo Programming",
            "Process Automation",
            "RVIZ",
            "Gazebo",
            "SLAM",
            "Mission Planner",
            
        ]
    },
    {
        icon: faMicrochip,
        title: "Embedded Systems & Control",
        description: "Proficient in low-level programming, wiring, and microcontroller communication for real-time systems.",
        labels: [
            "C/C++",
            "RPI",
            "Automation Wiring",
            "Communication Protocols",
            "Microcontroller Integration"
        ]
    },
    {
        icon: faCogs,
        title: "Industrial Robotics & Simulation",
        description: "Worked with robotic simulation and motion control software for industrial arms and automation setups.",
        labels: [
            "RoboDK",
            "MotoSim",
            "WPL Soft",
            "Robo Programming",
        ]
    },
    {
        icon: faCode,
        title: "Software Development",
        description: "Experience in automation scripting, backend logic, and robotics application software.",
        labels: [
            "Python",
            "C/C++",
            "ROS2 Programming"
        ]
    },
    {
        icon: faTools,
        title: "Electronics & PCB Design",
        description: "Skilled in circuit design, PLC software tools, and industrial automation electronics.",
        labels: [
            "PCB Design",
            "Proteus",
            "Embedded Circuit Prototyping",
            
        ]
    },
    {
        icon: faProjectDiagram,
        title: "Mechatronics / Systems Integration",
        description: "Integrated mechanical, electrical, and software components into cohesive systems.",
        labels: [
            "Fusion 360",
            "System Integration",
            "Sensors and Actuators Integration"
        ]
    }
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    {expertiseData.map((section, index) => (
                        <div className="skill" key={index}>
                            <FontAwesomeIcon icon={section.icon} size="3x" />
                            <h3>{section.title}</h3>
                            <p>{section.description}</p>
                            <div className="flex-chips">
                                <span className="chip-title">Skills:</span>
                                {section.labels.map((label, i) => (
                                    <Chip key={i} className='chip' label={label} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Expertise;
