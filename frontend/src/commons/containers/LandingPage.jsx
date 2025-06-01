import { Hero } from "@/commons/components";
import React from "react";

const LandingPage = () => {
  const DUMMY_BANNER =
    "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/test-discovery/2023/02/15/c7e10e29-649b-4a6b-b849-7b19d227e082-1676433891189-4e9bab8a55f485d8a589fb9674f83057.jpg";

  return (
    <div className="landing-page">
      <Hero banner={DUMMY_BANNER} />
    </div>
  );
};

export default LandingPage;
