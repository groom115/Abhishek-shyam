import Links from "../Links/LInk";
import LocationIcon from "../../assets/location.svg";
import "./PersonalDetails.scss";

function PersonalDetails() {
  return (
    <div className="PersonalDetails">
      <div className="name">{"Abhishek Shyam"}</div>
      <div className="impostorEffect">{"Your next Software Engineer"}</div>
      <div className="location">
        <img src={LocationIcon} />
        <span>{"Assam, India"}</span>
      </div>
      <Links />
    </div>
  );
}

export default PersonalDetails;
