import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CoffeeIcon from '@mui/icons-material/Coffee';

/**
 * AboutPage 컴포넌트
 *
 * About Me 페이지를 렌더링합니다.
 * 기본 정보 + 콘텐츠 섹션(탭 형태)으로 구성됩니다.
 *
 * Props:
 * - 없음
 *
 * Example usage:
 * <AboutPage />
 */
function AboutPage() {
  const [activeTab, setActiveTab] = useState(0);

  const aboutMeData = {
    basicInfo: {
      name: '김유진',
      experience: '신입',
      photo: 'https://source.unsplash.com/random/400x400/?portrait,person',
    },
    sections: [
      {
        id: 'dev-story',
        title: '나의 개발 스토리',
        content: '단순히 화면을 구현하는 것을 넘어, 제가 만든 서비스가 누군가의 문제를 해결하고 일상에 편리함을 주는 과정에 매료되어 개발을 시작했습니다. 신입의 열정으로 매일 새로운 기술을 익히며 성장하고 있습니다.',
        showInHome: true,
        icon: <CodeIcon />,
      },
      {
        id: 'philosophy',
        title: '개발 철학',
        content: '사용자 경험(UX)과 코드의 가독성 사이의 균형을 추구합니다. 디자인 의도를 완벽하게 구현하는 디테일과, 동료들이 이해하기 쉬운 깔끔한 코드를 작성하는 것을 개발의 최우선 원칙으로 삼고 있습니다.',
        showInHome: true,
        icon: <WorkIcon />,
      },
      {
        id: 'personal',
        title: '개인적인 이야기',
        content: '',
        showInHome: false,
        icon: <FavoriteIcon />,
        personalDetails: [
          {
            label: '취미',
            content: '규칙적인 운동(헬스)과 체중관리를 통해 개발에 필요한 체력과 끈기를 기르고 있습니다.',
            icon: <FitnessCenterIcon />,
          },
          {
            label: '좋아하는 것',
            content: '향기로운 커피 한 잔과 함께 몰입하는 시간을 즐깁니다.',
            icon: <CoffeeIcon />,
          },
        ],
      },
    ],
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const currentSection = aboutMeData.sections[activeTab];

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        bgcolor: 'blue.light',
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="md">
        {/* 기본 정보 카드 */}
        <Card
          sx={{
            bgcolor: 'background.paper',
            p: { xs: 3, md: 4 },
            mb: 4,
          }}
        >
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>
                <Avatar
                  src={aboutMeData.basicInfo.photo}
                  alt={aboutMeData.basicInfo.name}
                  sx={{
                    width: { xs: 150, md: 180 },
                    height: { xs: 150, md: 180 },
                    mx: 'auto',
                    border: '4px solid',
                    borderColor: 'primary.main',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <PersonIcon sx={{ fontSize: 80 }} />
                </Avatar>
              </Grid>
              <Grid size={{ xs: 12, md: 8 }}>
                <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography
                    variant="h1"
                    sx={{
                      color: 'text.primary',
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      mb: 1,
                    }}
                  >
                    {aboutMeData.basicInfo.name}
                  </Typography>
                  <Chip
                    label={aboutMeData.basicInfo.experience}
                    color="secondary"
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      px: 2,
                      py: 0.5,
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      mt: 2,
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      lineHeight: 1.8,
                    }}
                  >
                    안녕하세요! 사용자 중심의 웹 서비스를 만들고 싶은 프론트엔드 개발자입니다.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* 콘텐츠 섹션 탭 */}
        <Card
          sx={{
            bgcolor: 'background.paper',
            p: { xs: 2, md: 4 },
          }}
        >
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="fullWidth"
            sx={{
              mb: 3,
              '& .MuiTab-root': {
                fontSize: { xs: '0.85rem', md: '1rem' },
                fontWeight: 600,
                py: 2,
              },
              '& .Mui-selected': {
                color: 'secondary.main',
              },
              '& .MuiTabs-indicator': {
                bgcolor: 'secondary.main',
                height: 3,
              },
            }}
          >
            {aboutMeData.sections.map((section, index) => (
              <Tab
                key={section.id}
                label={section.title}
                icon={section.icon}
                iconPosition="start"
              />
            ))}
          </Tabs>

          <CardContent sx={{ minHeight: 200 }}>
            {currentSection.id === 'personal' ? (
              <Box>
                {currentSection.personalDetails.map((detail, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                      mb: 3,
                      p: { xs: 2, md: 3 },
                      bgcolor: 'pink.light',
                      borderRadius: 3,
                    }}
                  >
                    <Box
                      sx={{
                        color: 'pink.main',
                        display: 'flex',
                        alignItems: 'center',
                        mt: 0.5,
                      }}
                    >
                      {detail.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h4"
                        sx={{
                          color: 'text.primary',
                          fontSize: { xs: '1.1rem', md: '1.25rem' },
                          mb: 1,
                        }}
                      >
                        {detail.label}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          fontSize: { xs: '0.95rem', md: '1.05rem' },
                          lineHeight: 1.8,
                        }}
                      >
                        {detail.content}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            ) : (
              <Box
                sx={{
                  p: { xs: 2, md: 3 },
                  bgcolor: currentSection.id === 'dev-story' ? 'green.light' : 'yellow.light',
                  borderRadius: 3,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '1rem', md: '1.15rem' },
                    lineHeight: 2,
                    textAlign: 'left',
                  }}
                >
                  {currentSection.content}
                </Typography>
              </Box>
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default AboutPage;
