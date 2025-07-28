import Layout from "@/Layout/Layout";
import React from "react";
import { Typography, Box } from "@mui/material";
import { DashboardCard } from "@/components/Cards/DashboardCard";
import { DashboardChart } from "@/components/Cards/DashboardChart";
import { DashboardDepartmentTable } from "@/components/Tables/DashboardDepartmentTable";
import { Head } from "@inertiajs/react"


export default function Dashboard() {
    return (
        <Layout>

            <Head title="Dashboard"/>

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
