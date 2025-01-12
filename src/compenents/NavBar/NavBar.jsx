import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import AccountMenu from "./AccountMenu/AccountMenu";
import ExtraMenu from "./ExtraMenu/ExtraMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faGlobe,faCode , faTerminal} from "@fortawesome/free-solid-svg-icons";
import { ClickAwayListener } from "@mui/material";
import "./style.css";

const NavBar = () => {
  const [expand, setExpand] = useState(false);

  const handleNavBarClickAway = () => setExpand(false);

  return (
    <ClickAwayListener onClickAway={handleNavBarClickAway}>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className="navbar navfontfamily"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/" className="nav_ac">
              <FontAwesomeIcon icon={faGem} />
              <span style={{ margin: "0 0.5rem" }}>Online Judge</span>
              <FontAwesomeIcon icon={faGlobe} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpand((prevExpand) => !prevExpand)}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="/questions"
                onClick={() => setExpand(false)}
                className="myNavLink"
              >
                Practice
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/leaderboard"
                onClick={() => setExpand(false)}
                className="myNavLink"
              >
                Leaderboard
              </Nav.Link>
              <AccountMenu setExpand={setExpand} />
              <ExtraMenu setExpand={setExpand} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </ClickAwayListener>
  );
};

export default NavBar;
