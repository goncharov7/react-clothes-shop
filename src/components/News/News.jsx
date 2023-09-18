import React from "react";
import "./News.css";

const News = () => {
  return (
    <section id="news" className="c-wrapper">
      <div className="paddings innerWidth c-container">
      <div className="flexColStart c-left h-bottom">
        <span className="primaryText">Про нашу компанію</span>
      </div>
        {/* <img src="./prologis.png" alt="" />
        <img src="./tower.png" alt="" />
        <img src="./equinix.png" alt="" />
        <img src="./realty.png" alt="" /> */}

        <div className="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/MbY4UJAXGSM?si=vleLvHBym6Br4ltd"
            title="YouTube video"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default News;
