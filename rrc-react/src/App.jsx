import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import StaticPage from './components/StaticPage';
import { manifest, pages } from './pageConfig';

function App() {
  return (
    <Routes>
      {pages.map((page) => (
        <Route
          key={page.path}
          path={page.path}
          element={<StaticPage {...page} manifest={manifest} />}
        />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
