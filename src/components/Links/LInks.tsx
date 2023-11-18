import { useState } from "react";
import GithubIcon from "../../assets/github-icon.svg";
import GithubLogo from "../../assets/github.png";
import LinkedinLogo from "../../assets/linkedin.png";
import StackOverflowLogo from "../../assets/stackoverflow.svg";
import "./Links.scss";

function Links() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className="Links">
      <a
        className="github"
        href="https://github.com/groom115"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GithubIcon} height={20} />
        <img src={GithubLogo} height={20} />
      </a>
      <a
        className="linkedin"
        href="https://www.linkedin.com/in/abhishek-shyam-3446bb171/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={LinkedinLogo} height={20} />
      </a>

      {!isModalOpen && (
        <button
          className="contact-button"
          style={{ marginLeft: "15px" }}
          onClick={openModal}
        >
          <span style={{ color: "black" }}>ContactMe</span>
        </button>
      )}

      {isModalOpen && (
        <div
          className="contact-button"
          style={{
            marginLeft: "15px",
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
          }}
          onClick={closeModal}
        >
          {/* <button
            style={{ display: "flex", flexDirection: "column" }}
            onClick={closeModal}
          > */}
          <span style={{ fontSize: "14px", color: "black" }}>
            shyamabhishek115@gmail.com
          </span>
          <span style={{ fontSize: "12px", color: "black" }}>7086617869</span>
          {/* </button> */}
        </div>
      )}
    </div>
  );
}

export default Links;
