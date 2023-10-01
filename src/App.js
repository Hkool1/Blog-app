import TopBar from "./components/topbar/topbar";
import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> :<Register />}  />
        <Route path="/login" element={user ? <Home /> :<Login />}  />
        <Route path="/write" element={user ? <Write /> :<Register />}  />
        <Route path="/setting" element={user ? <Setting /> :<Register />}  />
        <Route path="/post/:postID" element={<Single />}  /> 
      </Routes>
    </Router>
  );
}

export default App;
