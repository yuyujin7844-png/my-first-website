import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

/**
 * InputSection 컴포넌트
 * MUI TextField의 다양한 variant를 보여주는 섹션
 *
 * Props:
 * @param {string} title - 섹션 제목 [Optional, 기본값: 'Input 섹션']
 *
 * Example usage:
 * <InputSection title="입력 필드 예시" />
 */
function InputSection({ title = 'Input 섹션' }) {
  const [values, setValues] = useState({
    standard: '',
    outlined: '',
    filled: '',
  });

  const handleChange = (variant) => (event) => {
    setValues((prev) => ({
      ...prev,
      [variant]: event.target.value,
    }));
  };

  const variants = [
    { name: 'standard', label: 'Standard', placeholder: 'Standard 입력' },
    { name: 'outlined', label: 'Outlined', placeholder: 'Outlined 입력' },
    { name: 'filled', label: 'Filled', placeholder: 'Filled 입력' },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 4, md: 8 },
        backgroundColor: 'background.default',
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
            <Grid key={variant.name} size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <TextField
                  variant={variant.name}
                  label={variant.label}
                  placeholder={variant.placeholder}
                  value={values[variant.name]}
                  onChange={handleChange(variant.name)}
                  fullWidth
                />
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 1,
                    backgroundColor: 'grey.100',
                    minHeight: '60px',
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ color: 'text.secondary', display: 'block', mb: 0.5 }}
                  >
                    입력값:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      wordBreak: 'break-all',
                      color: values[variant.name] ? 'text.primary' : 'text.disabled',
                    }}
                  >
                    {values[variant.name] || '아직 입력된 값이 없습니다'}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default InputSection;
