import React, { useState } from "react";
import heart from "../../assets/img/heart.png";
import Router from "next/router";
import { setBusinessName } from "../../redux/slogan/slogan.slice";
import { useSelector, useDispatch } from "react-redux";

const HeroSection = () => {
  const [name, setName] = useState();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setBusinessName(name));
    Router.push(`/slogan?businessname=${name}`);
  };
  return (
    <div
      class="revolution-slider-area slider-bg-1 slider-bg-2 rslide home-banner-s pb--60 home-margin"
      // style={{ backgroundImage: url(../assets/img/banner.png) }}
      // style={{ backgroundImage: `url${"../../assets/img/banner.png"}` }}
      // style={{
      //   backgroundColor: "#fe882b",
      // padding: "0 0 0 85px",
      // margin: 0,
      // backgroundImage: "url(banner)",
      // backgroundPosition: "center",
      // backgroundSize: "cover",
      // backgroundRepeat: "no-repeat",
      // height: "100vh",
      // }}
      data-background="#fe882b"
    >
      <div class="revolution-slider">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="inner pt--190 pb--230 text-center">
                <h1 class="heading heading-h1 text-white font-120 textgrad">
                  Let's Bring Your Ideas <br /> To Reality.
                  <img src={heart.src} class="heart-img" />
                </h1>
                <div class="bkseparator--15"></div>
                <div class="black-bg-banner-2">
                  {/* <!-- <h2
                                class="heading heading-h6 text-white letter-spacing-1 line-height-1-5 typewriter">
                                Insanely professional logo maker services poured <br>with passion and
                                proficiency</h2> --> */}
                  <div class="slider-btn">
                    {/* <!-- <form id="brief-form" action="https://www.logura.com/brief/slogan" --> */}
                    <form id="brief-form" onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="cname"
                        placeholder="Enter Your Business Name"
                        class="banner-input-field"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        autofocus
                      />
                      <button
                        class="banner-input-submit"
                        type="submit"
                        style={{ backgroundColor: "#fea300" }}
                      >
                        Start Now
                      </button>
                      {/* <!-- <input
                                        type="submit" value="Start Now" class="banner-input-submit"> --> */}
                    </form>
                  </div>
                  {/* <!--<p class="text-white">Form - Your logo query - <a href="#">Talk to us</a></p>--> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <div class="basic-modern-dots white-dots" id="banner-dots-link">
          <div class="dot first-circle"></div>
          <div class="dot second-circle"></div>
          <div class="dot third-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
