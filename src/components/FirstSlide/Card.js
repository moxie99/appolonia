import React from "react";
import "./styles.css";
import avatar from "../../assets/img1.jpeg";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <>
      <motion.div
        animate={{ opacity: [1, 0.7, 1] }}
        whileInView={{ backgroundColor: "transparent" }}
        className="card__body"
      >
        <div className="card">
          <div className="card__img_container">
            <div className="card__img__ext">
              <div className="card__img">
                <img src={avatar} alt="avatar" />
              </div>
            </div>
          </div>

          <div className="card-content">
            <h1>
              Apolonia <br /> Thomas
            </h1>
          </div>
          <div className="details">
            <p>
              Veteran, played in 4 different countries, looking to help prepare
              the next generation of hoopers.
            </p>
          </div>
          <div className="btnContainer">
            <motion.a
              href="#second-layer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              transition={{
                delay: 0.5,
                staggerChildren: 0.5,
                x: { duration: 1 },
                default: { ease: "linear" },
              }}
            >
              <button className="button">
                <FaChevronDown style={{ color: "red" }} className="svg" />
              </button>
            </motion.a>
          </div>
        </div>
      </motion.div>
      <div className="dotFlex">
        <hr id="divider02" class="style1"></hr>
      </div>
    </>
  );
};

export default Card;

/**
<motion.a
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.8 }}
  style={{ x: 100 }}
/>


*/
