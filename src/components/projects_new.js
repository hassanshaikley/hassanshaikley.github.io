import React from 'react'
import PropTypes from 'prop-types'

const projects = require("./projects.json");
import {Project} from "./project"



export const ProjectsNew = () => {

const styles = {}

  return (
    <div id="project-container">
{projects.map((project) => {
  return (
    <li
      key={project.company}
      style={{ marginBottom: "25px" }}
    >
      <Project project={project} paid={false} />
    </li>
  );
})}
</div>

    // <div style={styles}>
    //     <h5>Raspberry PI Drum Machine</h5>
    //     <p>Drum machine made with an RPI and Nerves.</p>
    //     <img src="/drum_machine_screenshot.png" className="project-image" />
    // </div>
  )

}
