import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import List from './pages/List';
import SinglePage from './pages/SinglePage';
import NewPage from './pages/NewPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { userInputs } from "./formSource";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<SinglePage />} />
            <Route path="new" element={<NewPage inputs={userInputs} title="Add New User" />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<SinglePage />} />
            <Route path="new" element={<NewPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
