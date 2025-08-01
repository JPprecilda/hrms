import { Link, usePage } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { Box, Tabs, Tab, Card, CardContent, TextField } from "@mui/material";
import { TabPanel } from "@/components/TabPanel";
import { PersonalContent } from "@/components/TabPanelContent/PersonalContent";
import { EmploymentContent } from "@/components/TabPanelContent/EmploymentContent";
import { EducationEligibility } from "@/components/TabPanelContent/EducationEligibility";
import { IDBenefits } from "@/components/TabPanelContent/IDBenefits";
import InterviewRemarks from "@/components/Field/InterviewRemarks";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import BadgeIcon from "@mui/icons-material/Badge";

export const TabsCard = ({ data }) => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    return (
        <Card
            sx={{
                flexGrow: 1,
                flexBasis: {
                    xs: "100%",
                    sm: "65%",
                    md: "68%",
                },
                minWidth: 300,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#f4f6f8", // Same light background as ProfileCard
                borderRadius: 4,
                boxShadow: 3,
            }}
        >
            <CardContent sx={{ flexGrow: 1 }}>
                <Tabs
                    value={tabIndex}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    textColor="primary"
                    indicatorColor="primary"
                >
                    <Tab label="Personal" />
                    <Tab label="Employment" />
                    <Tab label="Education & Eligibility" />
                    <Tab label="IDs & Benefits" />
                </Tabs>

                <Box
                    sx={{
                        height: "100%",
                        overflowY: "auto",
                        flexGrow: 1,
                        mt: 2,
                    }}
                >
                    <TabPanel value={tabIndex} index={0}>
                        <PersonalContent employee={data} />
                    </TabPanel>
                    <TabPanel value={tabIndex} index={1}>
                        <EmploymentContent employee={data} />
                    </TabPanel>
                    <TabPanel value={tabIndex} index={2}>
                        <EducationEligibility employee={data} />
                    </TabPanel>
                    <TabPanel value={tabIndex} index={3}>
                        <IDBenefits employee={data} />
                    </TabPanel>
                </Box>
            </CardContent>

            {/* Remarks Section */}
            <Box
                sx={{
                    p: 2,
                    borderTop: "1px solid #ddd",
                    backgroundColor: "#eef1f5", // Slight visual separation
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                }}
            >
                <InterviewRemarks employee={data} />
            </Box>
        </Card>
    );
};
