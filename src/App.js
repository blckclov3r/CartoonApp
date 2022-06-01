import './App.css';
import NavHeader from './components/NavHeader';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Pokemon from './components/Pokemon/Pokemon';
import RickMorty from './components/RickMorty/Rick&Morty';
import Footer from './components/Footer';

function App() {
  return (
     <BrowserRouter>
      <div className="App">
          <NavHeader />
          <div className='main'>
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/Pokemon" element={<Pokemon />} />
                  <Route path="/Rick&Morty" element={<RickMorty />} />
              </Routes>
          </div>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
