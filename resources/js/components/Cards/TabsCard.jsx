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
                    sm: "60%",
                    md: "68%",
                },
                minWidth: 300,
                display: "flex",
                flexDirection: "column",
                height: 600,
            }}
        >
            <CardContent sx={{ flexGrow: 1 }}>
                <Tabs
                    value={tabIndex}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    <Tab label="Personal" />
                    <Tab label="Employment" />
                    <Tab label="Education & Eligibility" />
                    <Tab label="IDs & Benefits" />
                </Tabs>

                <Box
                    sx={{
                        height: "100%", // take remaining height
                        overflowY: "auto", // enable scrolling inside tab
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
            <Box sx={{p:2 }}>
                <InterviewRemarks employee={data} />
            </Box>
        </Card>
    );
};
