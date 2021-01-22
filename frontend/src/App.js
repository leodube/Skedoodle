import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";

import ideaService from "./services/ideaService";

const App = () => {
  const [idea, setIdea] = useState(null);

  useEffect(() => {
    if (!idea) {
      getIdea();
    }
  });

  const getIdea = async () => {
    let res = await ideaService.get();
    setIdea(res);
  };

  const renderIdea = (idea) => {
    let ideaText = idea.text.join(" ").toUpperCase();
    return <h3>{ideaText}</h3>;
  };

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <div className="idea">
        {idea ? renderIdea(idea) : <h3>  </h3>}
      </div>
    </div>
  );
};

export default hot(module)(App);
