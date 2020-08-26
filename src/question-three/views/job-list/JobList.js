import React, { Component } from "react";
import JobCard from "../../../components/job-card/JobCard";

import { DataService } from "../../../service/DataService";
import { integrateJobsAllocationIntoJobs } from "../../../utils/data-integrator";

class JobList extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
    };
  }

  async componentDidMount() {
    let jobs, jobAllocations;
    try {
      jobs = await DataService.getJobs();
      jobAllocations = await DataService.getJobAllocations();
      integrateJobsAllocationIntoJobs(jobAllocations, jobs);
      this.setState({ jobs });
    } catch (e) {
      alert(e.message);
    }
  }

  render() {
    return (
      <div>
        {this.state.jobs.map((job, index) => {
          return <JobCard key={index} {...job} />;
        })}
      </div>
    );
  }
}

export default JobList;
