import React from "react";
import githubIcon from "../images/github.svg";

const CodeLink = () => {
  return (
    <a
      href="https://github.com/leodube/skedoodle"
      target="_blank"
      role="button"
      className="btn btn-lg mb-3 mr-2 code-link"
    >
      <span className="icon">
        <img src={githubIcon} height="30" width="30" alt=""></img>
      </span>
    </a>
  );
};

export default CodeLink;
