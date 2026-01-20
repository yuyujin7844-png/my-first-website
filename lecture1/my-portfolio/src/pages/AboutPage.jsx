import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

/**
 * AboutPage 컴포넌트
 *
 * About Me 페이지를 렌더링합니다.
 * 상세한 자기소개가 들어갈 공간입니다.
 */
function AboutPage() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        bgcolor: '#E5F6FB',
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="md">
        <Card
          sx={{
            bgcolor: 'background.paper',
            p: { xs: 3, md: 5 },
          }}
        >
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography
              variant="h1"
              sx={{
                color: 'secondary.main',
                fontSize: { xs: '2rem', md: '2.5rem' },
                mb: 4,
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.2rem' },
                lineHeight: 1.8,
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              About Me 페이지가 개발될 공간입니다. 상세한 자기소개가 들어갈 예정입니다.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default AboutPage;
