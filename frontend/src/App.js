import React from "react";
import { hot } from "react-hot-loader";
import { isMobile } from "react-device-detect";
import { CodeLink, Idea, Definition } from "./components";
import skedoodleImg from "./images/skedoodle.svg";

const App = () => {
  return (
    <div className="App">
      <div className="container main-content">
        <div className="row justify-content-center">
          {isMobile ? (
            <img src={skedoodleImg} />
          ) : (
            <h1 id="main" className="text-center">
              Skedoodle
            </h1>
          )}
        </div>
        <div className="row justify-content-center">
          <Idea />
        </div>
      </div>
      <Definition />
      <CodeLink />
    </div>
  );
};

export default hot(module)(App);
