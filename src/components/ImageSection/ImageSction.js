import React from "react";
import avatar from "../../images/profilepic.jpeg";
const ImageSection = () => {
  return (
    <div className="image-section">
      <div className="image">
        <img src={avatar} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am <span>Muhammad asif</span>
        </h4>
        <p>
          I am Muhammad, Sr frontend developer in react js . 
          Designing, developing, and testing UI for web applications. 
          Build reusable code and libraries
        </p>
        <div className="about-detail">
          <div className="left-text">
            <p>Full Name </p>
            <p>Age </p>
            <p>Nationality</p>
            <p>Language </p>
            <p>Address </p>
            <p>Countries </p>
          </div>

          <div className="right-text">
            <p> : Muhammad Asif</p>
            <p> : 26</p>
            <p> : Pakistani</p>
            <p> : English</p>
            <p> : Basit Jan Muhammad sahja, Knp, RYK</p>
            <p> : Pakistan</p>
          </div>
        </div>
        <div className="btn">
            Download Cv
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
