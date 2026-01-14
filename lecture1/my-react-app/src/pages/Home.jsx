import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box>
      {/* 히어로 섹션 */}
      <Card
        sx={{
          background: 'linear-gradient(135deg, #F0F424 0%, #F8F878 50%, #F0F0E8 100%)',
          mb: 4,
          p: { xs: 3, md: 6 },
          textAlign: 'center',
        }}
      >
        <CardContent>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Welcome to ELUO
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Home 페이지가 개발될 공간입니다. 메인 소개, 주요 링크가 들어갈 예정입니다.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/about"
              size="large"
            >
              About Me
            </Button>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to="/projects"
              size="large"
            >
              View Projects
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* 섹션 카드들 */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 3,
        }}
      >
        <Card sx={{ height: '100%' }}>
          <CardContent sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              About Me
            </Typography>
            <Typography color="text.secondary">
              저에 대한 소개와 경력, 기술 스택을 확인하세요.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ height: '100%' }}>
          <CardContent sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Projects
            </Typography>
            <Typography color="text.secondary">
              진행한 프로젝트와 포트폴리오를 확인하세요.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ height: '100%' }}>
          <CardContent sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Contact
            </Typography>
            <Typography color="text.secondary">
              연락처와 SNS 정보를 확인하세요.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default Home;
