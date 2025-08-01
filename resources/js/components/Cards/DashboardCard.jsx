import React from "react";
import {
  Typography,
  CardContent,
  Card,
  Box,
  Avatar,
  useTheme,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import WcIcon from "@mui/icons-material/Wc";
import BadgeIcon from "@mui/icons-material/Badge";
import { usePage, router } from "@inertiajs/react";
import CountUp from "react-countup";

export const DashboardCard = () => {
  const { stats } = usePage().props;
  const theme = useTheme();

  // First row
  const firstRowStats = [
    {
      label: "Total Employees",
      value: stats.totalEmployees,
      color: "#1976d2",
      gradient: "linear-gradient(135deg, #1976d2, #42a5f5)",
      icon: <PeopleIcon />,
      link: "/employees",
    },
    {
      label: "Departments",
      value: stats.departments,
      color: "#2e7d32",
      gradient: "linear-gradient(135deg, #2e7d32, #66bb6a)",
      icon: <BusinessIcon />,
      link: "/departments",
    },
    {
      label: "Male / Female",
      value: `${stats.maleCount} / ${stats.femaleCount}`,
      color: "#f57c00",
      gradient: "linear-gradient(135deg, #f57c00, #ffb74d)",
      icon: <WcIcon />,
      link: "/employees?filter=gender",
      isMixed: true,
    },
  ];

  // Second row
  const secondRowStats = [
    {
      label: "Regular",
      value: stats.regularCount,
      color: "#1565c0",
      gradient: "linear-gradient(135deg, #1565c0, #5c6bc0)",
      icon: <BadgeIcon />,
      link: "/employees?type=regular",
    },
    {
      label: "Service Provider",
      value: stats.spCount,
      color: "#00897b",
      gradient: "linear-gradient(135deg, #00897b, #4db6ac)",
      icon: <BadgeIcon />,
      link: "/employees?type=sp",
    },
    {
      label: "Job Order",
      value: stats.combinedJOCount,
      color: "#c62828",
      gradient: "linear-gradient(135deg, #c62828, #ef5350)",
      icon: <BadgeIcon />,
      link: "/employees?type=jo",
    },
    {
      label: "Co-Terminus",
      value: stats.coterminusCount,
      color: "#6a1b9a",
      gradient: "linear-gradient(135deg, #6a1b9a, #ab47bc)",
      icon: <BadgeIcon />,
      link: "/employees?type=coterminus",
    },
  ];

  const renderCardGroup = (group) => (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 3 }}>
      {group.map((stat, i) => (
        <Card
          key={i}
          onClick={() => router.visit(stat.link)}
          sx={{
            flex: {
              xs: "1 1 100%",
              sm: "1 1 48%",
              md: "1 1 30%",
              lg: "1 1 250px",
            },
            background: stat.gradient,
            color: "white",
            borderRadius: 3,
            boxShadow: 6,
            cursor: "pointer",
            transition: "transform 0.2s ease",
            "&:hover": {
              transform: "scale(1.02)",
              boxShadow: 10,
            },
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              py: 3,
            }}
          >
            <Avatar
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.2)",
                width: 56,
                height: 56,
              }}
            >
              {stat.icon}
            </Avatar>
            <Box>
              <Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
                {stat.label}
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                {stat.isMixed ? (
                  stat.value
                ) : (
                  <CountUp
                    end={stat.value}
                    duration={1}
                    separator=","
                    preserveValue={true}
                  />
                )}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  return (
    <Box>
      {renderCardGroup(firstRowStats)}
      {renderCardGroup(secondRowStats)}
    </Box>
  );
};

export default DashboardCard;
