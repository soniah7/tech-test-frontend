import React from "react";
import { connect } from "react-redux";

import { displayDateAndTime } from "../../../utils/date-formatter";
import { integrateContactsIntoJobs } from "../../../utils/data-integrator";
import { DataService } from "../../../service/DataService";

import "./JobFeed.scss";

export class JobFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let jobs, contacts;
    try {
      jobs = await DataService.getJobs();
      contacts = await DataService.getContacts();
      integrateContactsIntoJobs(contacts, jobs);
      this.jobs = jobs;
    } catch (e) {
      alert(e.message);
    }
  }

  componentDidUpdate(prevProps) {
    const searchTerm = this.props.search.searchTerm;
    if (prevProps.search.searchTerm !== searchTerm) {
      let searchResult = [];
      if (searchTerm.length >= 3) {
        this.setState({ loading: true });
        searchResult = this.searchJobsByName(searchTerm);
      }
      //delay display of loading for 300ms to make it more obvious
      setTimeout(() => this.setState({ searchResult, loading: false }), 300);
    }
  }

  searchJobsByName(searchTerm) {
    const searchResult = this.jobs
      ? this.jobs.filter((job) =>
          //assume using case insensitive search
          job.name.toUpperCase().includes(searchTerm.toUpperCase())
        )
      : [];
    return searchResult;
  }

  render() {
    return (
      <div className="feed">
        {this.state.loading
          ? "Loading..."
          : this.state.searchResult.map((job, index) => (
              <div key={index} className="feed__row">
                <span>{job.name}</span>
                <span>
                  {`from ${displayDateAndTime(
                    job.start
                  )} to ${displayDateAndTime(job.end)} `}
                </span>
                <span>{job.contactName}</span>
              </div>
            ))}
      </div>
    );
  }
}

export default connect((state) => ({
  search: state.search,
}))(JobFeed);
