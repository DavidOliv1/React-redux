import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PaginaPadrao from './components/PaginaPadrao';
import Home from './pages/Home';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/carrinho" element={<Navbar />} />
      </Routes>
    </Router>
  );
}
