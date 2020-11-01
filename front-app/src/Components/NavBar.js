import React from "react";
import { Navbar, Nav} from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Todo app</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="/about">О приложении</Nav.Link>
                <Nav.Link href="/features">Особенности</Nav.Link>
                <Nav.Link href="price">Стоимость</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavBar;