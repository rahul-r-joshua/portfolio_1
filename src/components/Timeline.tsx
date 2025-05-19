import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sept 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Project Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">TIH – IITB, Bombay</h4>
            <p>
              Built GNSS RTK rover & drone for agri & pipeline monitoring. Developed lab automation system. <br />
              <strong>Tech:</strong> ROS, GNSS-RTK, Fusion 360, ArduPilot
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2024 - Sept 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IoT Trainer</h3>
            <h4 className="vertical-timeline-element-subtitle">TANSAM, Coimbatore</h4>
            <p>
              Delivered training on IoT & Industry 4.0 via Siemens program. Mentored student projects. <br />
              <strong>Tech:</strong> Technomatrix, ESP32, Blynk
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2023 - Aug 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Robotics Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Salzer Electronics, Coimbatore</h4>
            <p>
              Proposed IIoT solutions, designed semi-automated welder, trained engineers. <br />
              <strong>Tech:</strong> ESP32, RoboDk, PCB Design
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2021 - Nov 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Embedded Systems Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Circuit 7 Technology, Coimbatore</h4>
            <p>
              Built bots with Arduino/LEGO, designed PCBs, integrated wireless modules. <br />
              <strong>Tech:</strong> Arduino, LEGO EV3, Wireless Comms
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
