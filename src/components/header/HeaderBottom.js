import React from "react";
import { connect } from "react-redux";
import DropDown from "../toolbox/DropDown";

export const HeaderBottom = (props) => {
  const navFixed = () => {
    let nav = document.querySelector("body");
    console.log(nav);
  };

  return (
    <div>
      
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="/anasayfa">
              <h2>Doç.Dr.Yücel Erol</h2>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                  <a className="nav-link" href="/anasayfa">
                    Anasayfa
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="hakkımızda">
                    Hakkımda
                  </a>
                </li>
                <li className="nav-item">
                  <DropDown />
                  {/* 1-Yönetim,Stratejik Yönetim,Girişimcilik,kobiler,insan kaynakları,Örgüt kültürü ve liderlik,aile işletmeleri,akademik danışmanlık */}
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="/blog">
                    Blog
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/iletisim">
                    İletişim
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBottom);
