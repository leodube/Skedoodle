import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";

import { CodeLink, Idea, Definition } from "./components";

const App = () => {
  return (
    <div className="App vh-100">
      <div className="container main-content">
        <div className="row justify-content-center">
          <h1 id="main" className="text-center pt-3">
            Skedoodle
          </h1>
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
