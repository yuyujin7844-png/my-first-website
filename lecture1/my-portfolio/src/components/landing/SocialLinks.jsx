/**
 * SocialLinks 컴포넌트
 *
 * Props:
 * @param {string} instagram - 인스타그램 URL [Optional]
 * @param {string} github - 깃허브 URL [Optional]
 * @param {string} linkedin - 링크드인 URL [Optional]
 *
 * Example usage:
 * <SocialLinks instagram="https://instagram.com/user" github="https://github.com/user" />
 */
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SocialLinks({ instagram, github, linkedin }) {
  const socialItems = [
    { icon: <InstagramIcon />, url: instagram, label: 'Instagram', color: '#E4405F' },
    { icon: <GitHubIcon />, url: github, label: 'GitHub', color: '#333333' },
    { icon: <LinkedInIcon />, url: linkedin, label: 'LinkedIn', color: '#0A66C2' },
  ].filter(item => item.url);

  return (
    <Box sx={{ textAlign: 'center', py: 3 }}>
      <Typography
        sx={{
          mb: 2,
          fontSize: { xs: '0.875rem', md: '1rem' },
          color: 'text.secondary',
        }}
      >
        Follow Me
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        {socialItems.map((item, index) => (
          <IconButton
            key={index}
            component="a"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            sx={{
              width: 48,
              height: 48,
              backgroundColor: 'background.paper',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: item.color,
                color: 'white',
                transform: 'translateY(-4px)',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
              },
            }}
          >
            {item.icon}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
}

export default SocialLinks;
