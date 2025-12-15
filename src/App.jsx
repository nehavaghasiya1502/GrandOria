// import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Introsection from './Pages/Introsection';
import Resortsection from './Pages/Resortsection';
import Rooms from './Pages/Rooms';
import Amenitiessection from './Pages/Amenitiessection';
import Testimonials from './Pages/Testimonials';
import Eventsection from './Pages/Eventsection';
import Locationsection from './Pages/Locationsection';


function App() {
  return (
    <div className="App">
    <Header></Header>
    <Introsection></Introsection>
    <Resortsection></Resortsection>
    <Rooms></Rooms>
    <Amenitiessection></Amenitiessection>
    <Testimonials></Testimonials>
    <Eventsection></Eventsection>
    <Locationsection></Locationsection>
    <Footer></Footer>               
    </div>
  );
}

export default App;
