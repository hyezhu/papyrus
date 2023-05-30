import "./footer.styles.scss";
import LogoL from "../../assets/img/android-chrome-512x512.png";

import Container from "@mui/material/Container";

export default function Footer() {
    const time = new Date();
    const year = time.getFullYear();
    
  return (
    <>
      <Container className="section-footer">
        <footer>
          <div className="footer-content">
            <img className="logo-footer" src={LogoL} alt="Papyrus logo big" />
            <p>
              Landing page to introduce new feature for Papyrus Author 11. Copyright by{" "}
              <span>
                <a href="https://www.linkedin.com/in/dao-huyen-nhu-3497841a/">
                  Nhu Dao
                </a>
              </span>
              , {year}
            </p>
          </div>
        </footer>
      </Container>
    </>
  );
}
