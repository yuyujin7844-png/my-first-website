import { Box, Typography, Card, CardContent, Chip, Stack } from '@mui/material';

function AboutMe() {
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
          About Me
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          About Me 페이지가 개발될 공간입니다. 상세한 자기소개가 들어갈 예정입니다.
        </Typography>
      </Box>

      {/* 소개 섹션 */}
      <Card sx={{ mb: 4 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Introduction
          </Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
            안녕하세요! 저는 웹 개발을 좋아하는 개발자입니다.
            사용자 경험을 중요시하며, 깔끔하고 효율적인 코드를 작성하려고 노력합니다.
            새로운 기술을 배우는 것을 즐기며, 팀과 함께 성장하는 것을 좋아합니다.
          </Typography>
        </CardContent>
      </Card>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 4,
        }}
      >
        {/* 기술 스택 */}
        <Card>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Tech Stack
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              <Chip label="React" color="primary" />
              <Chip label="JavaScript" color="primary" variant="outlined" />
              <Chip label="TypeScript" color="primary" variant="outlined" />
              <Chip label="Node.js" color="primary" variant="outlined" />
              <Chip label="MUI" color="secondary" />
              <Chip label="CSS" color="primary" variant="outlined" />
              <Chip label="HTML" color="primary" variant="outlined" />
              <Chip label="Git" color="primary" variant="outlined" />
            </Stack>
          </CardContent>
        </Card>

        {/* 경력/교육 */}
        <Card
          sx={{
            background: 'linear-gradient(135deg, #F8F878 0%, #F0F0E8 100%)',
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Experience
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  Frontend Developer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ELUO Studio | 2023 - Present
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  Web Developer Intern
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tech Company | 2022 - 2023
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  Computer Science
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  University | 2018 - 2022
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default AboutMe;
