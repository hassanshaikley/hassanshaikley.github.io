import React from "react";
import PropTypes from "prop-types";
const image = require("../pages/aotb.jpg");

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
    // this.setState({
    //   modal: !this.state.modal
    // });
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
        {this.state.modal && (
          <div id="modal-container">
            <div id="modal">FART</div>
          </div>
        )}
      </div>
    );
  }
}
