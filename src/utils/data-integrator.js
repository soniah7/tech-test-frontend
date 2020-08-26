/**
 * A set of functions integrating different JSON data sources to match display format of data.
 * Function takes several data sources (array of JSON objects) and integrate them into one
 */

export const integrateContactsIntoJobs = (contacts, jobs) => {
  jobs.forEach((job) => {
    job.contactName = contacts[job.contactId]
      ? contacts[job.contactId].name
      : "";
  });
};

export const integrateJobsIntoResources = (jobs, jobAllocations, resources) => {
  resources.forEach((resource) => {
    if (!resource.tasks) {
      resource.tasks = {};
    }
    resource.tasks.jobsInfo = [];
    const resourceId = resource.id;
    for (const allocation of jobAllocations) {
      if (Number(allocation.resourceId) === Number(resourceId)) {
        resource.tasks.jobsInfo.push(jobs[allocation.jobId]);
      }
    }
  });
};

export const integrateActivitiesIntoResources = (
  activities,
  activityAllocations,
  resources
) => {
  resources.forEach((resource) => {
    if (!resource.tasks) {
      resource.tasks = {};
    }
    resource.tasks.activitiesInfo = [];
    const resourceId = resource.id;
    for (const allocation of activityAllocations) {
      if (Number(allocation.resourceId) === Number(resourceId)) {
        resource.tasks.activitiesInfo.push(activities[allocation.activityId]);
      }
    }
  });
};

export const integrateJobsAllocationIntoJobs = (jobAllocations, jobs) => {
  jobs.forEach((job) => {
    job.numOfAllocations = 0;
    for (const jobAllocation of jobAllocations) {
      if (Number(job.id) === Number(jobAllocation.jobId)) {
        job.numOfAllocations++;
      }
    }
  });
};
