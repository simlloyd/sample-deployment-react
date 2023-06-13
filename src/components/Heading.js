import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import HeaderImage from "./../images/1.png";
const Heading = () => {
  return (
    <div>
      <Navbar bg="warning" variant="light">
        <Container>
          <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Created By: <a href="#login">Sim Lloyd Separes</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <img src={HeaderImage} className="w-100" alt="" />
    </div>
  );
};

export default Heading;
