import { Box, Typography, Card, CardContent, Button, Chip, Stack } from '@mui/material';

function Projects() {
  // 샘플 프로젝트 데이터
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: '첫 번째 프로젝트 설명이 들어갈 공간입니다. 프로젝트의 주요 기능과 목적을 설명합니다.',
      tags: ['React', 'MUI', 'API'],
    },
    {
      id: 2,
      title: 'Project 2',
      description: '두 번째 프로젝트 설명이 들어갈 공간입니다. 프로젝트의 주요 기능과 목적을 설명합니다.',
      tags: ['JavaScript', 'Node.js'],
    },
    {
      id: 3,
      title: 'Project 3',
      description: '세 번째 프로젝트 설명이 들어갈 공간입니다. 프로젝트의 주요 기능과 목적을 설명합니다.',
      tags: ['TypeScript', 'React'],
    },
  ];

  return (
    <Box>
      {/* 페이지 타이틀 */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: '1.75rem', md: '2.5rem' },
          }}
        >
          Projects
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Projects 페이지가 개발될 공간입니다. 포트폴리오 작품들이 들어갈 예정입니다.
        </Typography>
      </Box>

      {/* 프로젝트 그리드 */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 3,
        }}
      >
        {projects.map((project) => (
          <Card
            key={project.id}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 24px rgba(30, 30, 150, 0.15)',
              },
            }}
          >
            {/* 프로젝트 썸네일 영역 */}
            <Box
              sx={{
                height: 160,
                background: 'linear-gradient(135deg, #F0F424 0%, #F8F878 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: 'primary.main', fontWeight: 700 }}
              >
                {project.title}
              </Typography>
            </Box>

            <CardContent sx={{ flexGrow: 1, p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {project.title}
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                {project.description}
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
                {project.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Stack>
            </CardContent>

            <Box sx={{ p: 2, pt: 0 }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
              >
                View Project
              </Button>
            </Box>
          </Card>
        ))}
      </Box>

      {/* 추가 프로젝트 안내 */}
      <Card
        sx={{
          mt: 4,
          background: 'linear-gradient(135deg, #E8E8E0 0%, #F0F0E8 100%)',
          textAlign: 'center',
        }}
      >
        <CardContent sx={{ py: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            More Projects Coming Soon
          </Typography>
          <Typography color="text.secondary">
            더 많은 프로젝트가 추가될 예정입니다.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Projects;
