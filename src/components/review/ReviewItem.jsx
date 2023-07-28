import React from "react";
import { Card } from "react-bootstrap";
import Slider from "react-slick";

function ReviewItem() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div>
      <div>
        <Slider {...settings}>
          {["Primary", "Secondary", "Success", "Info", "Light"].map(
            (variant) => (
              <div>
                <Card
                  bg={variant.toLowerCase()}
                  key={variant}
                  text={variant.toLowerCase() === "light" ? "dark" : "white"}
                  style={{ width: "20rem", fontSize: "14px" }}
                  // className="mb-2"
                >
                  <Card.Header>Айпери Дастанова</Card.Header>

                  <Card.Body>
                    <Card.Title style={{ fontSize: "14px" }}>
                      {variant} Отучилась на курс Питон Бэкенд. Благодарю
                      Мэйкерс на такую возможность. Отличный проект для
                      школьников. Всем советую!{" "}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            )
          )}
        </Slider>
      </div>
    </div>
  );
}

export default ReviewItem;
