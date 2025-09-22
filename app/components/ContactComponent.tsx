import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Avatar,
  Card,
  CardContent,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
  Send
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Types
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: React.ReactElement;
  title: string;
  content: string;
}

// Styled components
const StyledContainer = styled(Box)(() => ({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
  padding: '4rem 0',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
    backgroundSize: '30px 30px',
    opacity: 0.3,
    animation: 'float 20s ease-in-out infinite',
  },
  '@keyframes float': {
    '0%, 100%': { transform: 'translate(0, 0)' },
    '50%': { transform: 'translate(-10px, -10px)' },
  }
}));

const GlassCard = styled(Card)(() => ({
  background: 'rgba(255,255,255,0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '16px',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(255,255,255,0.08)',
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
  }
}));

const StyledTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    color: 'white',
    '& fieldset': {
      borderColor: 'rgba(255,255,255,0.3)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255,255,255,0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ff5722',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255,255,255,0.7)',
    '&.Mui-focused': {
      color: '#ff5722',
    },
  },
  '& .MuiOutlinedInput-input': {
    '&::placeholder': {
      color: 'rgba(255,255,255,0.5)',
      opacity: 1,
    },
  },
}));

const ActionButton = styled(Button)(() => ({
  backgroundColor: '#ff5722',
  color: 'white',
  padding: '1rem 2rem',
  fontSize: '1.1rem',
  fontWeight: 600,
  borderRadius: '12px',
  textTransform: 'none',
  boxShadow: '0 8px 25px rgba(255, 87, 34, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#e64a19',
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 35px rgba(255, 87, 34, 0.4)',
  },
}));

// Component Props
interface ContactComponentProps {
  onSubmit?: (data: FormData) => void;
  initialData?: Partial<FormData>;
  contactInfo?: ContactInfo[];
}

export const ContactComponent: React.FC<ContactComponentProps> = ({
  onSubmit,
  initialData = {},
  contactInfo: customContactInfo
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: initialData.name || '',
    email: initialData.email || '',
    subject: initialData.subject || '',
    message: initialData.message || ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    
    if (validateForm()) {
      if (onSubmit) {
        onSubmit(formData);
      } else {
        console.log('Form submitted:', formData);
      }
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  const defaultContactInfo: ContactInfo[] = [
    {
      icon: <LocationOn sx={{ fontSize: 28 }} />,
      title: 'Address',
      content: 'A108 Adam Street, New York, NY 535022'
    },
    {
      icon: <Phone sx={{ fontSize: 28 }} />,
      title: 'Call Us',
      content: '+1 5589 55488 55'
    },
    {
      icon: <Email sx={{ fontSize: 28 }} />,
      title: 'Email Us',
      content: 'info@example.com'
    }
  ];

  const contactInfo = customContactInfo || defaultContactInfo;

  return (
    <StyledContainer>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Contact
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              bgcolor: '#ff5722',
              mx: 'auto',
              mb: 3,
              borderRadius: 2
            }}
          />
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255,255,255,0.8)',
              fontWeight: 300
            }}
          >
            Need Help? Contact Us
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid size={{xs:12, md:5 }}>
            <Box>
              {contactInfo.map((info: ContactInfo, index: number) => (
                <GlassCard key={index} sx={{ mb: 3 }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box display="flex" alignItems="center">
                      <Avatar
                        sx={{
                          bgcolor: '#ff5722',
                          width: 56,
                          height: 56,
                          mr: 3
                        }}
                      >
                        {info.icon}
                      </Avatar>
                      <Box>
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            color: 'white',
                            fontWeight: 600,
                            mb: 0.5
                          }}
                        >
                          {info.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'rgba(255,255,255,0.7)',
                            lineHeight: 1.6
                          }}
                        >
                          {info.content}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </GlassCard>
              ))}
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid size={{xs:12, md:7 }}>
            <Paper
              elevation={24}
              sx={{
                p: 4,
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 3
              }}
            >
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Grid container spacing={3}>
                  <Grid size={{xs:12, md:6 }}>
                    <StyledTextField
                      fullWidth
                      name="name"
                      label="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      error={!!errors.name}
                      helperText={errors.name}
                      aria-describedby="name-helper-text"
                    />
                  </Grid>
                  <Grid size={{xs:12, md:6 }}>
                    <StyledTextField
                      fullWidth
                      name="email"
                      label="Your Email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      error={!!errors.email}
                      helperText={errors.email}
                      aria-describedby="email-helper-text"
                    />
                  </Grid>
                  <Grid size={{xs:12, md:12 }}>
                    <StyledTextField
                      fullWidth
                      name="subject"
                      label="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      error={!!errors.subject}
                      helperText={errors.subject}
                      aria-describedby="subject-helper-text"
                    />
                  </Grid>
                  <Grid size={{xs:12, md:12 }}>
                    <StyledTextField
                      fullWidth
                      name="message"
                      label="Message"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      error={!!errors.message}
                      helperText={errors.message}
                      aria-describedby="message-helper-text"
                    />
                  </Grid>
                  <Grid size={{xs:12, md:12 }}>
                    <Box display="flex" justifyContent="center" mt={2}>
                      <ActionButton
                        type="submit"
                        variant="contained"
                        size="large"
                        startIcon={<Send />}
                        aria-label="Send contact message"
                      >
                        Send Message
                      </ActionButton>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </StyledContainer>
  );
};