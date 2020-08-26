import { taskCssStyleMapping, taskCssClassMapping } from "./task-css-generator";

export const generateLanes = (resources) => {
  const lanes = resources.map((resource) => {
    const cards = generateCards(resource.tasks.jobsInfo, "job").concat(
      generateCards(resource.tasks.activitiesInfo, "activity")
    );
    return { title: resource.name, cards };
  });
  return lanes;
};

export const generateCards = (tasks, taskType) => {
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
