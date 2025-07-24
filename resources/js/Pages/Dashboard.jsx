import Layout from "@/Layout/Layout";
import React from "react";
import { Typography, Box } from "@mui/material";
import { DashboardCard } from "@/components/Cards/DashboardCard";
import { DashboardChart } from "@/components/Cards/DashboardChart";
import { DashboardDepartmentTable } from "@/components/Tables/DashboardDepartmentTable";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const data = {
    employeesPerDepartment: [
        { department: "HR", count: 12 },
        { department: "IT", count: 25 },
        { department: "Finance", count: 9 },
        { department: "Operations", count: 18 },
    ],
    hiresPerMonth: [
        { month: "Jan", hires: 5 },
        { month: "Feb", hires: 3 },
        { month: "Mar", hires: 8 },
        { month: "Apr", hires: 6 },
        { month: "May", hires: 10 },
    ],
    positionType: [
        { type: "Managerial", count: 6 },
        { type: "Technical", count: 32 },
        { type: "Clerical", count: 14 },
    ],
};

export default function Dashboard() {
    return (
        <Layout>
            <Typography variant="h4" gutterBottom>
                HRMS Dashboard
            </Typography>

            {/* ALL TOP CARDS -> TOTAL EMPLOYEES... */}
            <DashboardCard />
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <DashboardDepartmentTable />
                {/* <DashboardChart /> */}
            </Box>
        </Layout>
    );
}
