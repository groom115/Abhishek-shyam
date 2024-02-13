import { useState } from "react";
import { Stack } from "../../constants/stacks";
import "./Pill.scss";

function Pill({ stack }: { stack: Stack }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(false);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="Pill"
    >
      {stack.name}
      {
        <div className={`extras ${isHovering ? "isHovering" : ""}`}>
          <div className="description">{stack.description}</div>
          {typeof stack.experience === "number" && (
            <div className="experience">
              <div
                className="progress"
                style={{ width: `${stack.experience * 10}%` }}
              >{`${stack.experience}/10`}</div>
            </div>
          )}
        </div>
      }
    </div>
  );
}

export default Pill;
