import React from "react";

import { SectionGroup } from "../components/section/SectionGroup";
import { SectionPanel } from "../components/section/SectionPanel";
import Header from "../components/header/Header";
import MenuBar from "../components/menu-bar/MenuBar";
import JobList from "./views/job-list/JobList";
import DetailPage from "./views/detail-page/DetailPage";

import "./QuestionThree.scss";

export const QuestionThree = () => {
  return (
    <SectionGroup>
      <SectionPanel>
        <div className="board">
          <MenuBar />
          <div>
            <Header />
            <div className="board__content">
              <div className="board__content--left">
                <JobList />
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
};
