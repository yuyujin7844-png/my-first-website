import { Box, Typography, Card, CardContent, TextField, Button, Stack } from '@mui/material';

function Contact() {
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
          Contact
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Contact 페이지가 개발될 공간입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 4,
        }}
      >
        {/* 연락처 정보 */}
        <Card>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Contact Info
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Email
                </Typography>
                <Typography>hello@eluo.dev</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Phone
                </Typography>
                <Typography>010-1234-5678</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Location
                </Typography>
                <Typography>Seoul, South Korea</Typography>
              </Box>
            </Stack>

            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
              SNS
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" size="small">
                GitHub
              </Button>
              <Button variant="outlined" size="small">
                LinkedIn
              </Button>
              <Button variant="outlined" size="small">
                Twitter
              </Button>
            </Stack>
          </CardContent>
        </Card>

        {/* 메시지 폼 */}
        <Card
          sx={{
            background: 'linear-gradient(135deg, #F8F878 0%, #F0F0E8 100%)',
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Send Message
            </Typography>
            <Stack spacing={3}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                sx={{ backgroundColor: 'white' }}
              />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                sx={{ backgroundColor: 'white' }}
              />
              <TextField
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                sx={{ backgroundColor: 'white' }}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
              >
                Send Message
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default Contact;
