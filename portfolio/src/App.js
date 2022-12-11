import './App.css';
import Triangle from "./assets/Triangle.png"
import Header from './containers/Header/Header';

function App() {
  return (
    <div className="App">
      <img id='triangle-top' src={Triangle} alt='triangle'/>
      <Header/>
      <img id='triangle-bot' src={Triangle} alt='triangle'/>
    </div>
  );
}

export default App;
