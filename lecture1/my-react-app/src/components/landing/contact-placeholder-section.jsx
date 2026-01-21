import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/**
 * ContactPlaceholderSection 컴포넌트
 * 연락처, SNS, 간단한 메시지 폼이 들어갈 Contact 섹션 placeholder
 *
 * Props:
 * @param {string} id - 섹션 ID (스크롤 네비게이션용) [Optional, 기본값: 'contact']
 *
 * Example usage:
 * <ContactPlaceholderSection id="contact" />
 */
function ContactPlaceholderSection({ id = 'contact' }) {
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
            Contact
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
            }}
          >
            여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactPlaceholderSection;
