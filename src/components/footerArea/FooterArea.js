import React from "react";
import FormFooter from "../form/FormFooter";

function FooterArea() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 footer-item">
              <h4>Finance Business</h4>
              <p>
                Vivamus tellus mi. Nulla ne cursus elit,vulputate. Sed ne cursus
                augue hasellus lacinia sapien vitae.
              </p>
              <ul className="social-icons">
                <li>
                  <a
                    rel="nofollow"
                    href="https://fb.com/templatemo"
                    target="_blank"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-behance"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer-item">
              <h4>Useful Links</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Vivamus ut tellus mi</a>
                </li>
                <li>
                  <a href="#">Nulla nec cursus elit</a>
                </li>
                <li>
                  <a href="#">Vulputate sed nec</a>
                </li>
                <li>
                  <a href="#">Cursus augue hasellus</a>
                </li>
                <li>
                  <a href="#">Lacinia ac sapien</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer-item">
              <h4>Additional Pages</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">How We Work</a>
                </li>
                <li>
                  <a href="#">Quick Support</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <FormFooter />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterArea;
