import React from "react";
import Link from "./Link";

const NavBar = () => {
  return (
    <div className="ui six item menu">
      <Link displayUrl="/physics" displayName="Physics" />
      <Link displayUrl="/chemistry" displayName="Chemistry" />
      <Link displayUrl="/medicine" displayName="Physiology or Medicine" />
      <Link displayUrl="/literature" displayName="Literature" />
      <Link displayUrl="/peace" displayName="Peace" />
      <Link displayUrl="/economics" displayName="Economic Sciences" />
    </div>
  );
};

export default NavBar;
