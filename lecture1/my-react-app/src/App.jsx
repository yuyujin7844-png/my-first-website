import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Navigation from './components/common/navigation.jsx';
import HomePage from './pages/home-page.jsx';
import AboutMePage from './pages/about-me-page.jsx';

function App() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'background.default',
      }}
    >
      <Navigation title="My Portfolio" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
      </Routes>
    </Box>
  );
}

export default App;
