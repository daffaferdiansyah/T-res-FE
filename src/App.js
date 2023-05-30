import './App.css';
import "./index.css"

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Login from './pages/login';
import Homepage from './pages/homepage';
import Details from './pages/detail';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage  />} />
        <Route path="/details" element={<Details  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
