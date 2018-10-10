import React from "react";
import PropTypes from "prop-types";
const image = require("../pages/aotb.jpg");
import Modal from "react-modal";

export class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageDiv: undefined,
      modal: false
    };
  }

  // activate() {
  //   // console.log('sup')
  //   // <img src={image} />

  // }
  // deactivate() {

  // }
  onClick = () => {
    console.log("CLICK ", this.props.project);
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
    const { project } = this.props;
    return (
      <div
        style={{ color: "rgba(0,0,0,.8)" }}
        // onMouseEnter={this.activate}
        // onMouseLeave={this.deactivate}
        onClick={this.onClick}
        className={"btn"}
      >
        {project.role && <h4>{project.role}</h4>}
        <h5>{project.company}</h5>

        <div
          style={{ fontSize: "90%", lineHeight: "normal", marginTop: "7px" }}
        >
          {project.description}
        </div>
        <Modal
          isOpen={this.state.modal}
          style={
            {
              // width: '50%'
            }
          }
          contentLabel="Example Modal"
          shouldReturnFocusAfterClose={true}
          shouldFocusAfterRender={true}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          onRequestClose={this.onClick}
          onClick={() => {
            console.log("crap");
          }}
        >
          <div style={{ height: "100%", width: "100%" }}>
            <div id="modal-role">{project.role}</div>
            <div id="modal-company">{project.company}</div>
            {project.technologies.map(technology => {
              console.log("HI");
              return (
                <span
                  style={{
                    backgroundColor: "lavender",
                    borderRadius: "3px",
                    padding: "2px",
                    marginRight: "10px"
                  }}
                >
                  {technology}
                </span>
              );
            })}
            <br />
            {project.url && <a href={project.url}>{project.url}</a>}
            {project.extendedDescription && (
              <div style={{ marginTop: "10px" }}>
                {project.extendedDescription}
              </div>
            )}
            {project.imgSource && (
              <img
                style={{ padding: "0%", width: "100%" }}
                src={"/force/" + project.imgSource}
                alt="Logo"
              />
            )}

            <br />
            <button onClick={this.onClick}>close</button>
          </div>
        </Modal>
      </div>
    );
  }
}
