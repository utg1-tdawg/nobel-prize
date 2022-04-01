import React, { useEffect } from "react";
import { connect } from "react-redux";
import NobelPrize from "./NobelPrize";

const Category = ({ name, categoryNobelPrizes }) => {
  useEffect(() => {
    console.log(categoryNobelPrizes);

    for (let i in categoryNobelPrizes) {
      console.log(categoryNobelPrizes[i].laureates);
    }
  }, []);

  const renderedCategoryNobelPrizes = categoryNobelPrizes.map(
    (categoryNobelPrize, id) => (
      <NobelPrize
        key={id}
        id={id}
        awardYear={categoryNobelPrize.awardYear}
        prizeAmount={categoryNobelPrize.prizeAmount}
        laureates={categoryNobelPrize.laureates}
      />
    )
  );

  return <div className="ui link cards">{renderedCategoryNobelPrizes}</div>;
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    categoryNobelPrizes: state.nobelPrizes.filter(
      (nobelPrize) => nobelPrize.category.en === ownProps.name
    ),
  };
};

export default connect(mapStateToProps, {})(Category);
