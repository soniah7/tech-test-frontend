export const taskCssStyleMapping = (taskType) => {
  switch (taskType) {
    case "job":
      return {
        color: "red",
      };
    case "activity":
      return {
        color: "blue",
      };
    default:
      return {
        color: "grey",
      };
  }
};

// this is only a sample function, since css classes for different task types have not been implemented yet
export const taskCssClassMapping = (taskType) => {
  switch (taskType) {
    case "job":
      return "";
    case "activity":
      return "";
    default:
      return "";
  }
};
