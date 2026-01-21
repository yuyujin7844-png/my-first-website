import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/**
 * AboutMePage 컴포넌트
 * About Me 상세 페이지
 *
 * Example usage:
 * <AboutMePage />
 */
function AboutMePage() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        minHeight: 'calc(100vh - 64px)',
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 4,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
            }}
          >
            About Me 페이지가 개발될 공간입니다. 상세한 자기소개가 들어갈 예정입니다.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default AboutMePage;
