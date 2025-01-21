import React from "react";
import PropTypes from "prop-types";

const Banner = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <img
        className="min-h-full rounded-lg"
        src="https://images.unsplash.com/photo-1625758478019-45950080669a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
