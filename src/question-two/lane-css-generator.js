// map different task types to different css styles for displaying at swimlane
export const taskCssStyleMapping = (taskType) => {
  switch (taskType) {
    case "jobsInfo":
      return {
        color: "red",
      };
    case "activitiesInfo":
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
    case "jobsInfo":
      return "";
    case "activitiesInfo":
      return "";
    default:
      return "";
  }
};
