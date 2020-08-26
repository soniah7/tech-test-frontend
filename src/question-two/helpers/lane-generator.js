import { taskCssStyleMapping, taskCssClassMapping } from "./lane-css-generator";

export const generateLanes = (resources) => {
  const lanes = resources.map((resource) => {
    let cards = [];
    // concat array of cards for tasks of different taskTypes such as job and activity
    for (const taskType of Object.keys(resource.tasks)) {
      cards = cards.concat(generateCards(resource.tasks[taskType], taskType));
    }
    return { title: resource.name, cards };
  });

  return lanes;
};

// generate an array of cards for tasks of a specific taskType
const generateCards = (tasks, taskType) => {
  const cards = [];
  for (const task of tasks) {
    cards.push({
      start: new Date(task.start),
      end: new Date(task.end),
      description: task.name,
      style: taskCssStyleMapping(taskType),
      className: taskCssClassMapping(taskType),
    });
  }
  return cards;
};
