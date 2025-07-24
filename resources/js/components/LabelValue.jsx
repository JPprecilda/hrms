import { Box, Typography, Divider } from '@mui/material';

export const LabelValue = ({ label, value }) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="body2" color="text.secondary">
      {label}
    </Typography>
    <Typography variant="body1" fontWeight="medium">
      {value}
    </Typography>
  </Box>
);