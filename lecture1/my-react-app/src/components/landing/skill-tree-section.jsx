import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/**
 * SkillTreeSection 컴포넌트
 * 기술 스택을 트리나 프로그레스바로 시각화할 섹션
 *
 * Props:
 * @param {string} id - 섹션 ID (스크롤 네비게이션용) [Optional, 기본값: 'skill-tree']
 *
 * Example usage:
 * <SkillTreeSection id="skill-tree" />
 */
function SkillTreeSection({ id = 'skill-tree' }) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: 'background.subtle',
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
            Skill Tree
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
            }}
          >
            여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default SkillTreeSection;
