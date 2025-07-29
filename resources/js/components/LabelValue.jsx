import { Box, Typography, Divider } from '@mui/material';

export const LabelValue = ({ label, value }) => (
  <Box sx={{ mb: 1 }}>
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{
        fontSize: {
          xs: '0.75rem',  // Mobile
          sm: '0.875rem', // Tablet and up
        },
      }}
    >
      {label}
    </Typography>
    <Typography
      variant="body1"
      fontWeight="medium"
      sx={{
        fontSize: {
          xs: '0.9rem',  // Mobile
          sm: '1rem',    // Tablet and up
        },
      }}
    >
      {value}
    </Typography>
  </Box>
);
