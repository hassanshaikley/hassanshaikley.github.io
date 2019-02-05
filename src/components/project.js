import React from "react";
import PropTypes from "prop-types";

const preventIOSScroll = (e) => {
  e.preventDefault();
}


export class Project extends React.Component {

  render() {
    const { project, paid } = this.props;
    const style = {
      content: {
        maxWidth: '600px',
        margin: 'auto',
        maxHeight: 'fit-content'
      }
    }
    return (
           <div
        style={{ color: "rgba(0,0,0,.8)"}}
      >
           <div className="projectInfo" className={paid ? "paidProject" : "unpaidProject"}>

        {project.role && <h4>{project.role } // <bold>{project.company}</bold></h4>}
        {!project.role && <h4><bold>{project.company}</bold></h4>}

        <div
          style={{ fontSize: "90%", lineHeight: "normal", marginTop: "7px" }}
        >
          {project.description}
        </div>

          <div style={{ }}>
            {project.technologies && project.technologies.map(technology => {
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
            {project.technologies && <br />}
            {project.url && <a href={project.url}>{project.url}</a>}
          </div>

      </div>
      {project.imgSource && (
        <div className={paid ? "paidProjectImg" : "unpaidProjectImg"}>
                        <img
              className="projectImg"
                style={{ padding: "0%", width: "100%", marginBottom: 0 }}
                src={"/" + project.imgSource}
                alt="Logo"
              />
          </div>

            )}
      </div>

    );
  }
}
