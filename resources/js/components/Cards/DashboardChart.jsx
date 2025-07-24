import { Card, CardContent, Typography, Box } from "@mui/material";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { usePage } from "@inertiajs/react";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#aa00ff", "#e91e63"];

const PiechartCard = ({ title, dataKey, data }) => (
  <Card sx={{ width: "20%", minWidth: 250, height: 300, m: 1 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey={dataKey}
            cx="50%"
            cy="50%"
            outerRadius={50}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export const DashboardChart = () => {
  const { stats } = usePage().props;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <PiechartCard title="Sex Distribution" dataKey="sex" data={stats.sexDistribution} />
      <PiechartCard title="Age Distribution" dataKey="sex" data={stats.sexDistribution} />
      
    </Box>
  );
};
