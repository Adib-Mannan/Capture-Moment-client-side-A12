import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
// import Header from './Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AllProducts from './Pages/AllProducts/AllProducts';
import Order from './Pages/OrderManagement/Order/Order';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import ManageAllOrder from './Pages/Dashboard/ManageAllOrder/ManageAllOrder';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/products'>
              <AllProducts></AllProducts>
            </PrivateRoute>
            <PrivateRoute path='/product/:id'>
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path='/myOrders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path='/manageAllOrder'>
              <ManageAllOrder></ManageAllOrder>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
