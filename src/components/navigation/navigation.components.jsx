import "./navigation.styles.scss";
import LogoS from "../../assets/img/android-chrome-192x192.png";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";

export default function Navigation() {
  return (
    <>
      <AppBar position="sticky">
        <Container className="nav-container">
          <div className="nav-links">
            <a href="https://www.papyrus.de/">
              <img className="nav-logo" src={LogoS} />
            </a>
            <a href="#intro" className="nav-link">
              Introduction
            </a>
            <a href="#new" className="nav-link">
              What's New
            </a>
            <a href="#how" className="nav-link">
              How it works
            </a>
          </div>
        </Container>
      </AppBar>
    </>
  );
}
