import React, { useState, useEffect } from "react";

const Route = ({ path, children }) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    window.addEventListener("popstate", () => {
      window.location.pathname === path ? setRender(true) : setRender(false);
    });
  }, []);
  return render && children;
};

export default Route;
