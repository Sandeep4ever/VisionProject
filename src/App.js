// import './App.css';
import Registration from "./Components/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserData from "./Components/UserData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Registration />} />
        <Route path="/userdata" element={<UserData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
