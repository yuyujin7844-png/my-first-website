/**
 * GuestbookList 컴포넌트
 *
 * Props:
 * @param {Array} entries - 방명록 항목 배열 [Required]
 * @param {boolean} isLoading - 로딩 상태 [Optional, 기본값: false]
 *
 * Example usage:
 * <GuestbookList entries={guestbookEntries} isLoading={false} />
 */
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';
import PersonIcon from '@mui/icons-material/Person';

function GuestbookList({ entries = [], isLoading = false }) {
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {[1, 2, 3].map(i => (
          <Card key={i} sx={{ borderRadius: 2 }}>
            <CardContent sx={{ display: 'flex', gap: 2 }}>
              <Skeleton variant="circular" width={40} height={40} />
              <Box sx={{ flex: 1 }}>
                <Skeleton variant="text" width="30%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="60%" />
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    );
  }

  if (entries.length === 0) {
    return (
      <Card
        sx={{
          borderRadius: 2,
          textAlign: 'center',
          py: 4,
          backgroundColor: 'rgba(255, 155, 80, 0.05)',
        }}
      >
        <Typography sx={{ color: 'text.secondary' }}>
          아직 방명록이 없습니다. 첫 번째 메시지를 남겨주세요!
        </Typography>
      </Card>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography
        variant="h3"
        sx={{
          color: 'primary.main',
          fontSize: { xs: '1.25rem', md: '1.5rem' },
          fontWeight: 600,
          mb: 1,
        }}
      >
        Guestbook ({entries.length})
      </Typography>
      {entries.map((entry) => (
        <Card
          key={entry.id}
          sx={{
            borderRadius: 2,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(255, 155, 80, 0.15)',
            },
          }}
        >
          <CardContent sx={{ p: { xs: 2, md: 2.5 } }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'primary.light',
                }}
              >
                <PersonIcon />
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 0.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                      fontSize: { xs: '0.875rem', md: '1rem' },
                    }}
                  >
                    {entry.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      color: 'text.secondary',
                    }}
                  >
                    {formatDate(entry.created_at)}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: 'text.primary',
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    lineHeight: 1.6,
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {entry.message}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default GuestbookList;
