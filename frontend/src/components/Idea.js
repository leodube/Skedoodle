import React, { useState, useEffect } from "react";
import ideaService from "../services/ideaService";

const Idea = () => {
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
    let precedeWith = idea.text.shift();
    let ideaText = toTitleCase(idea.text.join(" "));
    return (
      <>
        <h3 className="idea text-center my-0">{precedeWith}</h3>
        <h3 className="idea-bold text-center my-0">{ideaText}</h3>
      </>
    );
  };

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  return (
    <div className="idea">
      {idea ? (
        renderIdea(idea)
      ) : (
        <div class="d-flex justify-content-center">
          <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <div className="d-flex justify-content-center mt-3">
        <button
          type="button"
          className="btn btn-sm btn-outline-dark mt-3"
          onClick={getIdea}
        >
          New Idea
        </button>
      </div>
    </div>
  );
};

export default Idea;
