import './App.scss'
import Header from './components/header/header.component'
import Navigation from './components/navigation/navigation.components'
import Cta from './components/cta/cta.component'
import Features from './components/features/features.component'
import Container from '@mui/material/Container'
import Footer from './components/footer/footer.component'

function App() {

  return (
    <>
      <Container>
        <Navigation />
        <Header />
        <Features />
        <Cta />
        <Footer/>
      </Container>
    </>
  );
}

export default App
