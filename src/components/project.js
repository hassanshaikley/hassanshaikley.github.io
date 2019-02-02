import React from "react";
import PropTypes from "prop-types";
const image = require("../pages/aotb.jpg");

const preventIOSScroll = (e) => {
  e.preventDefault();
}


export class Project extends React.Component {

  render() {
    const { project } = this.props;
    const style = {
      content: {
        maxWidth: '600px',
        margin: 'auto',
        maxHeight: 'fit-content'
      }
    }
    return (
      <div
        style={{ color: "rgba(0,0,0,.8)" }}
        className={"btn"}
      >
        {project.role && <h4>{project.role } // <bold>{project.company}</bold></h4>}

        <div
          style={{ fontSize: "90%", lineHeight: "normal", marginTop: "7px" }}
        >
          {project.description}
        </div>

          <div style={{ }}>
            {project.technologies.map(technology => {
              return (
                <small><span
                  style={{
                    backgroundColor: "lavender",
                    borderRadius: "3px",
                    padding: "2px",
                    marginRight: "10px"
                  }}
                >
                  {technology}
                </span>
                </small>
              );
            })}
            <br />
            {project.url && <a href={project.url}>{project.url}</a>}
            {project.extendedDescription && (
              <div style={{ marginTop: "10px" }}>
                <small>{project.extendedDescription}</small>
              </div>
            )}
            {/* {project.imgSource && (
              <img
                style={{ padding: "0%", width: "100%" }}
                src={"/force/" + project.imgSource}
                alt="Logo"
              />
            )} */}


          </div>
      </div>
    );
  }
}
