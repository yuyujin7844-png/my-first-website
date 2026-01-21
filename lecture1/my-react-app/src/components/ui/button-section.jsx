import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

/**
 * ButtonSection 컴포넌트
 * MUI Button의 다양한 variant와 color 조합을 보여주는 섹션
 *
 * Props:
 * @param {string} title - 섹션 제목 [Optional, 기본값: 'Button 섹션']
 *
 * Example usage:
 * <ButtonSection title="버튼 예시" />
 */
function ButtonSection({ title = 'Button 섹션' }) {
  const handleClick = (variant, color) => {
    alert(`${variant} / ${color} 버튼이 클릭되었습니다!`);
  };

  const variants = ['contained', 'outlined', 'text'];
  const colors = ['primary', 'secondary', 'error'];

  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 4, md: 8 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: { xs: 3, md: 4 },
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 'bold',
          }}
        >
          {title}
        </Typography>

        <Grid container spacing={3}>
          {variants.map((variant) => (
            <Grid key={variant} size={{ xs: 12 }}>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  textTransform: 'capitalize',
                }}
              >
                {variant}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                }}
              >
                {colors.map((color) => (
                  <Button
                    key={`${variant}-${color}`}
                    variant={variant}
                    color={color}
                    onClick={() => handleClick(variant, color)}
                    sx={{
                      minWidth: { xs: '100px', md: '120px' },
                      textTransform: 'capitalize',
                    }}
                  >
                    {color}
                  </Button>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ButtonSection;
