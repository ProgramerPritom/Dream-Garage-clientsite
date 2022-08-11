
import './App.css';
import Navbar from './Component/Sharer/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Component/Body/Home/Home';
import Products from './Component/Body/Products/Products';
import Services from './Component/Body/Services/Services';
import Blogs from './Component/Body/Blogs/Blogs';
import About from './Component/Body/About/About';
import MyProfile from './Component/Body/MyProfile/MyProfile';
import Login from './Component/Login/Login/Login';
import SignUp from './Component/Login/SignUp/SignUp';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/myprofile' element={<MyProfile></MyProfile>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
