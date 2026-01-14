import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// 네비게이션 메뉴 항목
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  // 현재 경로 확인
  const isActive = (path) => location.pathname === path;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* 상단 네비게이션 */}
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* 모바일 햄버거 메뉴 */}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { md: 'none' } }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>

            {/* 로고 */}
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              ELUO
            </Typography>

            {/* 데스크탑 메뉴 */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: 'white',
                    borderBottom: isActive(item.path) ? '2px solid #F0F424' : '2px solid transparent',
                    borderRadius: 0,
                    '&:hover': {
                      backgroundColor: 'rgba(240, 244, 36, 0.1)',
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

      {/* 모바일 Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250, pt: 2 }}>
          <Typography
            variant="h6"
            sx={{ px: 2, pb: 2, fontWeight: 700, color: 'primary.main' }}
          >
            ELUO
          </Typography>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    backgroundColor: isActive(item.path) ? 'secondary.light' : 'transparent',
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    sx={{ color: 'primary.main' }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* 메인 콘텐츠 */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: 'background.default',
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>

      {/* 푸터 */}
      <Box
        component="footer"
        sx={{
          py: 3,
          backgroundColor: '#E8E8E0',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          2025 ELUO. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Layout;
