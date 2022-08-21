import "./App.css";
import SocialMedia from "./components/FifthSlide/SocialMedia";
import Card from "./components/FirstSlide/Card";
import Slot from "./components/FourthSlide/Slot";
import Particle from "./components/Particles";
import Board from "./components/SecondSlide/Board";
import HighLight from "./components/ThirdSlide/HighLight";

function App() {
  return (
    <div className="App">
      <Card />
      <Board />
      <HighLight />
      <Slot />
      <SocialMedia />
      <Particle />
    </div>
  );
}

export default App;
