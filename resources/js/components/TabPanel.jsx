import { Button, Box, Typography } from "@mui/material";

export const TabPanel = ({ children, value, index }) => {
    return (
        <div hidden={value !== index} role="tabpanel">
            {value === index && (
                <Box p={2}>
                    {children}
                </Box>
            )}
        </div>
    );
};
