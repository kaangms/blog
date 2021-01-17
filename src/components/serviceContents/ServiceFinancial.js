import React from "react";
import service01 from "../../images/service_01.jpg";
import service02 from "../../images/service_02.jpg";
import service03 from "../../images/service_03.jpg";

function ServiceFinancial() {
  return (
    <div>
      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>
                  Financial <em>Services</em>
                </h2>
                <span>Aliquam id urna imperdiet libero mollis hendrerit</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <img src={service01} alt=""></img>
                <div className="down-content">
                  <h4>Digital Currency</h4>
                  <p>
                    Sed tincidunt dictum lobortis. Aenean tempus diam vel augue
                    luctus dignissim. Nunc ornare leo tortor.
                  </p>
                  <a href="" className="filled-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <img src={service02} alt=""></img>
                <div className="down-content">
                  <h4>Market Analysis</h4>
                  <p>
                    Sed tincidunt dictum lobortis. Aenean tempus diam vel augue
                    luctus dignissim. Nunc ornare leo tortor.
                  </p>
                  <a href="" className="filled-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <img src={service03} alt=""></img>
                <div className="down-content">
                  <h4>Historical Data</h4>
                  <p>
                    Sed tincidunt dictum lobortis. Aenean tempus diam vel augue
                    luctus dignissim. Nunc ornare leo tortor.
                  </p>
                  <a href="" className="filled-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <img src={service01} alt=""></img>
                <div className="down-content">
                  <h4>Digital Currency</h4>
                  <p>
                    Sed tincidunt dictum lobortis. Aenean tempus diam vel augue
                    luctus dignissim. Nunc ornare leo tortor.
                  </p>
                  <a href="" className="filled-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <img src={service02} alt=""></img>
                <div className="down-content">
                  <h4>Market Analysis</h4>
                  <p>
                    Sed tincidunt dictum lobortis. Aenean tempus diam vel augue
                    luctus dignissim. Nunc ornare leo tortor.
                  </p>
                  <a href="" className="filled-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <img src={service03} alt=""></img>
                <div className="down-content">
                  <h4>Historical Data</h4>
                  <p>
                    Sed tincidunt dictum lobortis. Aenean tempus diam vel augue
                    luctus dignissim. Nunc ornare leo tortor.
                  </p>
                  <a href="" className="filled-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceFinancial;
