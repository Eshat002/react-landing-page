import "./Hero.css";
import React from "react";
import elipse from "../../img/elipse.png";
import cookies from "../../img/cookies.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <img
          className="bg-img"
          style={{ marginLeft: "-120px" }}
          alt="eclipse"
          src={elipse}
        />
        <div className="row">
          <div className="col-lg-6 first-col">
            <h1 className="headline">
              Not an ordinary
              <span style={{ color: "#F2C100" }}> Cookie </span>
              <svg
                style={{ marginTop: "-25px", zIndex: "-9999" }}
                xmlns="http://www.w3.org/2000/svg"
                width="91"
                height="90"
                viewBox="0 0 99 99"
                fill="none"
              >
                <path
                  d="M49.237 8.20593C26.6125 8.20593 8.20605 26.6124 8.20605 49.2368C8.20605 71.8613 26.6125 90.2677 49.237 90.2677C71.8614 90.2677 90.2679 71.8613 90.2679 49.2368C90.2679 26.6124 71.8614 8.20593 49.237 8.20593ZM34.8761 36.9276C35.6847 36.9278 36.4852 37.0874 37.2321 37.397C37.9789 37.7067 38.6575 38.1604 39.229 38.7323C39.8005 39.3042 40.2538 39.983 40.5629 40.7301C40.8721 41.4772 41.0311 42.2778 41.0308 43.0863C41.0305 43.8948 40.871 44.6954 40.5613 45.4422C40.2517 46.1891 39.798 46.8676 39.2261 47.4391C38.6542 48.0107 37.9753 48.4639 37.2283 48.7731C36.4812 49.0822 35.6805 49.2412 34.872 49.2409C33.2392 49.2404 31.6734 48.5912 30.5192 47.4362C29.365 46.2813 28.7169 44.7151 28.7174 43.0822C28.7179 41.4493 29.3671 39.8836 30.5221 38.7294C31.6771 37.5752 33.2433 36.927 34.8761 36.9276ZM66.6382 66.6504C63.236 70.0579 58.9068 72.3895 54.1894 73.3548C49.3124 74.3467 44.2498 73.8477 39.6604 71.9228C35.2563 70.063 31.4894 66.9605 28.82 62.9945L35.6229 58.4114C36.2097 59.2771 36.8826 60.0936 37.6252 60.8322C39.1211 62.3358 40.8951 63.5343 42.8484 64.3608C43.8455 64.7793 44.8795 65.1035 45.9217 65.3128C48.1101 65.7518 50.3639 65.7518 52.5523 65.3128C53.5903 65.0994 54.6243 64.7752 55.6296 64.3567C56.5897 63.9464 57.5334 63.4376 58.4156 62.8468C59.269 62.2642 60.0855 61.5912 60.8405 60.8404C61.5914 60.0936 62.2643 59.2771 62.8469 58.4114L69.6498 62.9945C68.7718 64.3075 67.7583 65.5384 66.6382 66.6504ZM53.3401 49.2368C53.3401 49.2368 55.3916 41.0307 63.5978 41.0307C71.7999 41.0307 73.8555 49.2368 73.8555 49.2368H53.3401Z"
                  fill="#F2C100"
                />
              </svg>
            </h1>

            <p className="sub-headline">
              Give your taste buds something unique and tasty
            </p>
            <a href="">
              Taste the Cookies{" "}
              <span
                className="now-break
                        "
              >
                {" "}
                Now &nbsp;
                <svg
                  className="arrow-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="35"
                  viewBox="0 0 79 41"
                  fill="none"
                >
                  <path
                    d="M76.8333 20.6667L2 20.6667M76.8333 20.6667L58.1666 39.3334M76.8333 20.6667L58.1666 2.00004"
                    stroke="#603913"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
          <div className="col-lg-6 last-col">
            <div>
              <img src={cookies} alt="cookies" />
            </div>

            <motion.div
              className="motion-1"
              initial={{
                position: "absolute",
                marginTop: "-500px",
                marginLeft: "415px",
              }}
              animate={{ marginLeft: "370px" }}
              transition={{ duration: 2, type: "spring" }}
            >
              <svg
                className="my-svg-1"
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="199"
                viewBox="0 0 216 215"
                fill="none"
              >
                <g filter="url(#filter0_d_18_337)">
                  <circle
                    cx="110.772"
                    cy="112.327"
                    r="73.4724"
                    transform="rotate(-145 110.772 112.327)"
                    fill="#F2C100"
                    fillOpacity="0.52"
                    shapeRendering="crispEdges"
                  />
                </g>
                <circle
                  cx="103.955"
                  cy="95.3314"
                  r="68.4494"
                  transform="rotate(-145 103.955 95.3314)"
                  fill="white"
                />
              </svg>
            </motion.div>

            <motion.div
              className="motion-2"
              initial={{
                position: "absolute",
                marginTop: "-30px",
                marginLeft: "370px",
              }}
              animate={{ marginTop: "-120px" }}
              transition={{ duration: 2, type: "spring" }}
            >
              <svg
                className="my-svg-2"
                xmlns="http://www.w3.org/2000/svg"
                width="220"
                height="227"
                viewBox="0 0 234 247"
                fill="none"
              >
                <g filter="url(#filter0_d_18_331)">
                  <circle
                    cx="100.365"
                    cy="140.035"
                    r="73.4724"
                    transform="rotate(-60 100.365 140.035)"
                    fill="#F2C100"
                    fillOpacity="0.52"
                    shapeRendering="crispEdges"
                  />
                </g>
                <circle
                  cx="140.504"
                  cy="105.504"
                  r="68.4494"
                  transform="rotate(-60 140.504 105.504)"
                  fill="white"
                />
              </svg>
            </motion.div>

            <motion.div
              className="motion-3"
              initial={{
                position: "absolute",
                marginTop: "10px",
                marginLeft: "-50px",
              }}
              animate={{ marginLeft: "40px" }}
              transition={{ duration: 2, type: "spring" }}
            >
              <svg
                className="my-svg-3"
                xmlns="http://www.w3.org/2000/svg"
                width="131"
                height="94"
                viewBox="0 0 131 94"
                fill="none"
              >
                <g filter="url(#filter0_d_18_334)">
                  <circle
                    cx="47"
                    cy="46"
                    r="43"
                    fill="#F2C100"
                    fillOpacity="0.52"
                    shapeRendering="crispEdges"
                  />
                </g>
                <circle cx="99" cy="46" r="32" fill="white" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
