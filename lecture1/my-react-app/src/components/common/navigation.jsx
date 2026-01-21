import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

/**
 * Navigation 컴포넌트
 * MUI AppBar와 Toolbar를 사용한 반응형 네비게이션
 *
 * Props:
 * @param {string} title - 로고/사이트 제목 [Optional, 기본값: 'My App']
 *
 * Example usage:
 * <Navigation title="내 사이트" />
 */
function Navigation({ title = 'My App' }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Home', key: 'home', path: '/', sectionId: null },
    { name: 'About Me', key: 'about', path: '/about', sectionId: null },
    { name: 'Projects', key: 'projects', path: '/', sectionId: 'projects' },
  ];

  const handleMenuClick = (item) => {
    if (item.sectionId) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(item.sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(item.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(item.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setDrawerOpen(false);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const mobileMenu = (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
      >
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.key} disablePadding>
              <ListItemButton onClick={() => handleMenuClick(item)}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );

  const desktopMenu = (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {menuItems.map((item) => (
        <Button
          key={item.key}
          color="inherit"
          onClick={() => handleMenuClick(item)}
          sx={{
            fontSize: '1rem',
            px: 2,
          }}
        >
          {item.name}
        </Button>
      ))}
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#fff5cc',
        borderRadius: 0,
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '1.3rem', md: '1.5rem' },
            }}
          >
            {title}
          </Typography>
        </Box>

        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            {mobileMenu}
          </>
        ) : (
          desktopMenu
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
