import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import List from './pages/List';
import Single from './pages/Single';
import NewPage from './pages/NewPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<NewPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
