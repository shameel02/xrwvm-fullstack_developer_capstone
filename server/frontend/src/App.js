import LoginPanel from "./components/Login/Login"
import { Routes, Route } from "react-router-dom";
import register_container from "./components/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/regist" element={<register_container />} />
    </Routes>
  );
}
export default App;
