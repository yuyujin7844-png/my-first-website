import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import ContactSection from './components/landing/contact-section.jsx';
import ProjectsSection from './components/landing/projects-section.jsx';
import ButtonSection from './components/ui/button-section.jsx';
import InputSection from './components/ui/input-section.jsx';
import Navigation from './components/common/navigation.jsx';
import { supabase } from './utils/supabase.js';

function App() {
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
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'background.default',
      }}
    >
      <Navigation title="My Portfolio" />
      <Box id="home">
        <ButtonSection />
        <InputSection />
      </Box>
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

export default App;
