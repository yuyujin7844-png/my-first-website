import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import ProjectCard from '../components/landing/ProjectCard';
import { supabase } from '../utils/supabase';

/**
 * ProjectsPage 컴포넌트
 *
 * Projects 페이지를 렌더링합니다.
 * Supabase에서 프로젝트 목록을 가져와 그리드로 표시합니다.
 */
function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data, error: fetchError } = await supabase
        .from('projects')
        .select('*')
        .eq('is_published', true)
        .order('sort_order', { ascending: true });

      if (fetchError) throw fetchError;
      setProjects(data || []);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError('프로젝트를 불러오는데 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        bgcolor: '#FFF5CC',
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        {/* 섹션 제목 */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h1"
            sx={{
              color: '#E6A000',
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Projects
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 600,
              mx: 'auto',
              fontSize: { xs: '0.95rem', md: '1.1rem' },
            }}
          >
            지금까지 진행한 프로젝트들입니다
          </Typography>
        </Box>

        {/* 로딩 상태 */}
        {isLoading && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 300,
            }}
          >
            <CircularProgress color="primary" />
          </Box>
        )}

        {/* 에러 상태 */}
        {error && !isLoading && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 300,
            }}
          >
            <Typography color="error">{error}</Typography>
          </Box>
        )}

        {/* 프로젝트 그리드 */}
        {!isLoading && !error && projects.length > 0 && (
          <Grid container spacing={3}>
            {projects.map((project) => (
              <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  techStack={project.tech_stack}
                  detailUrl={project.detail_url}
                  githubUrl={project.github_url}
                  createdAt={project.created_at}
                />
              </Grid>
            ))}
          </Grid>
        )}

        {/* 프로젝트 없음 */}
        {!isLoading && !error && projects.length === 0 && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 300,
            }}
          >
            <Typography color="text.secondary">
              등록된 프로젝트가 없습니다
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default ProjectsPage;
