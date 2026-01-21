import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

/**
 * AboutMeSection 컴포넌트
 * 간단한 자기소개와 '더 알아보기' 버튼이 들어갈 섹션
 *
 * Props:
 * @param {string} id - 섹션 ID (스크롤 네비게이션용) [Optional, 기본값: 'about-me']
 *
 * Example usage:
 * <AboutMeSection id="about-me" />
 */
function AboutMeSection({ id = 'about-me' }) {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '1.5rem', md: '2rem' },
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 4,
              fontSize: { xs: '1rem', md: '1.1rem' },
            }}
          >
            여기는 About Me 섹션입니다. 간단한 자기소개와 더 알아보기 버튼이 들어갈 예정입니다.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleLearnMore}
            sx={{
              backgroundColor: '#e5f6fb',
              color: '#00A8CC',
              '&:hover': {
                backgroundColor: '#d0eef7',
              },
            }}
          >
            더 알아보기
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default AboutMeSection;
