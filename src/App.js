import './App.css';

import Doodle from './components/Doodle';
import TitleTypewriterEffect from './components/TitleTypewriterEffect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleTypewriterEffect />
        <Doodle />
      </header>
    </div>
  );
}

export default App;
