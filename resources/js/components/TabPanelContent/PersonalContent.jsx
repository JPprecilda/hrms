import { Button, Box, Typography, Divider } from "@mui/material";
import { LabelValue } from "@/components/LabelValue";

export const PersonalContent = ({ employee }) => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold", color: "primary.main" }}
            >
                Personal Information
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Box
                sx={{
                    display: "flex",
                }}
            >
                <Box sx={{ flex: "1 1 300px" }}>
                    <LabelValue label="Address" value={employee.address} />
                    <LabelValue label="Birth Date" value={employee.birthday} />
                </Box>

                <Box sx={{ flex: "1 1 300px" }}>
                    <LabelValue label="Sex" value={employee.sex} />
                    <LabelValue
                        label="Civil Status"
                        value={employee.civil_status}
                    />
                    <LabelValue
                        label="Citizenship"
                        value={employee.citizenship}
                    />
                    <LabelValue
                        label="Place of Birth"
                        value={employee.place_of_birth}
                    />
                </Box>

                <Box sx={{ flex: "1 1 300px" }}>
                    <LabelValue label="Height" value={employee.height} />
                    <LabelValue label="Weight" value={employee.weight} />
                </Box>
            </Box>
        </Box>
    );
};
