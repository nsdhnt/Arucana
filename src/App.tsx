import { Routes, Route } from 'react-router-dom';import './App.css'
import Index from './pages/index.tsx';
import Article from './pages/article.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/article" element={<Article />} />
    </Routes>
  )
}

export default App
