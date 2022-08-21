import React from "react";
import image from "../../assets/img2.jpeg";
import "./style.css";
import { FaChevronRight } from "react-icons/fa";

const Board = () => {
  return (
    <>
      <div id="second-layer">
        <div className="board boardflex">
          <div className="right__side">
            <h4>A New Era</h4>
            <h1>House of Her.A</h1>
            <h3>
              "House of Hera is such a unique concept, because no one <br />
              is putting female sports first in this way."
            </h3>
            <button className="btn">
              Sponsor{" "}
              <FaChevronRight
                style={{ paddingLeft: "12px", height: "60px", width: "15px" }}
              />
            </button>
          </div>

          <div className="left__side">
            <div className="left__side-img-case-ext">
              <div className="left__side-img-case">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dotFlex">
        <hr id="divider02" class="style1"></hr>
      </div>
    </>
  );
};

export default Board;
