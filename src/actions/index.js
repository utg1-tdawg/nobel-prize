import nobelPrize from "../apis/nobelPrize";

export const fetchNobelPrizes = () => {
  return async (dispatch) => {
    const response = await nobelPrize.get("/nobelPrizes");
    const payload = response.data.nobelPrizes.filter(
      (nobelPrize) => "laureates" in nobelPrize
    );
    console.log("Response", response);
    console.log("Payload", payload);
    dispatch({
      type: "FETCH_NOBEL_PRIZES",
      payload: payload,
    });
  };
};
