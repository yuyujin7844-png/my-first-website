import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

/**
 * ProjectCard 컴포넌트
 * 프로젝트 정보를 카드 형태로 표시하는 컴포넌트
 *
 * Props:
 * @param {string} title - 프로젝트 제목 [Required]
 * @param {string} description - 프로젝트 설명 [Required]
 * @param {string[]} techStack - 기술 스택 배열 [Optional, 기본값: []]
 * @param {string} detailUrl - 배포된 사이트 URL [Optional]
 * @param {string} githubUrl - GitHub 저장소 URL [Optional]
 * @param {string} createdAt - 생성일시 [Optional]
 *
 * Example usage:
 * <ProjectCard
 *   title="프로젝트명"
 *   description="프로젝트 설명"
 *   techStack={['React', 'Supabase']}
 *   detailUrl="https://example.com"
 *   githubUrl="https://github.com/user/repo"
 * />
 */
function ProjectCard({
  title,
  description,
  techStack = [],
  detailUrl,
  githubUrl,
  createdAt,
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // image.thum.io를 사용하여 썸네일 URL 생성
  const thumbnailUrl = detailUrl
    ? `https://image.thum.io/get/width/600/crop/400/${detailUrl}`
    : null;

  // 날짜 포맷팅
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
    });
  };

  // 기술 스택별 색상 매핑
  const getTechColor = (tech) => {
    const colorMap = {
      'React': '#61DAFB',
      'Supabase': '#3ECF8E',
      'PostgreSQL': '#336791',
      'CSS3': '#1572B6',
      'MUI': '#007FFF',
      'Unsplash API': '#000000',
      'JavaScript': '#F7DF1E',
      'TypeScript': '#3178C6',
      'Node.js': '#339933',
    };
    return colorMap[tech] || '#666666';
  };

  const handleViewDetails = () => {
    if (detailUrl) {
      window.open(detailUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleGitHub = () => {
    if (githubUrl) {
      window.open(githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 28px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      {/* 썸네일 이미지 */}
      <Box sx={{ position: 'relative', paddingTop: '66.67%', overflow: 'hidden' }}>
        {!imageLoaded && !imageError && (
          <Skeleton
            variant="rectangular"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
        )}
        {thumbnailUrl && !imageError && (
          <CardMedia
            component="img"
            image={thumbnailUrl}
            alt={`${title} 썸네일`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: imageLoaded ? 'block' : 'none',
            }}
          />
        )}
        {(imageError || !thumbnailUrl) && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'grey.200',
            }}
          >
            <Typography variant="body2" color="text.secondary">
              이미지 없음
            </Typography>
          </Box>
        )}
      </Box>

      {/* 카드 콘텐츠 */}
      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        {/* 제목 */}
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: 600,
            mb: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </Typography>

        {/* 설명 */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            minHeight: '40px',
          }}
        >
          {description}
        </Typography>

        {/* 기술 스택 */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
          {techStack.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              sx={{
                fontSize: '0.7rem',
                height: '24px',
                backgroundColor: getTechColor(tech),
                color: tech === 'JavaScript' ? '#333' : '#fff',
                fontWeight: 500,
              }}
            />
          ))}
        </Box>

        {/* 작업 날짜 */}
        {createdAt && (
          <Typography variant="caption" color="text.secondary">
            {formatDate(createdAt)}
          </Typography>
        )}
      </CardContent>

      {/* 버튼 영역 */}
      <CardActions sx={{ px: 2, pb: 2, pt: 0, gap: 1 }}>
        {githubUrl && (
          <Button
            size="small"
            variant="outlined"
            startIcon={<GitHubIcon />}
            onClick={handleGitHub}
            sx={{
              flex: 1,
              borderColor: 'grey.400',
              color: 'text.primary',
              '&:hover': {
                borderColor: 'grey.600',
                backgroundColor: 'grey.100',
              },
            }}
          >
            GitHub
          </Button>
        )}
        {detailUrl && (
          <Button
            size="small"
            variant="contained"
            endIcon={<LaunchIcon />}
            onClick={handleViewDetails}
            sx={{
              flex: 1,
            }}
          >
            View Details
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
