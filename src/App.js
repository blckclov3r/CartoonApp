import './App.css';
import NavHeader from './components/NavHeader';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import RickMorty from './components/RickMorty/Rick&Morty';
import Footer from './components/Footer';
import Simpson from './components/SImpson/Simpson';
import Cartoon from './components/Futarama/Futarama';
import NotFound from './components/NotFound';

function App() {
  return (
     <HashRouter>
      <div className="App">
          <NavHeader />
          <div className='main'>
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/Futarama" element={<Cartoon />} />
                  <Route path="/Rick&Morty" element={<RickMorty />} />
                  <Route path="/Simpson" element={<Simpson />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </div>
          <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
