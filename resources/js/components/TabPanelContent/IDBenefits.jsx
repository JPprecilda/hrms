import { Button, Box, Typography, Divider } from "@mui/material";
import { LabelValue } from "@/components/LabelValue";

export const IDBenefits = ({ employee }) => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold", color: "primary.main" }}
            >
                ID & Benefits Information
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Box
                sx={{
                    display: "flex",
                }}
            >
                <Box sx={{ flex: "1 1 300px" }}>
                    <LabelValue label="GSIS Number" value={employee.gsis_number} />
                    <LabelValue label="SSS Number" value={employee.sss_number} />
                </Box>

                <Box sx={{ flex: "1 1 300px" }}>
                    <LabelValue label="Philhealth Number" value={employee.philhealth_number} />
                    <LabelValue label="PAGIBIG Number" value={employee.pagibig_number} />
                </Box>

                <Box sx={{ flex: "1 1 300px" }}>
                    <LabelValue label="TIN Number" value={employee.tin_number} />
                </Box>
            </Box>
        </Box>
    );
};
