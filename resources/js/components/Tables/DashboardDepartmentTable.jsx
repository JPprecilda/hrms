import {
  Box,
  Paper,
  Typography,
  Divider,
  Chip,
} from "@mui/material";
import { usePage } from "@inertiajs/react";

export const DashboardDepartmentTable = () => {
  const { stats } = usePage().props;

  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        maxHeight: 400,
        overflowY: "auto",
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      {/* Sticky Header */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: "white",
          zIndex: 2,
          pb: 1,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Employees per Department
        </Typography>
        <Divider />
      </Box>

      {/* List-like layout */}
      {stats.employeesPerDepartment.map((dept, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1,
            px: 1,
            borderRadius: 1,
            backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#fff",
            boxShadow: 1,
          }}
        >
          <Typography fontSize="1rem">{dept.department}</Typography>
          <Chip
            label={dept.count}
            color="primary"
            size="small"
            sx={{ fontWeight: "bold" }}
          />
        </Box>
      ))}
    </Paper>
  );
};
