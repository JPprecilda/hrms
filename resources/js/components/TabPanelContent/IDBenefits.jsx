import { Button, Box, Typography, Divider } from "@mui/material";
import { LabelValue } from "@/components/LabelValue";

export const IDBenefits = ({ employee }) => {
    return (
        <Box sx={{ p: 1 }}>
            <Typography
                variant="h6"
                gutterBottom
                sx={{
                    fontWeight: "bold",
                    color: "primary.main",
                    fontSize: {
                        xs: "1rem",     // Mobile
                        sm: "1.125rem", // Tablet
                        md: "1.25rem",  // Desktop
                    },
                }}
            >
                ID & Benefits Information
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column", // Stack vertically on mobile
                        md: "row",    // Keep row layout on desktop
                    },
                    gap: 2, // Add spacing between boxes
                }}
            >
                <Box sx={{ flex: "1 1 100%", maxWidth: { xs: "100%", md: "33%" } }}>
                    <LabelValue label="GSIS Number" value={employee.gsis_number} />
                    <LabelValue label="SSS Number" value={employee.sss_number} />
                </Box>

                <Box sx={{ flex: "1 1 100%", maxWidth: { xs: "100%", md: "33%" } }}>
                    <LabelValue label="Philhealth Number" value={employee.philhealth_number} />
                    <LabelValue label="PAGIBIG Number" value={employee.pagibig_number} />
                </Box>

                <Box sx={{ flex: "1 1 100%", maxWidth: { xs: "100%", md: "33%" } }}>
                    <LabelValue label="TIN Number" value={employee.tin_number} />
                </Box>
            </Box>
        </Box>
    );
};
