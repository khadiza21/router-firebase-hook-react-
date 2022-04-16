import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
function App() {
  return (
    <div className="App">
     <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          Home
        </Route>
        <Route path="/products" element={<Products></Products>}>
          Home
        </Route>
        <Route path="/login" element={<Login></Login>}>
          LogIn
        </Route>
        <Route path="/register" element={<Register></Register>}>
          LogIn
        </Route>
      </Routes>
    </div>
  );
}

export default App;
