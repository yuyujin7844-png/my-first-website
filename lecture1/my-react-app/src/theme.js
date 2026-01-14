import { createTheme } from '@mui/material/styles';

// ELUO 웹사이트 컬러 팔레트 기반 MUI 테마
const theme = createTheme({
  palette: {
    primary: {
      main: '#1E1E96',      // 네이비 블루
      light: '#2828B0',
      dark: '#18187A',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#F0F424',      // 차트러스 옐로우
      light: '#F8F878',
      dark: '#D4D820',
      contrastText: '#1E1E96',  // 밝은 배경에 다크 텍스트
    },
    background: {
      default: '#F0F0E8',   // 오프화이트
      paper: '#FFFFFF',
      secondary: '#E8E8E0', // 서브 배경
    },
    text: {
      primary: '#1E1E96',   // 네이비 블루
      secondary: '#18187A',
    },
  },
  typography: {
    fontFamily: '"Pretendard", "Noto Sans KR", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      color: '#1E1E96',
    },
    h2: {
      fontWeight: 700,
      color: '#1E1E96',
    },
    h3: {
      fontWeight: 600,
      color: '#1E1E96',
    },
    h4: {
      fontWeight: 600,
      color: '#1E1E96',
    },
    h5: {
      fontWeight: 500,
      color: '#1E1E96',
    },
    h6: {
      fontWeight: 500,
      color: '#1E1E96',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
        containedSecondary: {
          '&:hover': {
            backgroundColor: '#D4D820',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(30, 30, 150, 0.08)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E1E96',
        },
      },
    },
  },
});

export default theme;
