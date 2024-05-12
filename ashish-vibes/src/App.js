
import './App.css';
import Home from './Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      {/* <Home></Home> */}
      <About/>
      <Footer/>
    </>
  );
}

export default App;
