import { useState } from "react";

import Header from "../../components/Header/Header";
import FancySwitch from "../../components/FancySwitch/FancySwitch";

import JobsTimeline from "../JobsTimeline/JobsTimeline";
import Stacks from "../Stacks/Stacks";

import "./Layout.scss";
import ProjectsTimeline from "../../components/ProjectsTimeline/JobsTimeline";
import EducationTimeline from "../../components/EducationTimeline/EducationTimeline";

function Layout() {
  const [activeButton, setActiveButton] = useState("Stacks");

  const handleChange = (button: string) => {
    setActiveButton(button);
  };

  return (
    <div className="Layout">
      <Header />
      <FancySwitch
        textA="Stacks"
        textB="Jobs"
        textC="Projects"
        textD="Education"
        activeButton={activeButton}
        handleChange={handleChange}
      />
      {activeButton === "Jobs" && <JobsTimeline />}
      {activeButton === "Stacks" && <Stacks />}
      {activeButton === "Projects" && <ProjectsTimeline />}
      {activeButton === "Education" && <EducationTimeline />}
    </div>
  );
}

export default Layout;
