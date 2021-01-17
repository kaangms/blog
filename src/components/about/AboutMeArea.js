import React from "react";
import moreInfo from "../../images/more-info.jpg";

function AboutMeArea() {
  return (
    <div className="more-info-aboutme">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="more-info-content">
              <div className="row">
                <div className="col-md-12">
                  <div className="top-image">
                    <img src={moreInfo} alt=""></img>
                  </div>
                </div>
                <div className="col-md-12 align-self-center">
                  <div className="right-content">
                    <span>Who we are</span>
                    <h2>
                      Get to know about <em>our company</em>
                    </h2>
                    <p>
                      Curabitur pulvinar sem a leo tempus facilisis. Sed non
                      sagittis neque. Nulla conse quat tellus nibh, id molestie
                      felis sagittis ut. Nam ullamcorper tempus ipsum in cursus
                      <br></br>
                      <br></br>
                      Praes end at dictum metus. Morbi id hendrerit lectus, nec
                      dapibus ex. Etiam ipsum quam, luctus eu egestas eget,
                      tincidunt
                    </p>
                    <div className="filled-buton-parent">
                      {" "}
                      <a href="#" className="filled-button">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeArea;
