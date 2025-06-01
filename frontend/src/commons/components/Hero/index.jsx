import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";

const Hero = ({ banner }) => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("${banner}")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">Booking Hotel Murah dan Mudah</h1>
          <p className="mb-5">Yuk cari hotel di BoboGo!</p>
          <Link to="/hotel/search">
            <button className="btn btn-primary">Cari Hotel</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
Hero.propTypes = {
  banner: PropTypes.string.isRequired,
};

export default Hero;
