import Header from "./Header";
import AutoPlayvideo from "./AutoPlayvideo";
import React from "react";

function HeaderVideo() {
  return (
    <section className="relative">
      <div className="absolute w-full z-10">
        <Header />
      </div>

      <div>
        <AutoPlayvideo />
      </div>
    </section>
  );
}

export default HeaderVideo;