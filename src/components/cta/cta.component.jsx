import "./cta.styles.scss";
import Container from "@mui/material/Container";
import CtaImg from "../../assets/img/demo-pic2.png";
import Grid from "@mui/material/Grid";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";


export default function Cta() {
    return (
      <>
        <Container id="how" className="section-cta">
          <h2 className="heading-secondary">How it works</h2>

          <Grid className="cta-container" container spacing={2}>
            <Grid className="cta-img-container" item xs={7}>
              <img className="cta-img" src={CtaImg} alt="how it works pic" />
            </Grid>

            <Grid className="cta-text-box" item xs={8}>
              <ul className="cta-text">
                <li>
                  <AddShoppingCartOutlinedIcon
                    className="list-icon"
                    fontSize="large"
                  />
                  Papyrus Author Kid theme is an in-app purchase inside of our
                  main application Papyrus Athor 11
                </li>
                <li>
                  <HistoryEduOutlinedIcon
                    className="list-icon"
                    fontSize="large"
                  />
                  The co-author mode allows you to create amazing stories with
                  your children
                </li>
                <li>
                  <CircleNotificationsOutlinedIcon
                    className="list-icon"
                    fontSize="large"
                  />
                  You can turn on parental supervision and get alerts if any
                  content is inapropriate
                </li>
                <li>
                  <a href="https://www.papyrus.de/">
                    <span>
                      <ContactSupportOutlinedIcon
                        className="list-icon"
                        fontSize="large"
                      />
                      Feel free to contact us for further information
                    </span>{" "}
                  </a>
                </li>
              </ul>
              <div className="btn btn-container">
                <button className="btn-order">Order Now</button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </>
    );
}