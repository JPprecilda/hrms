import { Button, Tooltip } from '@mui/material';


export const SocialIconButton = ({ title, href, icon, color }) => (
  <Tooltip title={title}>
    <Button
      variant="contained"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        backgroundColor: color,
        color: "#fff",
        minWidth: 0,
        padding: "8px",
        borderRadius: "50%",
        "&:hover": {
          backgroundColor: color,
          opacity: 0.85,
        },
      }}
    >
      {icon}
    </Button>
  </Tooltip>
);