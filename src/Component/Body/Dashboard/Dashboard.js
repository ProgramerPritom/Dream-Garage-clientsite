import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    {/* <!-- Page content here --> */}
    <h2 className="text-center text-3xl my-3 text-yellow-700 font-semibold">Welcome to your Dashboard!</h2>
    <Outlet></Outlet>
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Menu</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard/mydashboardprofile'>My Profile</Link></li>
      <li><Link to='/dashboard/myorders'>My Orders</Link></li>
      <li><Link to='/dashboard/addreview'>Add Review</Link></li>
      <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
      <li><Link to='/dashboard/manageproduct'>Manage Products</Link></li>
      <li><Link to='/dashboard/users'>All User</Link></li>

    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;