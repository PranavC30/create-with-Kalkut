import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KalKutMinimalPortfolio from "./KalKutMinimalPortfolio";
import BlogDetail from "./BlogDetail";
import ProjectDetail from "./ProjectDetail";

function App() {
  return (
    <Router basename="/create-with-Kalkut">
      <Routes>
        <Route path="/" element={<KalKutMinimalPortfolio />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
