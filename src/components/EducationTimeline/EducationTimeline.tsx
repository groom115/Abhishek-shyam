import { VerticalTimeline } from "react-vertical-timeline-component";

import Job from "./Job";
import { JobHistory } from "../../constants/WorkHistory";
import { EducationHistory } from "../../constants/EducationHistory";
import "react-vertical-timeline-component/style.min.css";
import "./JobsTimeline.scss";

function EducationTimeline() {
  return (
    <div className="JobsTimeline">
      <VerticalTimeline>
        {EducationHistory.map((job) => (
          <Job job={job} key={`${job.title}|${job.company}`} />
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default EducationTimeline;
