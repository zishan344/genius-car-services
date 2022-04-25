import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import About from "./Pages/About/About";
import AddService from "./Pages/AddService/AddService";
import Checkout from "./Pages/Home/Checkout/Checkout";
import Home from "./Pages/Home/Home/Home";
import RequarAuth from "./Pages/Home/RequarAuth/RequarAuth";
import ServiceDetils from "./Pages/Home/ServiceDetils/ServiceDetils";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import ManageUser from "./Pages/ManageUser/ManageUser";
import NotFound from "./Pages/NotFound/NotFound";
import Order from "./Pages/Order/Order";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDetils></ServiceDetils>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/checkout/:serviceId"
          element={
            <RequarAuth>
              <Checkout></Checkout>
            </RequarAuth>
          }
        ></Route>
        <Route
          path="/addService"
          element={
            <RequarAuth>
              <AddService></AddService>
            </RequarAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequarAuth>
              <ManageUser></ManageUser>
            </RequarAuth>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <RequarAuth>
              <Order></Order>
            </RequarAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
