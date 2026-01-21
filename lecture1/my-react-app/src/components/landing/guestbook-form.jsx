/**
 * GuestbookForm 컴포넌트
 *
 * Props:
 * @param {function} onSubmit - 폼 제출 시 호출되는 함수 [Required]
 * @param {boolean} isLoading - 로딩 상태 [Optional, 기본값: false]
 *
 * Example usage:
 * <GuestbookForm onSubmit={handleSubmit} isLoading={false} />
 */
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SendIcon from '@mui/icons-material/Send';

const ageRanges = [
  { value: '', label: '선택 안함' },
  { value: '10대', label: '10대' },
  { value: '20대', label: '20대' },
  { value: '30대', label: '30대' },
  { value: '40대', label: '40대' },
  { value: '50대 이상', label: '50대 이상' },
];

const referralSources = [
  { value: '', label: '선택 안함' },
  { value: '검색', label: '검색 (구글, 네이버 등)' },
  { value: 'SNS', label: 'SNS (인스타, 트위터 등)' },
  { value: '지인 소개', label: '지인 소개' },
  { value: '기타', label: '기타' },
];

function GuestbookForm({ onSubmit, isLoading = false }) {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    email: '',
    phone: '',
    sns: '',
    ageRange: '',
    referralSource: '',
  });
  const [showOptional, setShowOptional] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      message: '',
      email: '',
      phone: '',
      sns: '',
      ageRange: '',
      referralSource: '',
    });
    setShowOptional(false);
  };

  const isValid = formData.name.trim() && formData.message.trim();

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
            color: '#ffe34d',
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            fontWeight: 600,
          }}
        >
          Leave a Message
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            required
            name="name"
            label="이름"
            value={formData.name}
            onChange={handleChange}
            sx={{ mb: 2 }}
            size="small"
          />
          <TextField
            fullWidth
            required
            multiline
            rows={3}
            name="message"
            label="메시지"
            value={formData.message}
            onChange={handleChange}
            sx={{ mb: 2 }}
            size="small"
          />

          <Button
            onClick={() => setShowOptional(!showOptional)}
            endIcon={showOptional ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            sx={{
              mb: 2,
              color: 'text.secondary',
              textTransform: 'none',
            }}
          >
            추가 정보 (선택사항)
          </Button>

          <Collapse in={showOptional}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2 }}>
              <TextField
                fullWidth
                name="email"
                label="이메일 (비공개)"
                type="email"
                value={formData.email}
                onChange={handleChange}
                size="small"
                helperText="비공개로 저장됩니다"
              />
              <TextField
                fullWidth
                name="phone"
                label="전화번호"
                value={formData.phone}
                onChange={handleChange}
                size="small"
              />
              <TextField
                fullWidth
                name="sns"
                label="SNS 계정"
                value={formData.sns}
                onChange={handleChange}
                size="small"
                placeholder="@username"
              />
              <TextField
                fullWidth
                select
                name="ageRange"
                label="나이대"
                value={formData.ageRange}
                onChange={handleChange}
                size="small"
              >
                {ageRanges.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                select
                name="referralSource"
                label="어떻게 알게 되셨나요?"
                value={formData.referralSource}
                onChange={handleChange}
                size="small"
              >
                {referralSources.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Collapse>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={!isValid || isLoading}
            endIcon={<SendIcon />}
            sx={{
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              backgroundColor: '#fff5cc',
              color: '#E6A000',
              '&:hover': {
                backgroundColor: '#ffe999',
              },
            }}
          >
            {isLoading ? '전송 중...' : '메시지 남기기'}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default GuestbookForm;
