import "./word.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import { ThemeContext } from "../../context/Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Work = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="work">
      <div className="awesome">
        <span>Work for All these</span>
        <span>Brands and Clients</span>
        <span
          style={{
            color: darkMode ? "white" : "",
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          officiis.
          <br /> Doloribus, ullam.Lorem, ipsum dolor sit amet consectetur
          adipisicing elit .<br /> Nihil, officiis. Doloribus, ullam.
        </span>
        <button className="button w-button">Hire Me</button>
      </div>
      {/* Right side */}
      <div className="w-right">
        <motion.div
          className="w-mainCirle"
          style={{
            zIndex: darkMode ? 1 : -1,
            backgroundColor: darkMode ? "var(--orange)" : "white",
          }}
          transition={{ duration: 2, type: "rotate" }}
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
        >
          <div className="w-secCirle">
            <img src={Upwork} alt="upworkLogo" />
          </div>
          <div className="w-secCirle">
            <img src={Fiverr} alt="FiverrLogo" />
          </div>
          <div className="w-secCirle">
            <img src={Amazon} alt="AmazonLogo" />
          </div>
          <div className="w-secCirle">
            <img src={Shopify} alt="ShopifyLogo" />
          </div>
        </motion.div>
        <div className="circleBg circleBlue"></div>
        <div className="circleBg circleYellow"></div>
      </div>
    </div>
  );
};

export default Work;
