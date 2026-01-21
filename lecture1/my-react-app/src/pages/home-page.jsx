import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import HeroSection from '../components/landing/hero-section.jsx';
import AboutMeSection from '../components/landing/about-me-section.jsx';
import SkillTreeSection from '../components/landing/skill-tree-section.jsx';
import ProjectsSection from '../components/landing/projects-section.jsx';
import ContactSection from '../components/landing/contact-section.jsx';
import { supabase } from '../utils/supabase.js';

/**
 * HomePage 컴포넌트
 * 포트폴리오 메인 페이지
 *
 * 섹션 구성:
 * - Hero: 메인 비주얼, 이름, 간단 소개
 * - About Me: 간단한 자기소개와 '더 알아보기' 버튼
 * - Skill Tree: 기술 스택 시각화
 * - Projects: 프로젝트 목록
 * - Contact: 연락처, SNS, 방명록
 *
 * Example usage:
 * <HomePage />
 */
function HomePage() {
  const [guestbookEntries, setGuestbookEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchGuestbook = async () => {
    setIsLoading(true);
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
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGuestbook();
  }, []);

  const handleGuestbookSubmit = async (formData) => {
    setIsLoading(true);
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
      setIsLoading(false);
    }
  };

  return (
    <Box id="home">
      <HeroSection id="hero" />
      <AboutMeSection id="about-me" />
      <SkillTreeSection id="skill-tree" />
      <ProjectsSection id="projects" />
      <ContactSection
        id="contact"
        guestbookEntries={guestbookEntries}
        onGuestbookSubmit={handleGuestbookSubmit}
        isLoading={isLoading}
      />
    </Box>
  );
}

export default HomePage;
