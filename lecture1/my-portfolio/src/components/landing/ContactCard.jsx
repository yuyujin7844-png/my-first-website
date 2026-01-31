/**
 * ContactCard 컴포넌트
 *
 * Props:
 * @param {string} email - 이메일 주소 [Required]
 * @param {string} phone - 전화번호 [Optional]
 * @param {string} location - 위치 정보 [Optional]
 *
 * Example usage:
 * <ContactCard email="example@email.com" phone="010-1234-5678" />
 */
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function ContactCard({ email, phone, location }) {
  const contactItems = [
    { icon: <EmailIcon />, label: 'Email', value: email },
    { icon: <PhoneIcon />, label: 'Phone', value: phone },
    { icon: <LocationOnIcon />, label: 'Location', value: location },
  ].filter(item => item.value);

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
        backgroundColor: 'rgba(255, 245, 204, 0.5)',
      }}
    >
      <CardContent sx={{ p: { xs: 2, md: 3 } }}>
        <Typography
          variant="h3"
          sx={{
            mb: 3,
            color: '#E6A000',
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            fontWeight: 600,
          }}
        >
          Contact Info
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {contactItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  backgroundColor: '#fff5cc',
                  color: '#E6A000',
                }}
              >
                {item.icon}
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: '0.75rem',
                    color: 'text.secondary',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                  }}
                >
                  {item.label}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    color: 'text.primary',
                    fontWeight: 500,
                  }}
                >
                  {item.value}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default ContactCard;
