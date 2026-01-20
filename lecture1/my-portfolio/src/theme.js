import { createTheme } from '@mui/material/styles';

/**
 * 포트폴리오 테마 설정
 * 컬러 팔레트: 아이들나라 기반 골드 옐로우 + 시안 블루
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD400',
      light: '#FFE34D',
      dark: '#E6A000',
      contrastText: '#333333',
    },
    secondary: {
      main: '#00A8CC',
      light: '#4DC4E0',
      dark: '#007A99',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#4CAF50',
      light: '#81C784',
    },
    error: {
      main: '#FF6B8A',
      light: '#FF9CAD',
    },
    warning: {
      main: '#FFD400',
      light: '#FFE34D',
    },
    info: {
      main: '#00A8CC',
      light: '#4DC4E0',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F9F9F9',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
      disabled: '#999999',
    },
    divider: '#EEEEEE',
    yellow: {
      main: '#E6A000',
      light: '#FFF5CC',
    },
    blue: {
      main: '#00A8CC',
      light: '#E5F6FB',
    },
    green: {
      main: '#4CAF50',
      light: '#E8F7E0',
    },
    pink: {
      main: '#FF6B8A',
      light: '#FFE8EC',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#333333',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#333333',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#333333',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#333333',
    },
    body1: {
      fontSize: '1rem',
      color: '#666666',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#666666',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 28px',
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#FFBF00',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
  },
  spacing: 8,
});

export default theme;
