import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/fonts.css'
import 'aos/dist/aos.css';
import Home from './pages/Home.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
