export const switchTypes = {
  ENABLE_SWITCH: "ENABLE_SWITCH",
  DISABLE_SWITCH: "DISABLE_SWITCH",
};

export const enableSwitch = () => {
  return {
    type: switchTypes.ENABLE_SWITCH,
  };
};

export const disableSwitch = () => {
  return {
    type: switchTypes.DISABLE_SWITCH,
  };
};
