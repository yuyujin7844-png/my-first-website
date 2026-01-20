import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Navigation from './components/common/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';

/**
 * App 컴포넌트
 *
 * 애플리케이션의 루트 컴포넌트입니다.
 * 라우팅 설정 및 레이아웃을 관리합니다.
 */
function App() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navigation />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
