import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

/**
 * HomePage 컴포넌트
 *
 * 포트폴리오 메인 페이지를 렌더링합니다.
 * Hero, About Me, Skill Tree, Projects, Contact 5개 섹션으로 구성됩니다.
 */
function HomePage() {
  return (
    <Box sx={{ width: '100%' }}>
      {/* Hero 섹션 */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          py: { xs: 8, md: 12 },
          minHeight: { xs: '60vh', md: '70vh' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h1"
              sx={{
                color: 'text.primary',
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Hero Section
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.primary',
                fontSize: { xs: '1rem', md: '1.2rem' },
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.8,
              }}
            >
              여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* About Me 섹션 */}
      <Box
        sx={{
          bgcolor: '#E5F6FB',
          py: { xs: 6, md: 10 },
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
                variant="h2"
                sx={{
                  color: 'secondary.main',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  mb: 3,
                }}
              >
                About Me
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  mb: 4,
                  lineHeight: 1.8,
                }}
              >
                여기는 About Me 섹션입니다. 간단한 자기소개와 더 알아보기 버튼이 들어갈 예정입니다.
              </Typography>
              <Button
                component={Link}
                to="/about"
                variant="outlined"
                color="secondary"
                sx={{
                  borderRadius: 24,
                  px: 4,
                  py: 1.5,
                }}
              >
                더 알아보기
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Skill Tree 섹션 */}
      <Box
        sx={{
          bgcolor: '#E8F7E0',
          py: { xs: 6, md: 10 },
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
                variant="h2"
                sx={{
                  color: '#4CAF50',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  mb: 3,
                }}
              >
                Skill Tree
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8,
                }}
              >
                여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Projects 섹션 */}
      <Box
        sx={{
          bgcolor: '#FFF5CC',
          py: { xs: 6, md: 10 },
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
                variant="h2"
                sx={{
                  color: '#E6A000',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  mb: 3,
                }}
              >
                Projects
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  mb: 4,
                  lineHeight: 1.8,
                }}
              >
                여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 더 보기 버튼이 들어갈 예정입니다.
              </Typography>
              <Button
                component={Link}
                to="/projects"
                variant="contained"
                color="primary"
                sx={{
                  px: 4,
                  py: 1.5,
                }}
              >
                더 보기
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Contact 섹션 */}
      <Box
        sx={{
          bgcolor: '#FFE8EC',
          py: { xs: 6, md: 10 },
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
                variant="h2"
                sx={{
                  color: '#FF6B8A',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  mb: 3,
                }}
              >
                Contact
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8,
                }}
              >
                여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;
