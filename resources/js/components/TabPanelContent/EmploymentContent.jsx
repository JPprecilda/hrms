import { Button, Box, Typography, Divider } from "@mui/material";
import { LabelValue } from "@/components/LabelValue";

export const EmploymentContent = ({ employee }) => {
    return (
        <Box sx={{ p: 1 }}>
            <Typography
                variant="h6"
                gutterBottom
                sx={{
                    fontWeight: "bold",
                    color: "primary.main",
                    fontSize: {
                        xs: "1rem", // Mobile
                        sm: "1.125rem", // Tablets
                        md: "1.25rem", // Desktop (optional)
                    },
                }}
            >
                Employment Information
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column", // Stack vertically on mobile
                        md: "row", // Keep row layout on desktop
                    },
                    gap: 1, // Add spacing between boxes
                }}
            >
                <Box
                    sx={{
                        flex: "1 1 100%",
                        maxWidth: { xs: "100%", md: "33%" },
                    }}
                >
                    <LabelValue
                        label="Plantilla Position"
                        value={employee.plantilla_position}
                    />
                    <LabelValue
                        label="Salary Grade"
                        value={employee.salarygrade}
                    />
                </Box>

                <Box
                    sx={{
                        flex: "1 1 100%",
                        maxWidth: { xs: "100%", md: "33%" },
                    }}
                >
                    <LabelValue
                        label="Employment Type"
                        value={employee.employment_type}
                    />
                    <LabelValue
                        label="Date Hired"
                        value={employee.date_hired}
                    />
                </Box>

                <Box
                    sx={{
                        flex: "1 1 100%",
                        maxWidth: { xs: "100%", md: "33%" },
                    }}
                >
                    <LabelValue
                        label="Regularization Date"
                        value={employee.regularization_date}
                    />
                    <LabelValue
                        label="Length of Service"
                        value={employee.lengthofservice}
                    />
                </Box>
            </Box>
        </Box>
    );
};
