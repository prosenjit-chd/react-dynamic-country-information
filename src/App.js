// import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar> </Navbar>
      <Countries> </Countries>
      <Footer></Footer>
    </div>
  );
}

export default App;
