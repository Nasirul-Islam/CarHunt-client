import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivetRoute from "./Pages/Login/PrivetRoute/PrivetRoute";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Products from "./Pages/Home/Products/Products";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>
            <Route path="/allProducts">
              <AllProducts></AllProducts>
            </Route>
            <PrivetRoute path="/dashBoard">
              <DashBoard></DashBoard>
            </PrivetRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
