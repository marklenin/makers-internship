import React from "react";
import "./footer.css";
import logo from "../../assets/logo-makers.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="side_padding Footer_inner">
        <div>
          <img src={logo} alt="logo" height={41} style={{ margin: "1vw 0" }} />
          <p>© 2023 Makers All rights reserved</p>
        </div>
        <div>
          <p>Главная</p>
          <p>Курсы</p>
          <p>Бесплатные курсы</p>
        </div>
        <div>
          <p>+996 706 266 966 +996 501 619 690</p>
          <p>Табышалиева 29, Бишкек Кыргызстан</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
