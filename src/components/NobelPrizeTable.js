import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { connect } from "react-redux";

import { fetchNobelPrizes } from "../actions";
import Laureate from "./Laureate";

const NobelPrizeTable = ({ nobelPrizes, fetchNobelPrizes }) => {
  useEffect(() => {
    fetchNobelPrizes();
  }, []);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "awardYear", headerName: "Award Year" },
    { field: "category", headerName: "Category", flex: 1 },
    {
      field: "prizeAmount",
      headerName: "Prize Amount ($)",
      flex: 1,
      valueFormatter: (params) => {
        return params.value.toLocaleString();
      },
    },
    {
      field: "laureates",
      headerName: "Laureate(s)",
      flex: 1,
      renderCell: (cellValues) => (
        <Laureate laureate={cellValues.row.laureates} />
      ),
    },
  ];

  const rows = nobelPrizes.map((nobelPrize, id) => {
    return {
      id: id,
      awardYear: nobelPrize.awardYear,
      category: nobelPrize.category.en,
      prizeAmount: nobelPrize.prizeAmount,
      laureates: nobelPrize.laureates[0],
    };
  });

  return (
    <div style={{ height: 1500, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={50} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { nobelPrizes: state.nobelPrizes };
};

export default connect(mapStateToProps, { fetchNobelPrizes })(NobelPrizeTable);
