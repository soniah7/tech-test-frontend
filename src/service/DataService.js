import ajax from "./ajax";

const BASE = "http://localhost:3400";

export const DataService = {
  getJobs: () => ajax(BASE, "/jobs"),
  getContacts: () => ajax(BASE, "/contacts"),
  getActivities: () => ajax(BASE, "/activities"),
  getResources: () => ajax(BASE, "/resources"),
  getJobAllocations: () => ajax(BASE, "/jobAllocations"),
  getActivityAllocations: () => ajax(BASE, "/activityAllocations"),
};
