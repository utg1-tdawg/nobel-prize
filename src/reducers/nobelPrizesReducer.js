export default (nobelPrizes = [], action) => {
  switch (action.type) {
    case "FETCH_NOBEL_PRIZES":
      return action.payload;
    default:
      return nobelPrizes;
  }
};
