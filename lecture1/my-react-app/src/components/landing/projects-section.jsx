import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import ProjectCard from './project-card.jsx';
import { supabase } from '../../utils/supabase.js';

/**
 * ProjectsSection 컴포넌트
 * 프로젝트 목록을 4열 그리드 레이아웃으로 표시하는 섹션
 *
 * Props:
 * @param {string} id - 섹션 ID (스크롤 네비게이션용) [Optional, 기본값: 'projects']
 *
 * Example usage:
 * <ProjectsSection id="projects" />
 */
function ProjectsSection({ id = 'projects' }) {
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
      id={id}
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: 'background.subtle',
      }}
    >
      <Container maxWidth="lg">
        {/* 섹션 제목 */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '1.75rem', md: '2.5rem' },
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
        {!isLoading && !error && (
          <Grid container spacing={3}>
            {projects.map((project) => (
              <Grid
                key={project.id}
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              >
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

export default ProjectsSection;
