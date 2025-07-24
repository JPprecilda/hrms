import { Button, Box, Typography, Divider } from "@mui/material";
import { LabelValue } from "@/components/LabelValue";

export const EmploymentContent = ({employee}) => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold", color: "primary.main" }}
            >
                Employment Information
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Box
                sx={{
                    display: "flex",
                }}
            >
                <Box sx={{ flex: "1 1 300px" }}>
                    <LabelValue label="Plantilla Position" value={employee.plantilla_position} />
                    <LabelValue label="Salary Grade" value={employee.salarygrade} />
                    
                </Box>

                <Box sx={{ flex: "1 1 300px" }}>
                    <LabelValue label="Employment Type" value={employee.employment_type} />
                    <LabelValue label="Date Hired" value={employee.date_hired} />
                    
                    
                </Box>

                <Box sx={{ flex: "1 1 300px" }}>
                    <LabelValue label="Regularization Date" value={employee.regularization_date} />
                    <LabelValue label="Length of Service" value={employee.lengthofservice} />
                </Box>
            </Box>
        </Box>
    );
};
