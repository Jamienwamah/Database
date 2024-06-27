import { Button, Container, Typography, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const SuccessPage: React.FC = () => {
  const router = useRouter();

  const handleReturnHome = () => {
    router.push('/');
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    
  }, []);

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <CheckCircleIcon style={{ fontSize: 100, color: '#4caf50' }} />
      <Typography variant="h4" gutterBottom>
        Congratulations!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Your partnership application form was submitted successfully.
        Check your email for a message from our account officer about advancing our relationship.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleReturnHome}>
        Return to homepage
      </Button>
    </Container>
  );
};

export default SuccessPage;
