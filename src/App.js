import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './components/Blogs/Blogs';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import Notfound from './components/Notfound/Notfound';

function App() {
  return (
    <div className="App">
      <Header ></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<Notfound></Notfound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
