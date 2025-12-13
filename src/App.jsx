// import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Introsection from './Pages/Introsection';
import Resortsection from './Pages/Resortsection';


function App() {
  return (
    <div className="App">
    <Header></Header>
    <Introsection></Introsection>
    <Resortsection></Resortsection>
    <Footer></Footer>               
    </div>
  );
}

export default App;
