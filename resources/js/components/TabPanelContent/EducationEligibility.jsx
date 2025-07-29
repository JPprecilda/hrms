import { Button, Box, Typography, Divider } from "@mui/material";
import { LabelValue } from "@/components/LabelValue";

export const EducationEligibility = ({ employee }) => {
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
                        md: "1.25rem", // Desktop
                    },
                }}
            >
                Education & Eligibility Information
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column", // Stack on mobile
                        sm: "row", // Horizontal on tablets and up
                    },
                    gap: 2, // Add spacing between boxes
                }}
            >
                <Box
                    sx={{
                        flex: "1 1 100%",
                        maxWidth: { xs: "100%", md: "33%" },
                    }}
                >
                    <LabelValue
                        label="Educational Attainment"
                        value={employee.educational_attainment}
                    />
                    <LabelValue label="Course" value={employee.course} />
                </Box>

                <Box
                    sx={{
                        flex: "1 1 100%",
                        maxWidth: { xs: "100%", md: "33%" },
                    }}
                >
                    <LabelValue
                        label="Career Service Eligibility"
                        value={employee.career_service_eligibility}
                    />
                    <LabelValue
                        label="Date Granted"
                        value={employee.career_service_date_granted}
                    />
                </Box>

                <Box
                    sx={{
                        flex: "1 1 100%",
                        maxWidth: { xs: "100%", md: "33%" },
                    }}
                >
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
