import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import History from "./History";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import Transfer from "./Transfer";
import Statement from "./Statement";
import Profile from "./Profile";
import ChangePassword from "./ChangePassword";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/statement" element={<Statement />} />
        <Route path="/history" element={<History />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/change-password" element={<ChangePassword />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;