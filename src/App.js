import AuthProvider from "./Context/AuthProvider";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./components/Home/Home";
import ContactUS from "./components/ContactUS/ContactUS";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import "./App.css";
import AllPackages from "./components/AllPackages/AllPackages";
import PackageDetail from "./components/PackageDetail/PackageDetail";
import AddPackage from "./components/AddPackage/AddPackage";
import Order from "./components/Order/Order";
import ManageAllOrders from "./components/ManageAllOrders/ManageAllOrders";
import MyOrder from "./components/MyOrder/MyOrder";
function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/allPackages">
              <AllPackages></AllPackages>
            </PrivateRoute>
            <PrivateRoute path="/package/:serviceId">
              <PackageDetail></PackageDetail>
            </PrivateRoute>
            <PrivateRoute path="/contact">
              <ContactUS></ContactUS>
            </PrivateRoute>
            <PrivateRoute path="/addPackage">
              <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute path="/order/:serviceId">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/myOrder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>

            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/resetPassword">
              <ResetPassword></ResetPassword>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
