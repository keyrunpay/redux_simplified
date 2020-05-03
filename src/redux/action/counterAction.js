export const counterTypes = {
  INCREAMENT: "INCREAMENT",
  DECREAMENT: "DECREAMENT",
  INCREAMENTN: "INCREAMENTN",
};

export const increament = () => {
  return {
    type: counterTypes.INCREAMENT,
  };
};

export const increamentByN = (payload) => {
  return {
    type: counterTypes.INCREAMENTN,
    payload: payload,
  };
};

export const decreament = () => {
  return {
    type: counterTypes.DECREAMENT,
  };
};
