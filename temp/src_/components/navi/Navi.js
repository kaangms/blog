import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import CartNavi from "../cart/CartNavi";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          {" "}
          <Link to="/">Nortwind</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/saveproduct">ProductAdd</Link>
              </NavLink>
            </NavItem>
          </Nav>
          <Nav navbar>
            <CartNavi />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
