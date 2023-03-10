import logo from './logo.svg';
import './App.css';
import {Routes, Route ,Navigation} from 'react-router-dom';
import Main from './pages/main.js';


function App() {
  return (
    <div className="App">
      <header>

      </header>
      <main>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route/>
          <Route/>
        </Routes>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
