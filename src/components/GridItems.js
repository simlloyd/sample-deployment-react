import { Card, Col, Button } from "react-bootstrap";

const GridItems = (props) => {
  return (
    <>
      <Col md="4">
        <Card>
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              The main theme of the story is about the journey of a team that is
              currently fallen giants, Karasuno, how they would restore
              themselves, get stronger, and compete against other teams in Japan
              to eventually become national championship.
            </Card.Text>

            <Button variant="warning">More Info</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default GridItems;
