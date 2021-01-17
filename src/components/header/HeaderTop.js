import React from "react";
import {
  // FaClock,
  FaMailBulk,
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedinIn,
} from "react-icons/fa";
function HeaderTop() {
  return (
    <div className="sub-header">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-xs-12">
            <ul className="left-info">
              {/* <li>
                <a href="#">
                  <FaClock /> Mon-Fri 09:00-17:00
                </a>
              </li> */}
              <li>
                <a href="#">
                  <FaMailBulk /> yucel.erol@prof.com.tr
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="right-icons">
              <li>
                <a href="#">
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitterSquare />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
