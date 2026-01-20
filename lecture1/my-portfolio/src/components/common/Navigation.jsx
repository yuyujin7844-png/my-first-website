import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

/**
 * Navigation 컴포넌트
 *
 * 상단 네비게이션 바를 렌더링합니다.
 * Home, About Me, Projects 3개의 탭을 포함합니다.
 */
function Navigation() {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Me', path: '/about' },
    { label: 'Projects', path: '/projects' },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0, md: 2 } }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
            }}
          >
            Portfolio
          </Typography>
          <Box sx={{ display: 'flex', gap: { xs: 1, md: 2 } }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  color: location.pathname === item.path
                    ? 'primary.dark'
                    : 'text.secondary',
                  fontWeight: location.pathname === item.path ? 600 : 400,
                  borderBottom: location.pathname === item.path
                    ? '2px solid'
                    : 'none',
                  borderColor: 'primary.main',
                  borderRadius: 0,
                  px: { xs: 1, md: 2 },
                  py: 1,
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  '&:hover': {
                    bgcolor: 'transparent',
                    color: 'primary.dark',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navigation;
