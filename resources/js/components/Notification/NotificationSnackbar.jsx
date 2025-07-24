// components/NotificationSnackbar.jsx

import React from "react";
import { Snackbar, Alert } from "@mui/material";

const NotificationSnackbar = ({ open, onClose, message, severity = "success", duration = 4000 }) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={duration}
            onClose={onClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
            <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default NotificationSnackbar;
