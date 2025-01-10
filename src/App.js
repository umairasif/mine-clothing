import "./categories.style.scss";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
  return (
    <div>
      <h1>I am the shop</h1>
    </div>
  );
};
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />      
      </Route>
    </Routes>
  );
};

export default App;
