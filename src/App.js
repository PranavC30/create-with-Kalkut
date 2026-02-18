import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KalKutMinimalPortfolio from "./KalKutMinimalPortfolio";
import BlogDetail from "./BlogDetail";

function App() {
  return (
    <Router basename="/create-with-Kalkut">
      <Routes>
        <Route path="/" element={<KalKutMinimalPortfolio />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
