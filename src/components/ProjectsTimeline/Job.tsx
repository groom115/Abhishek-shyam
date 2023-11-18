import { VerticalTimelineElement } from "react-vertical-timeline-component";

import Applications from "./Applications";
import Contributions from "./Contributions";
import Technologies from "./Technologies";

import Logo from "../Logo/Logo";

import { Job } from "../../constants/WorkHistory";
import Projects from "./Projects";

const contentStyle: React.CSSProperties = {
  background: "rgba(0, 0, 0, 0.3)",
  boxShadow: "none",
};

const contentArrowStyle: React.CSSProperties = {
  borderRight: "7px solid  rgba(0, 0, 0, 0.3)",
};

const iconStyle: React.CSSProperties = {
  background: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "none",
};

function JobItem({ job }: { job: Job }) {
  const date = `${job.period.startDate} - ${job.period.endDate || "present"}`;

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={contentStyle}
      contentArrowStyle={contentArrowStyle}
      date={date}
      iconStyle={iconStyle}
      icon={<Logo src={job.logo} alt={job.company} />}
    >
      <h3 className="vertical-timeline-element-title">{job.title}</h3>
      {/* <i className="vertical-timeline-element-subtitle">
        {`${job.company} - ${job.location}`}
      </i> */}

      <div style={{ marginTop: "30px" }}>
        {job.description.split(".").map((sentence, index) => (
          <p className="description" key={index}>
            {sentence.trim()}.
          </p>
        ))}
      </div>

      <Technologies technologies={job.technologies} />
      <Contributions contributionsLinks={job.contributionsLinks} />
      <Applications appLinks={job.appLinks} />
      <Projects projects={job.projects} />
    </VerticalTimelineElement>
  );
}

export default JobItem;
