// import './App.css';
import Registration from "./Components/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserData from "./Components/UserData";
import { GlobalState } from "./Components/Contex/GlobalContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalState>
        <Routes>
          <Route path="/" exact element={<Registration />} />
          <Route path="/home/:id" exact element={<Registration />} />
          <Route path="/userdata" element={<UserData />} />
        </Routes>
      </GlobalState>
    </BrowserRouter>
  );
}

export default App;
