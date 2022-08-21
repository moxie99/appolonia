import React from "react";
import image from "../../assets/img3.jpeg";
import "./styles.css";
import { FaChevronRight } from "react-icons/fa";

const HighLight = () => {
  return (
    <>
      <div>
        <div className="board boardflex">
          <div className="left__side">
            <div className="left__side-img-case-ext">
              <div className="left__side-img-case">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
          <div className="right__side">
            <h4>HIGHLIGHTS</h4>
            <h1>Apolonia Thomas</h1>
            <h3>
              Check out the athletes highlights. Support with likes,
              <br /> shares, & comments.
            </h3>
            <button className="btn">
              Full Video{" "}
              <FaChevronRight
                style={{ paddingLeft: "12px", height: "60px", width: "15px" }}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="dotFlex">
        <hr id="divider02" class="style1"></hr>
      </div>
    </>
  );
};

export default HighLight;
