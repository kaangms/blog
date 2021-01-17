import React from "react";
import { connect } from "react-redux";
import ContactArea from "../../../components/contactArea/ContactArea";
import ServiceFinancial from "../../../components/serviceContents/ServiceFinancial";
import AboutUsArea from "../../../components/about/AboutUsArea";
// import FormArea from "../../../components/form/FormArea";
import CarouselSlider from "../../../components/heroSlider/CarouselSlider";

export const index = (props) => {
  return (
    <div>
      <CarouselSlider />
      <ContactArea />
      <ServiceFinancial />
      <AboutUsArea />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
