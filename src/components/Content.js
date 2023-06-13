import { Container, Row } from "react-bootstrap";
import GridItems from "./GridItems";
import item2 from "./../images/2.png";
import item3 from "./../images/3.png";
import item4 from "./../images/4.png";
import item5 from "./../images/5.png";
const Content = () => {
  return (
    <div className="bg-dark text-warning">
      <br /> <br />
      <Container>
        <h1>Top 5 Anime Of The Week:</h1>
        <br /> <br />
        <Row className="g-3 justify-content-center">
          <GridItems image={item2} title="Haikyu" />
          <GridItems image={item3} title="Eyeshield21" />
          <GridItems image={item4} title="Koroku" />
          <GridItems image={item5} title="Frinds Forever :D" />
        </Row>
      </Container>
      <br /> <br />
      <br /> <br />
    </div>
  );
};

export default Content;
