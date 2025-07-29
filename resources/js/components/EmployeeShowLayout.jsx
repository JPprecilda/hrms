import { Head } from "@inertiajs/react";
import { Box } from "@mui/material";

const EmployeeShowLayout = ({ title = "Employee Page", children }) => {
    return (
        <>
            <Head title={title} />
            {children}
        </>
    );
};

export default EmployeeShowLayout;
