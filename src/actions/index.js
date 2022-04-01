import nobelPrize from "../apis/nobelPrize";

export const fetchNobelPrizes = () => {
  return async (dispatch) => {
    console.log("Fetching...");
    const response = await nobelPrize.get("/nobelPrizes");
    const payload = response.data.nobelPrizes.filter(
      (nobelPrize) => "laureates" in nobelPrize
    );
    console.log("Response", response);
    dispatch({
      type: "FETCH_NOBEL_PRIZES",
      payload: payload,
    });
  };
};

export const changeActiveCategory = (category) => {
  return { type: "CHANGE_ACTIVE_CATEGORY", payload: category };
};
