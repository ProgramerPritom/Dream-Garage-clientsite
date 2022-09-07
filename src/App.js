
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
import Footer from './Component/Sharer/Footer';
import DetailProduct from './Component/Body/Products/ManageProduct/DetailProduct';
import RequireAuth from './Component/Login/Require/RequireAuth';
import PlaceOrder from './Component/Body/Products/PlaceOrder/PlaceOrder';
import { ToastContainer} from 'react-toastify';
import Dashboard from './Component/Body/Dashboard/Dashboard';
import MyProfileDashboard from './Component/Body/Dashboard/MyProfileDashboard';
import MyOrders from './Component/Body/Dashboard/MyOrders';
import AddReview from './Component/Body/Dashboard/AddReview';
import AddProduct from './Component/Body/Dashboard/AddProduct';
import ManageProducts from './Component/Body/Dashboard/ManageProducts';
import AllUser from './Component/Body/Dashboard/AllUser';
import DashboardCard from './Component/Body/Dashboard/DashboardCard';
import ManageProduct from './Component/Body/Dashboard/ManageProduct';
import RequireAdmin from './Component/Login/Require/RequireAdmin';
import ManageOrders from './Component/Body/Dashboard/ManageOrders';
import Payment from './Component/Body/Dashboard/Payment';
import NotFoundPage from './Component/Sharer/NotFoundPage';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/detailProduct/:id' element={<RequireAuth><DetailProduct></DetailProduct></RequireAuth>}>
        
        </Route>
        
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/myprofile' element={<MyProfile></MyProfile>}></Route>

        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<DashboardCard></DashboardCard>}></Route>
          <Route path='mydashboardprofile' element={<MyProfileDashboard></MyProfileDashboard>}></Route>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='managealloders' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='manageproduct' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          <Route path='manageProduct/:id' element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>}></Route>
          <Route path='users' element={<RequireAdmin><AllUser></AllUser></RequireAdmin>}></Route>
          
        </Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
