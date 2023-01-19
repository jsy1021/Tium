import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import Join from './pages/Join';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/"  element={<MainPage/>} />
          <Route exact path="/join" element={<Join/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;