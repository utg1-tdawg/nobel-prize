import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Laureate = ({ laureate }) => {
  return (
    <div>
      {"fullName" in laureate ? laureate.fullName.en : laureate.orgName.en}
    </div>
  );
};

export default Laureate;
