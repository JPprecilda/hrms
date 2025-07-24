import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { usePage } from "@inertiajs/react";

export const DashboardDepartmentTable = () => {
  const { stats } = usePage().props;

  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",          // Half screen width
        maxHeight: 400,
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Sticky Title */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: "#fff",
          zIndex: 2,
          borderBottom: "1px solid #ddd",
          p: 2,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Employees per Department
        </Typography>
      </Box>

      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}>
                Department Name
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}>
                Number of Employees
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stats.employeesPerDepartment.map((dept, index) => (
              <TableRow key={index}>
                <TableCell>{dept.department}</TableCell>
                <TableCell>{dept.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
