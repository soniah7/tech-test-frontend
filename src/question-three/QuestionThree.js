import React from "react";

import { SectionGroup } from "../components/section/SectionGroup";
import { SectionPanel } from "../components/section/SectionPanel";
import Header from "../components/header/Header";
import MenuBar from "../components/menu-bar/MenuBar";
import JobCard from "../components/job-card/JobCard";
import DetailPage from "./views/detail-page/DetailPage";

import { DataService } from "../service/DataService";
import { integrateJobsAllocationIntoJobs } from "../utils/data-integrator";

import "./QuestionThree.scss";

export class QuestionThree extends React.Component {
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
      <SectionGroup>
        <SectionPanel>
          <div className="board">
            <MenuBar />
            <div>
              <Header />
              <div className="board__content">
                <div className="board__content--left">
                  {this.state.jobs.map((job, index) => {
                    return <JobCard key={index} {...job} />;
                  })}
                </div>
                <div className="board__content--right">
                  <DetailPage />
                </div>
              </div>
            </div>
          </div>
        </SectionPanel>
      </SectionGroup>
    );
  }
}
