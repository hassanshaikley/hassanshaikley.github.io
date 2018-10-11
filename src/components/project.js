import React from "react";
import PropTypes from "prop-types";
const image = require("../pages/aotb.jpg");
import Modal from "react-modal";

const preventIOSScroll = (e) => {
  e.preventDefault();
}


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
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
    const { project } = this.props;
    const style = {
      content: {
        maxWidth: '600px',
        margin: 'auto',
        // height: 'fit-content',
        // overflowY: 'scroll'
        maxHeight: 'fit-content'
      }
    }
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
          style={style}
          contentLabel="Example Modal"
          shouldReturnFocusAfterClose={true}
          shouldFocusAfterRender={true}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}

          onAfterOpen={() => {
            document.documentElement.style.overflowY = 'hidden';
            document.documentElement.addEventListener('touchmove', preventIOSScroll);
          }}
          onRequestClose={() => {
            console.log("REQUEST CLOSE")
            document.documentElement.style.overflowY = 'visible';
            document.documentElement.removeEventListener('touchmove', preventIOSScroll);
            this.onClick()
          }}


        >
          <div style={{ }}>
            <div id="modal-role">{project.role}</div>
            <div id="modal-company">{project.company}</div>
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
              <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                <small>{project.extendedDescription}</small>
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
            <button style={{marginBottom: '20px'}} onClick={() => {
              
              document.documentElement.style.overflowY = 'visible';
              document.documentElement.removeEventListener('touchmove', preventIOSScroll);
              this.onClick()
            
            }}>close</button>
          </div>
        </Modal>
      </div>
    );
  }
}
