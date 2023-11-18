import { VerticalTimeline } from "react-vertical-timeline-component";

import Job from "./Job";
import { ProjectHistory } from "../../constants/ProjectHistory";

import "react-vertical-timeline-component/style.min.css";
import "./JobsTimeline.scss";

function ProjectsTimeline() {
  return (
    <div className="JobsTimeline">
      <VerticalTimeline>
        {ProjectHistory.map((job) => (
          <Job job={job} key={`${job.title}|${job.company}`} />
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default ProjectsTimeline;
