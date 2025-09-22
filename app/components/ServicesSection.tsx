'use client'
import React, { JSX } from "react";
import {
  Box,
  Grid,
  Card,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  Divider,
} from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

// Definimos la interfaz para un servicio
interface Service {
  id: string;
  title: string;
  description: string;
  items: string[];
  price: string;
  icon: JSX.Element;
  color: string;
  textColor: string;
}

// Lista de servicios con tipo Service
const services: Service[] = [
  {
    id: "01",
    title: "UI/UX Design",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa.",
    items: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
    price: "$1,299",
    icon: <ComputerIcon />,
    color: "white",
    textColor: "black",
  },
  {
    id: "02",
    title: "Web Development",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
    items: ["Frontend Development", "Backend Solutions", "CMS Integration", "Performance Optimization"],
    price: "$2,499",
    icon: <LanguageIcon />,
    color: "#D32F2F",
    textColor: "white",
  },
  {
    id: "03",
    title: "Mobile Applications",
    description:
      "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut.",
    items: ["iOS Development", "Android Development", "Cross-platform Apps", "App Store Deployment"],
    price: "$3,799",
    icon: <PhoneAndroidIcon />,
    color: "white",
    textColor: "black",
  },
];

// Props tipadas para ServiceCard
interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card
      sx={{
        backgroundColor: service.color,
        color: service.textColor,
        position: "relative",
        borderRadius: 3,
        boxShadow: 3,
        p: 3,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          backgroundColor: service.textColor,
          color: service.color,
          borderRadius: "50%",
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        {service.id}
      </Box>

      <Box
        sx={{
          mb: 2,
          display: "inline-block",
          p: 1,
          bgcolor: service.textColor,
          color: service.color,
          borderRadius: 2,
        }}
      >
        {service.icon}
      </Box>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        {service.title}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        {service.description}
      </Typography>

      <List dense>
        {service.items.map((item, index) => (
          <ListItem key={index} sx={{ p: 0, mb: 0.5 }}>
            <ListItemIcon sx={{ minWidth: 24 }}>
              <FiberManualRecordIcon
                sx={{
                  fontSize: 8,
                  color: service.textColor === "white" ? "white" : "#D32F2F",
                }}
              />
            </ListItemIcon>
            <Typography variant="body2">{item}</Typography>
          </ListItem>
        ))}
      </List>

      <Divider
        sx={{
          my: 2,
          borderColor: service.textColor === "white" ? "rgba(255,255,255,0.3)" : "lightgrey",
        }}
      />

      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        From {service.price}
      </Typography>

      <Button
        variant={service.color === "#D32F2F" ? "contained" : "outlined"}
        sx={{ mt: 1 }}
        color="error"
      >
        Learn More
      </Button>
    </Card>
  );
};

export const ServicesSection: React.FC = () => {
  return (
    <Box sx={{ py: 6, px: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", mb: 1 }}>
        Services
      </Typography>
      <Divider
        sx={{ width: 60, mx: "auto", mb: 2, borderBottomWidth: 2, borderColor: "error.main" }}
      />
      <Typography variant="subtitle1" sx={{ textAlign: "center", mb: 4 }}>
        Check Our Services
      </Typography>

      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid size={{xs:12, md:4 }} key={service.id}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
