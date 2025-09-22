import { Card, CardContent, Typography, Box } from "@mui/material";
import { Stack } from "@mui/system";
import LayersIcon from "@mui/icons-material/Layers"; // ejemplo de icono

export const ServiceCard = () => {
  return (
    <Card
      sx={{
        border: "1px solid #eee",
        borderRadius: 3,
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: "red",
          boxShadow: "0 6px 20px rgba(255,0,0,0.2)",
          transform: "translateY(-5px)", // levanta la card
        },
      }}
    >
      <CardContent>
        <Stack spacing={2}>
          <Box color="red">
            <LayersIcon fontSize="large" />
          </Box>
          <Typography variant="h6" fontWeight="bold">
            Digital Solutions
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque ipsa.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "red",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
          >
            Learn More →
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
