import React from "react";
import Link from "gatsby-link";

import { Left } from "../components/left";
import { Right } from "../components/right";
import banf from "./banf.jpg"; // Tell Webpack this JS file uses this image
import { Project } from "../components/project";

// const projects = require("./projects.json");
const talks = require("./talks.json");

const resumeProjects = require("./resume.json");
const blogPosts = require("./posts.json");

const MeAtBanff = () => (
  <div>
    <img
      style={{
        marginBottom: "0px",
        margin: "auto",
        display: "block",
        width: "100%",
      }}
      src={banf}
      alt="A picture of me drinking coffee at Banff National Park."
    />
  </div>
);

const IndexPage = () => (
    <div>



    {/* <MeAtBanff /> */}
  </div>
);

export default IndexPage;
