import React, { useEffect } from "react";
import { connect } from "react-redux";

import NavBar from "./NavBar";
import Category from "./Category";
import Route from "./Route";
import { fetchNobelPrizes } from "../actions";

const App = ({ fetchNobelPrizes }) => {
  useEffect(() => {
    fetchNobelPrizes();
  }, []);

  return (
    <div className="ui container">
      <NavBar />
      <Route path="/physics">
        <Category name="Physics" />
      </Route>

      <Route path="/chemistry">
        <Category name="Chemistry" />
      </Route>

      <Route path="/medicine">
        <Category name="Physiology or Medicine" />
      </Route>

      <Route path="/literature">
        <Category name="Literature" />
      </Route>

      <Route path="/peace">
        <Category name="Peace" />
      </Route>

      <Route path="/economics">
        <Category name="Economic Sciences" />
      </Route>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { nobelPrizes: state.nobelPrizes };
};

export default connect(mapStateToProps, { fetchNobelPrizes })(App);
