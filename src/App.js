import "./styles/styles.css";
import Header from "./Components/header";
import Draw from "./Components/draw";
import About from "./Components/about";
import Howto from "./Components/howto";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="container">
      <Header />
      <br />
      <br />
      <br />
      <Draw />
      <About />
      <Howto />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
