import { Head } from "@inertiajs/react";
import { Box } from "@mui/material";

const EmployeeShowLayout = ({ title = "Employee Page", children }) => {
    return (
        <>
            <Head title={title} />
            <Box sx={{ p: 3 }}>{children}</Box>
        </>
    );
};

export default EmployeeShowLayout;
