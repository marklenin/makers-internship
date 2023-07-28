import React from "react";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import mentorImg from "../../assets/Rectangle 1929mentor.jpg";

function MentorItem() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <div>
        <Slider {...settings}>
          {[
            "Primary",
            "Secondary",
            "Success",
            "Danger",
            "Warning",
            "Info",
            "Light",
            "Dark",
          ].map((variant) => (
            <div>
              <Card
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === "light" ? "dark" : "white"}
                style={{ width: "20rem" }}
                // className="mb-2"
              >
                <Card.Header>
                  <Card.Img variant="top" src={mentorImg} />
                </Card.Header>

                <Card.Body>
                  <Card.Title>{variant} Card Title </Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default MentorItem;
