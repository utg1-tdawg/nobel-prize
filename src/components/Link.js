import React from "react";

const Link = ({ path, displayName, displayUrl }) => {
  const onAnchorLink = () => {
    window.history.pushState(null, null, displayUrl);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <div className="item" onClick={onAnchorLink}>
      {displayName}
    </div>
  );
};

export default Link;
