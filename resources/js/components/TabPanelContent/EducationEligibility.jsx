import { Button, Box, Typography, Divider } from "@mui/material";
import { LabelValue } from "@/components/LabelValue";

export const EducationEligibility = ({ employee }) => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold", color: "primary.main" }}
            >
                Education & Eligibility Information
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Box
                sx={{
                    display: "flex",
                }}
            >
                <Box sx={{ flex: "1 1 300px" }}>
                    <LabelValue
                        label="Educational Attainment"
                        value={employee.educational_attainment}
                    />
                    <LabelValue label="Course" value={employee.course} />
                </Box>

                <Box sx={{ flex: "1 1 300px" }}>
                    <LabelValue
                        label="Career Service Eligibility"
                        value={employee.career_service_eligibility}
                    />
                    <LabelValue
                        label="Date Granted"
                        value={employee.career_service_date_granted}
                    />
                </Box>

                <Box sx={{ flex: "1 1 300px" }}>
                    <LabelValue
                        label="Type of Board Exam"
                        value={employee.type_board_exam}
                    />
                    <LabelValue label="NC II Type" value={employee.ncII_type} />
                </Box>
            </Box>
        </Box>
    );
};
