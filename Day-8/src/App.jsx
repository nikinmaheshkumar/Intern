import './App.css'
import Home from './pages/Home'
import Favourites from './pages/Favourites';
import {Routes ,Route} from "react-router-dom"
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <main className='content'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/favourites' element={<Favourites />}/>
        </Routes>
      </main>
      </div>
    </>
  );
}

export default App;
