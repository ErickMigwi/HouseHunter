import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer/Footer';
import Houses from './components/Houses/Houses';
import Home from './components/home/Home';
import About from './components/about/About';
import Feedback from './components/newsletter/Feedback';
import Gallery from './components/Gallery/Gallery';
import SignUp from './components/SignUp/SignUp.jsx';
import Login from './components/Login/Login';
import AddHouse from './components/AddHouse/AddHouse';
function App() {

  return (
    <div className="App">
      <Router>
      <ToastContainer/>
        <Navbar />
       
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/houses' element={<Houses />} />
          <Route path='/about' element={<About />} />
          <Route path='/Feedback' element={<Feedback />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/house/:id' element={<Gallery />}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path= '/addHouse' element = {<AddHouse/>}/>
        </Routes>        
    </Router>
   {/* <Footer /> */}
    </div>
  );
}

export default App;
