import React from "react";
import ShareImage1 from "../../img/share1.png";
import ShareImage2 from "../../img/share2.png";
import ShareImage3 from "../../img/share3.png";
import Smiley from "../../img/smiley.png";

import "./Share.css";

const Share = () => {
  return (
    <div className="share mb-5">
      <img className="smiley-image" src={Smiley} alt="smiley" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 first-col">
            <h2 className="headline">Safe To Share</h2>{" "}
            <span className="wave-svg">
              <svg style={{ marginTop: "-30px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="135"
                height="12"
                viewBox="0 0 135 12"
                fill="none"
              >
                <path
                  d="M3 3C5.83333 7.16667 35.7 13 132.5 3"
                  stroke="#F8DF7A"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <p className="text">
              Made from hand picked ingredients chosen safely and perfecty baked
              gives the cookies enough nutritional value which is good for heath
            </p>
          </div>

          <div className="col-lg-6 sec-col">
            <div className="text-center">
              <img id="share1-img" src={ShareImage1} alt="share1" />
            </div>
            <div className="other-images">
              <div>
                {" "}
                <img style={{ width: "100%" }} src={ShareImage2} alt="share2" />
              </div>
              <div>
                {" "}
                <img style={{ width: "100%" }} src={ShareImage3} alt="share3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
