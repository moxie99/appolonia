import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import "./styles.css";

const SocialMedia = () => {
  return (
    <>
      <div className="social-media">
        <div className="social-media-container">
          <h3>TAP IN</h3>
          <h1>Social Media</h1>
          <h4>
            Want to see more be sure to follow her on social
            <br /> media
          </h4>
          <div className="social-media-links">
            <FaTwitter
              style={{
                color: "#695EE6",
                height: "30px",
                width: "30px",
                marginLeft: "20px",
                marginRight: "20px",
              }}
              className="svg"
            />
            <FaFacebook
              style={{
                color: "#AB6AB7",
                height: "30px",
                width: "30px",
                marginLeft: "20px",
                marginRight: "20px",
              }}
              className="svg"
            />
            <FaInstagram
              style={{
                color: "#DA7394",
                height: "30px",
                width: "30px",
                marginLeft: "20px",
                marginRight: "20px",
              }}
              className="svg"
            />
            <FaEnvelope
              style={{
                color: "#D4B239",
                height: "30px",
                width: "30px",
                marginLeft: "20px",
                marginRight: "20px",
              }}
              className="svg"
            />
          </div>
        </div>
      </div>
      <div className="dotFlex">
        <hr id="divider02" class="style1"></hr>
      </div>
    </>
  );
};

export default SocialMedia;
