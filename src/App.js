import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Seccess from './pages/Seccess';
import Error from './pages/Error';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home /> }/>
      <Route path="/seccess" element={<Seccess />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
