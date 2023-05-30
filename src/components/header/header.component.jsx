import "./header.styles.scss";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import HeaderImg from "../../assets/img/UI-screenshot.png";
import Avatar from "@mui/material/Avatar";
import Logo from "../../assets/img/logo-kinder.png";

export default function Header() {
  return (
    <Container id="intro" className="section-intro">
      <Avatar
        className="kinder-logo"
        src={Logo}
        sx={{ width: 56, height: 56 }}
        alt="Author kinder logo"
      />
      <div className="header-container">
        <h1 className="heading-primary">
          New Season, New <span>Theme</span>
        </h1>

        <p className="subheading-primary">
          Introducing <span>"Papyrus Author Kid"</span>
        </p>
      </div>

      <Grid className="grid-2" container spacing={2}>
        <Grid item xs={10}>
          <img
            className="img-intro"
            alt="application picture"
            src={HeaderImg}
          />
        </Grid>
        <Grid className="text-box" item xs={10}>
          <Box>
            <p>
              A captivating new kid theme that attracts young writers to inspire
              their creativity and storytelling skills.
              <br />
              "Papyrus Author Kid" encourages children to embark on literary
              journeys where their imagination run wild, fostering a love for
              writing in a fun environment.
            </p>
          </Box>
        </Grid>
      </Grid>
      <div className="btn btn-container">
        <button className="btn-order">Order Papyrus Author</button>
      </div>
    </Container>
  );
}
