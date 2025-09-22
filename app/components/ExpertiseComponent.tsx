import React from 'react';
import {
  Box,
  Container,
  Typography,
  LinearProgress,
  Grid,
  Chip,
  Card,
  CardContent,
} from '@mui/material';
import {
  VerifiedUser,
  Security
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Types
interface SkillData {
  name: string;
  percentage: number;
  description: string;
}

interface CertificationData {
  icon: React.ReactElement;
  title: string;
}

interface ExpertiseComponentProps {
  title?: string;
  description?: string;
  skills?: SkillData[];
  certifications?: CertificationData[];
}

// Styled components
const StyledContainer = styled(Box)(() => ({
  backgroundColor: '#f8f9fa',
  padding: '5rem 0',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.02) 1px, transparent 1px)',
    backgroundSize: '20px 20px',
    opacity: 0.5,
  }
}));

const SkillCard = styled(Card)(() => ({
  background: 'white',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  border: '1px solid rgba(0,0,0,0.05)',
  transition: 'all 0.3s ease',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
  }
}));

const StyledLinearProgress = styled(LinearProgress)(() => ({
  height: 8,
  borderRadius: 4,
  backgroundColor: 'rgba(255, 87, 34, 0.1)',
  '& .MuiLinearProgress-bar': {
    borderRadius: 4,
    background: 'linear-gradient(90deg, #ff5722 0%, #ff7043 100%)',
  },
}));

const CertificationChip = styled(Chip)(() => ({
  backgroundColor: 'rgba(255, 87, 34, 0.1)',
  color: '#ff5722',
  fontWeight: 600,
  padding: '8px 4px',
  height: 'auto',
  borderRadius: '12px',
  '& .MuiChip-icon': {
    color: '#ff5722',
    fontSize: '20px',
  },
  '& .MuiChip-label': {
    padding: '8px 12px',
  },
}));

export const ExpertiseComponent: React.FC<ExpertiseComponentProps> = ({
  title = "Our Professional Expertise",
  description = "We deliver exceptional results through our comprehensive skill set and years of industry experience. Our team's expertise spans across multiple disciplines to provide comprehensive solutions.",
  skills: customSkills,
  certifications: customCertifications
}) => {
  const defaultSkills: SkillData[] = [
    {
      name: "Project Management",
      percentage: 95,
      description: "Strategic planning and execution"
    },
    {
      name: "Web Development",
      percentage: 88,
      description: "Modern frameworks and technologies"
    },
    {
      name: "Data Analysis",
      percentage: 82,
      description: "Business intelligence and insights"
    },
    {
      name: "Digital Marketing",
      percentage: 78,
      description: "Multi-channel campaign management"
    },
    {
      name: "Quality Assurance",
      percentage: 92,
      description: "Comprehensive testing protocols"
    },
    {
      name: "Client Relations",
      percentage: 96,
      description: "Long-term partnership building"
    }
  ];

  const defaultCertifications: CertificationData[] = [
    {
      icon: <VerifiedUser />,
      title: "ISO Certified"
    },
    {
      icon: <Security />,
      title: "Quality Assured"
    }
  ];

  const skills = customSkills || defaultSkills;
  const certifications = customCertifications || defaultCertifications;

  return (
    <StyledContainer>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="flex-start">
          {/* Left Content */}
          <Grid size={{xs:12, md:5}}>
            <Box>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  color: '#2c3e50',
                  fontWeight: 'bold',
                  mb: 4,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  lineHeight: 1.2
                }}
              >
                {title}
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: '#6c757d',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 4
                }}
              >
                {description}
              </Typography>

              {/* Certifications */}
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {certifications.map((cert, index) => (
                  <CertificationChip
                    key={index}
                    icon={cert.icon}
                    label={cert.title}
                    variant="filled"
                  />
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Right Skills Grid */}
          <Grid size={{xs:12, md:7}}>
            <Grid container spacing={3}>
              {skills.map((skill, index) => (
                <Grid size={{xs:12, md:6}} key={index}>
                  <SkillCard>
                    <CardContent sx={{ p: 3 }}>
                      {/* Skill Header */}
                      <Box 
                        display="flex" 
                        justifyContent="space-between" 
                        alignItems="center" 
                        mb={2}
                      >
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            color: '#2c3e50',
                            fontWeight: 600,
                            fontSize: '1.1rem'
                          }}
                        >
                          {skill.name}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: '#ff5722',
                            fontWeight: 'bold',
                            fontSize: '1.1rem'
                          }}
                        >
                          {skill.percentage}%
                        </Typography>
                      </Box>

                      {/* Progress Bar */}
                      <Box mb={2}>
                        <StyledLinearProgress
                          variant="determinate"
                          value={skill.percentage}
                          sx={{
                            animation: `progressAnimation-${index} 2s ease-in-out`,
                            [`@keyframes progressAnimation-${index}`]: {
                              '0%': {
                                '& .MuiLinearProgress-bar': {
                                  transform: 'translateX(-100%)',
                                },
                              },
                              '100%': {
                                '& .MuiLinearProgress-bar': {
                                  transform: `translateX(-${100 - skill.percentage}%)`,
                                },
                              },
                            },
                          }}
                        />
                      </Box>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#6c757d',
                          fontSize: '0.9rem',
                          lineHeight: 1.5
                        }}
                      >
                        {skill.description}
                      </Typography>
                    </CardContent>
                  </SkillCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledContainer>
  );
};