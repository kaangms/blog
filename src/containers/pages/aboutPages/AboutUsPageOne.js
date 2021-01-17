import React from "react";
import { connect } from "react-redux";
import AboutMeArea from "../../../components/about/AboutMeArea";

export const AboutUsPageOne = (props) => {
  return (
    <div>
      <AboutMeArea />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUsPageOne);
