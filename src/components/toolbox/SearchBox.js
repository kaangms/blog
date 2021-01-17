import React from "react";
import { connect } from "react-redux";

export const SearchBox = (props) => {
  return (
    <div>
      {" "}
      <div className="sidebar-item search">
        <form id="search_form" name="gs" method="GET" action="#">
          <input
            type="text"
            name="q"
            className="searchText"
            placeholder="type to search..."
            autocomplete="on"
          />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
