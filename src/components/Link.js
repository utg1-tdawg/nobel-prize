import React from "react";
import { connect } from "react-redux";
import { changeActiveCategory } from "../actions";

const Link = ({
  displayName,
  displayUrl,
  changeActiveCategory,
  activeCategory,
}) => {
  const category = displayUrl.slice(1);

  const onAnchorLink = () => {
    window.history.pushState(null, null, displayUrl);

    changeActiveCategory(category);
  };
  return (
    <div
      className={activeCategory === category ? "active item" : "item"}
      onClick={onAnchorLink}
    >
      {displayName}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { activeCategory: state.activeCategory };
};

export default connect(mapStateToProps, { changeActiveCategory })(Link);
