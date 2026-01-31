import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import ProjectCard from '../components/landing/ProjectCard';
import ContactCard from '../components/landing/ContactCard';
import SocialLinks from '../components/landing/SocialLinks';
import GuestbookForm from '../components/landing/GuestbookForm';
import GuestbookList from '../components/landing/GuestbookList';
import { supabase } from '../utils/supabase';

/**
 * HomePage 컴포넌트
 *
 * 포트폴리오 메인 페이지를 렌더링합니다.
 * Hero, About Me, Skill Tree, Projects, Contact 5개 섹션으로 구성됩니다.
 */
function HomePage() {
  const [projects, setProjects] = useState([]);
  const [guestbookEntries, setGuestbookEntries] = useState([]);
  const [isProjectsLoading, setIsProjectsLoading] = useState(true);
  const [isGuestbookLoading, setIsGuestbookLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
    fetchGuestbook();
  }, []);

  const fetchProjects = async () => {
    setIsProjectsLoading(true);
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('is_published', true)
        .order('sort_order', { ascending: true });

      if (error) throw error;
      setProjects(data || []);
    } catch (err) {
      console.error('Error fetching projects:', err);
    } finally {
      setIsProjectsLoading(false);
    }
  };

  const fetchGuestbook = async () => {
    setIsGuestbookLoading(true);
    try {
      const { data, error } = await supabase
        .from('guestbook')
        .select('id, name, message, created_at')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setGuestbookEntries(data || []);
    } catch (error) {
      console.error('Error fetching guestbook:', error);
    } finally {
      setIsGuestbookLoading(false);
    }
  };

  const handleGuestbookSubmit = async (formData) => {
    setIsGuestbookLoading(true);
    try {
      const { error } = await supabase.from('guestbook').insert([
        {
          name: formData.name,
          message: formData.message,
          email: formData.email || null,
          phone: formData.phone || null,
          sns: formData.sns || null,
          age_range: formData.ageRange || null,
          referral_source: formData.referralSource || null,
        },
      ]);

      if (error) throw error;
      await fetchGuestbook();
    } catch (error) {
      console.error('Error submitting guestbook:', error);
      alert('메시지 전송에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsGuestbookLoading(false);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* Hero 섹션 */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          py: { xs: 8, md: 12 },
          minHeight: { xs: '60vh', md: '70vh' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h1"
              sx={{
                color: 'text.primary',
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Hero Section
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.primary',
                fontSize: { xs: '1rem', md: '1.2rem' },
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.8,
              }}
            >
              여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* About Me 섹션 */}
      <Box
        sx={{
          bgcolor: '#E5F6FB',
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="md">
          <Card
            sx={{
              bgcolor: 'background.paper',
              p: { xs: 3, md: 5 },
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography
                variant="h2"
                sx={{
                  color: 'secondary.main',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  mb: 3,
                }}
              >
                About Me
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  mb: 4,
                  lineHeight: 1.8,
                }}
              >
                여기는 About Me 섹션입니다. 간단한 자기소개와 더 알아보기 버튼이 들어갈 예정입니다.
              </Typography>
              <Button
                component={Link}
                to="/about"
                variant="outlined"
                color="secondary"
                sx={{
                  borderRadius: 24,
                  px: 4,
                  py: 1.5,
                }}
              >
                더 알아보기
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Skill Tree 섹션 */}
      <Box
        sx={{
          bgcolor: '#E8F7E0',
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="md">
          <Card
            sx={{
              bgcolor: 'background.paper',
              p: { xs: 3, md: 5 },
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography
                variant="h2"
                sx={{
                  color: '#4CAF50',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  mb: 3,
                }}
              >
                Skill Tree
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8,
                }}
              >
                여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Projects 섹션 */}
      <Box
        id="projects"
        sx={{
          bgcolor: '#FFF5CC',
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h2"
              sx={{
                color: '#E6A000',
                fontSize: { xs: '1.75rem', md: '2.5rem' },
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

          {isProjectsLoading && (
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

          {!isProjectsLoading && projects.length > 0 && (
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

          {!isProjectsLoading && projects.length === 0 && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 200,
              }}
            >
              <Typography color="text.secondary">
                등록된 프로젝트가 없습니다
              </Typography>
            </Box>
          )}

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              component={Link}
              to="/projects"
              variant="contained"
              color="primary"
              sx={{
                px: 4,
                py: 1.5,
              }}
            >
              더 보기
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Contact 섹션 */}
      <Box
        id="contact"
        sx={{
          bgcolor: '#FFE8EC',
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.75rem', md: '2.5rem' },
                fontWeight: 600,
                color: '#FF6B8A',
                mb: 2,
              }}
            >
              Contact
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.125rem' },
                color: 'text.secondary',
                maxWidth: 500,
                mx: 'auto',
              }}
            >
              언제든 연락주세요. 방명록도 남겨주시면 감사하겠습니다!
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <ContactCard
                  email="vkhdvhdvhd@email.com"
                  phone="010-1234-5678"
                  location="울산광역시 동구 전하로35"
                />
                <SocialLinks
                  instagram="https://instagram.com/yuyujin"
                  github="https://github.com/yuyujin"
                  linkedin="https://linkedin.com/in/yuyujin"
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <GuestbookForm onSubmit={handleGuestbookSubmit} isLoading={isGuestbookLoading} />
            </Grid>
          </Grid>

          <Box sx={{ mt: { xs: 4, md: 6 } }}>
            <GuestbookList entries={guestbookEntries} isLoading={isGuestbookLoading} />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;
