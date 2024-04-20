import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import About from "./pages/About";
import PromptHome from "./pages/prompt";
import Campaigns from "./pages/Campaigns";
import Email from "./pages/Email";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<PromptHome />} />
      <Route path="/campaigns" element={<Campaigns />} />
      <Route path="/email" element={<Email />} />
    </Routes>
  );
}

export default App;
