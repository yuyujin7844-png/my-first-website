import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/**
 * HeroSection 컴포넌트
 * 메인 비주얼, 이름, 간단 소개가 들어갈 Hero 섹션
 *
 * Props:
 * @param {string} id - 섹션 ID (스크롤 네비게이션용) [Optional, 기본값: 'hero']
 *
 * Example usage:
 * <HeroSection id="hero" />
 */
function HeroSection({ id = 'hero' }) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#fff5cc',
        color: 'primary.contrastText',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Hero Section
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              opacity: 0.9,
            }}
          >
            여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default HeroSection;
