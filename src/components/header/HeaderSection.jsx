import React from "react";
import "./headerSection.css";
import headerRightImg from "../../assets/Clip path group.png";
import headerLeftImg from "../../assets/main-bc-img.png";

function HeaderSection() {
  return (
    <div className="headerSection">
      <div className="side_padding headerSection-inner">
        <div className="header-left">
          <h1 className="header-left-title">
            Как мы будем <br /> обучать тебя?
          </h1>
          <span className="header-left-text">
            На наших курсах мы хотим предоставить тебе не только теоретические
            знания, но и ценный практический опыт.
          </span>
          <button className="header-left-btn">Записаться</button>
        </div>
        <div className="header-right">
          <img src={headerRightImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
