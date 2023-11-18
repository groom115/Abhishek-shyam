import { Job } from "../../constants/WorkHistory";

function Technologies({ technologies }: { technologies: Job["technologies"] }) {
  return (
    <p className="Technologies" style={{ marginTop: "40px" }}>
      <u>{"Technologies:"}</u>
      {` ${technologies.join(", ")}`}
    </p>
  );
}

export default Technologies;
