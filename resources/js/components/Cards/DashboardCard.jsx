import { Typography, CardContent, Card, Box } from "@mui/material";
import React from "react";
import { usePage } from "@inertiajs/react";

// CODE
export const DashboardCard = () => {
    const { stats } = usePage().props;

    const dashboardStats = [
        {
            label: "Total Employees",
            value: stats.totalEmployees,
            color: "#1976d2",
        },
        {
            label: "Departments",
            value: stats.departments,
            color: "#2e7d32",
        },
        
        {
            label: "Male / Female",
            value: `${stats.maleCount} / ${stats.femaleCount}`,
            color: "#ff9800",
        },
    ];

    return (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 3 }}>
            {dashboardStats.map((stat, i) => (
                <Card
                    key={i}
                    sx={{
                        flex: "1 1 200px",
                        minWidth: 200,
                        backgroundColor: stat.color,
                        color: "white",
                    }}
                >
                    <CardContent>
                        <Typography variant="h6">{stat.label}</Typography>
                        <Typography variant="h4" fontWeight="bold">
                            {stat.value}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};
