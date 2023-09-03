import './App.css';
import { MainMenu } from './components/MainMenu';
import { Footer } from './components/Footer';
import { HowToContainer } from './components/HowToContainer';
import { CalculatorContainer } from './components/CalculatorContainer';

function App() {

  return (
    <div>
      <MainMenu />
      <CalculatorContainer />
      <HowToContainer/> 
      <Footer />
    </div>
  );
}

export default App;
