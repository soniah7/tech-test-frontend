import React from "react";

import { SectionGroup } from "../components/section/SectionGroup";
import { SectionPanel } from "../components/section/SectionPanel";
import { Swimlane } from "../components/swimlane/Swimlane";

import {
  integrateJobsIntoResources,
  integrateActivitiesIntoResources,
} from "../utils/data-integrator";
import { generateLanes } from "./helpers/lane-generator";
import { DataService } from "../service/DataService";

/**
 * Please do not change these dates, the data on the server all fall within the 01/09/2018
 */
const RANGE_START = new Date("2018-09-01T00:00:00Z");
const RANGE_END = new Date("2018-09-01T24:00:00Z");

export class QuestionTwo extends React.Component {
  constructor() {
    super();
    this.state = {
      lanes: [],
    };
  }

  async componentDidMount() {
    let jobs, activities, resources, jobAllocations, activityAllocations;
    try {
      jobs = await DataService.getJobs();
      activities = await DataService.getActivities();
      resources = await DataService.getResources();
      jobAllocations = await DataService.getJobAllocations();
      activityAllocations = await DataService.getActivityAllocations();
      integrateJobsIntoResources(jobs, jobAllocations, resources);
      integrateActivitiesIntoResources(
        activities,
        activityAllocations,
        resources
      );
      this.setState({ lanes: generateLanes(resources) });
    } catch (e) {
      alert(e.message);
    }
  }

  render() {
    return (
      <SectionGroup>
        <SectionPanel>
          <Swimlane
            lanes={this.state.lanes}
            start={RANGE_START}
            end={RANGE_END}
          />
        </SectionPanel>
      </SectionGroup>
    );
  }
}
