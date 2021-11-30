import logo from './logo.svg';
import './App.css';
import MyPage from './components/myPage';
import { BrowserRouter  } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MyPage />
    </BrowserRouter>
  );
}

export default App;
