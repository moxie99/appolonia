import React from "react";
import image from "../../assets/img4.jpeg";
import { FaChevronRight } from "react-icons/fa";
import "./styles.css";

const Slot = () => {
  return (
    <>
      <div className="slot">
        <div className="slot__container">
          <h4>A NEW ERA</h4>
          <h1>House of Her.A</h1>
          <h3>
            Providing a platform for female athletes to <br />
            leverage their name, image, & likeness.
          </h3>
          <div className="slot__container-img-ext">
            <div className="slot__container-img-case">
              <img src={image} alt="coveravatar" />
            </div>
          </div>

          <button className="btn">
            MINT
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="dotFlex">
        <hr id="divider02" class="style1"></hr>
      </div>
    </>
  );
};

export default Slot;
