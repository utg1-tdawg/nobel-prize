import React from "react";

const NobelPrize = ({ id, awardYear, laureates, prizeAmount }) => {
  const renderedLaureates = laureates.map((laureate) => (
    <div key={laureate.id}>
      <div className="description">
        Name:{" "}
        {"fullName" in laureate ? laureate.fullName.en : laureate.orgName.en}
      </div>
      <div className="description">Motivation: {laureate.motivation.en}</div>
      <br />
    </div>
  ));

  return (
    <div className="card">
      <div className="content">
        <div className="header">{awardYear}</div>
        <div className="description">
          Prize Amount: ${prizeAmount.toLocaleString()}
        </div>
        <br />
        <div className="header">Laureate(s)</div>
        {renderedLaureates}
      </div>
    </div>
  );
};

export default NobelPrize;
