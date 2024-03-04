import logo from './logo.svg';
import './App.css';
import Header from './header';
import CentralPart from './centralPart';
import LeftNav from'./leftNavigation';

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <LeftNav/>
        <CentralPart/>
      </div>
    </div>
  );
}

export default App;
