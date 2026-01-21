/**
 * ContactSection 컴포넌트
 * Home 페이지의 Contact 섹션
 *
 * Props:
 * @param {string} id - 섹션 ID (스크롤 네비게이션용) [Optional, 기본값: 'contact']
 * @param {Array} guestbookEntries - 방명록 항목 배열 [Optional]
 * @param {function} onGuestbookSubmit - 방명록 제출 핸들러 [Optional]
 * @param {boolean} isLoading - 로딩 상태 [Optional, 기본값: false]
 *
 * Example usage:
 * <ContactSection
 *   id="contact"
 *   guestbookEntries={entries}
 *   onGuestbookSubmit={handleSubmit}
 *   isLoading={false}
 * />
 */
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ContactCard from './contact-card.jsx';
import SocialLinks from './social-links.jsx';
import GuestbookForm from './guestbook-form.jsx';
import GuestbookList from './guestbook-list.jsx';

function ContactSection({
  id = 'contact',
  guestbookEntries = [],
  onGuestbookSubmit = () => {},
  isLoading = false
}) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              fontWeight: 600,
              color: 'text.primary',
              mb: 2,
            }}
          >
            Contact
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.125rem' },
              color: 'text.secondary',
              maxWidth: 500,
              mx: 'auto',
            }}
          >
            언제든 연락주세요. 방명록도 남겨주시면 감사하겠습니다!
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <ContactCard
                email="vkhdvhdvhd@email.com"
                phone="010-1234-5678"
                location="울산광역시 동구 전하로35"
              />
              <SocialLinks
                instagram="https://instagram.com/yuyujin"
                github="https://github.com/yuyujin"
                linkedin="https://linkedin.com/in/yuyujin"
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <GuestbookForm onSubmit={onGuestbookSubmit} isLoading={isLoading} />
          </Grid>
        </Grid>

        <Box sx={{ mt: { xs: 4, md: 6 } }}>
          <GuestbookList entries={guestbookEntries} isLoading={isLoading} />
        </Box>
      </Container>
    </Box>
  );
}

export default ContactSection;
