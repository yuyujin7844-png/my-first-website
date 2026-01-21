import { createTheme } from '@mui/material/styles';

/**
 * 아이들나라 컬러 팔레트 기반 MUI 테마
 *
 * 색상 구성:
 * - Primary: 골드 옐로우 (#FFD400) - 브랜드 메인 컬러
 * - Secondary: 시안 블루 (#00A8CC) - 보조 강조 컬러
 * - 섹션별 컬러: yellow, blue, green, pink
 */

// 커스텀 컬러 팔레트 정의
const colors = {
  // Primary - 골드 옐로우
  primary: {
    main: '#FFD400',
    light: '#FFE34D',
    dark: '#E6A000',
    contrastText: '#333333',
  },
  // Secondary - 시안 블루
  secondary: {
    main: '#00A8CC',
    light: '#4DC4E0',
    dark: '#007A99',
    contrastText: '#FFFFFF',
  },
  // 섹션별 컬러
  section: {
    yellow: {
      background: '#FFF5CC',
      text: '#E6A000',
    },
    blue: {
      background: '#E5F6FB',
      text: '#00A8CC',
    },
    green: {
      background: '#E8F7E0',
      text: '#4CAF50',
    },
    pink: {
      background: '#FFE8EC',
      text: '#FF6B8A',
    },
  },
  // 배경색
  background: {
    default: '#FFFFFF',
    paper: '#FFFFFF',
    subtle: '#F9F9F9',
  },
  // 텍스트 색상
  text: {
    primary: '#333333',
    secondary: '#666666',
    disabled: '#999999',
  },
  // 기타
  border: '#EEEEEE',
  divider: '#EEEEEE',
};

const theme = createTheme({
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
    background: colors.background,
    text: colors.text,
    divider: colors.divider,
    // 성공/에러/경고/정보 색상
    success: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
    },
    error: {
      main: '#FF6B8A',
      light: '#FF9CAD',
      dark: '#E5496A',
    },
    warning: {
      main: '#FFD400',
      light: '#FFE34D',
      dark: '#E6A000',
    },
    info: {
      main: '#00A8CC',
      light: '#4DC4E0',
      dark: '#007A99',
    },
    // 커스텀 섹션 컬러 (MUI 확장)
    yellow: {
      main: colors.section.yellow.text,
      light: colors.section.yellow.background,
      contrastText: '#333333',
    },
    blue: {
      main: colors.section.blue.text,
      light: colors.section.blue.background,
      contrastText: '#FFFFFF',
    },
    green: {
      main: colors.section.green.text,
      light: colors.section.green.background,
      contrastText: '#FFFFFF',
    },
    pink: {
      main: colors.section.pink.text,
      light: colors.section.pink.background,
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Pretendard", "Noto Sans KR", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.35,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.1rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 16,
  },
  components: {
    // 버튼 스타일 커스터마이징
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          padding: '10px 24px',
          fontWeight: 600,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    // 카드 스타일 커스터마이징
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    // Paper 스타일
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
        elevation1: {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
        },
      },
    },
    // 칩 스타일
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 500,
        },
      },
    },
    // 텍스트필드 스타일
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
          },
        },
      },
    },
  },
});

// 섹션 컬러 헬퍼 객체 export
export const sectionColors = colors.section;

export default theme;
