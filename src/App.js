import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Seccess from './pages/Seccess';
import Error from './pages/Error';
import Home1 from './pages/Home1';
function App() {
  return (
    <BrowserRouter basename="/FoodieApp">
    <Routes>
      <Route path="/" element={<Home /> }/>
      <Route path="/seccess" element={<Seccess />} />
      <Route path="*" element={<Error />} />
      <Route path="/home1" element={<Home1 />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
