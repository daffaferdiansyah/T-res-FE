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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
