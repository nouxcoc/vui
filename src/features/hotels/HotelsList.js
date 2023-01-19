import React from "react";

import { useSelector } from "react-redux";
import { selectAllHotels } from "./hotelsSlice";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./HotelsList.scss";

export const HoltelsList = () => {
  const hotels = useSelector(selectAllHotels);

  const renderedHotels = hotels.map((hotel) => (
    <Col key={hotel.id}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{hotel.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
  ));
  return (
    <Container>
      <Row>
        {renderedHotels}
        <Button variant="primary">Primary</Button>{" "}
      </Row>
    </Container>
  );
};
