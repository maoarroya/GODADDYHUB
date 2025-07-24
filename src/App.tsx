import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RepoListPage from './pages/RepoList';
import RepoDetailPage from './pages/RepoDetail/RepoDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RepoListPage />} />
        <Route path="/repo/:name" element={<RepoDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
