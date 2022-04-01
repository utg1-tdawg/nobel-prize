import React from "react";

const NobelPrize = ({ id, awardYear, laureates, prizeAmount }) => {
  const isOrg = "orgName" in laureates[0]; // this logic doesnt work. can have org and human in same prize

  const renderedLaureates = laureates.map((laureate, id) => (
    <div key={id}>
      {/* <div className="description">
        {isOrg ? laureate.orgName.en : laureate.fullName.en}
      </div> */}
      {/* <div className="description">{laureate.motivation}</div> */}
    </div>
  ));

  return (
    <div className="card">
      <div className="content">
        <div className="header">{id}</div>
        <div className="description">Award Year: {awardYear}</div>
        <div className="description">
          Prize Amount: ${prizeAmount.toLocaleString()}
        </div>
        {/* {renderedLaureates} */}
      </div>
    </div>
  );
};

export default NobelPrize;
