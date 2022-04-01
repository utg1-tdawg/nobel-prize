import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Route = ({ path, children, activeCategory }) => {
  const category = path.slice(1);

  return activeCategory === category && children;
};

const mapStateToProps = (state) => {
  return { activeCategory: state.activeCategory };
};

export default connect(mapStateToProps)(Route);
