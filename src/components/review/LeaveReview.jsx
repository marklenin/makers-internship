import React from "react";
import { Button, Form } from "react-bootstrap";

function LeaveReview() {
  return (
    <div className="LeaveReview">
      <div className="LeaveReview_left">
        <p>Оставить отзыв</p>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={6}
              placeholder="Сообщение"
              style={{ width: "430px" }}
            />
          </Form.Group>
        </Form>
      </div>
      <div className="LeaveReview_right">
        <p>Оценить проект</p>
        <Button>Отправить</Button>
      </div>
    </div>
  );
}

export default LeaveReview;
