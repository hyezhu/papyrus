import "./features.styles.scss";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import AssistantIcon from "@mui/icons-material/Assistant";
import EmojiSymbolsIcon from "@mui/icons-material/EmojiSymbols";
import Quiz from "@mui/icons-material/Quiz";

export default function Features() {
  return (
    <>
      <Container id="new" className="section-features">
        <h2 className="heading-secondary">
          What's <span>New?</span>
        </h2>

        <Grid className="cards-container" container spacing={1} gap={6}>
          <Card className="card">
            <EmojiSymbolsIcon className="card-icon" sx={{ fontSize: 80 }} />

            <CardContent>
              <h4>Make writing fun</h4>
              <p>Newly-added plug-ins with emojis, photos and illustrations to add to add to make the world in your writing more vivid </p>
            </CardContent>
          </Card>

          <Card className="card">
            <AssistantIcon className="card-icon" sx={{ fontSize: 80 }} />
            <CardContent>
              <h4>Easy to use</h4>
              <p>Simplified user interface with doodle icons in pastel shades. This theme also comes with kid-friendly slideshow for tutorials </p>
            </CardContent>
          </Card>

          <Card className="card">
            <Quiz
              className="card-icon"
              sx={{ fontSize: 80 }}
            />
            <CardContent>
              <h4>Writing assitance</h4>
              <p>Help creating plot and characters by asking inspring questions as well as suggesting to the next steps of creation </p>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </>
  );
}
