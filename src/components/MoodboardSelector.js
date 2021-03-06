import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import { useAuth } from "./../util/auth.js";

function MoodboardSelector(props) {
  const auth = useAuth();

  return (
    <Row className="justify-content-center pt-3">
      <Col xs={12}>
        <Button variant="white" size="md" className="py-2 px-3">
          Add an image
        </Button>
      </Col>

      {props.items.map((item, index) => (
        <Col
          md={12}
          lg={4}
          className="py-1 px-3 align-items-center"
          key={index}
        >
          <Image src={item.image} className="img-fluid"></Image>
          <Form className="pt-4">
            <Form.Group controlId="formEmail">
              <Form.Control
                type="text"
                placeholder="Add a caption..."
              ></Form.Control>
            </Form.Group>
          </Form>
        </Col>
      ))}
    </Row>
  );
}

export default MoodboardSelector;
