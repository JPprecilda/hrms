import React, { useEffect, useState, useRef } from "react";
import { TextField, Box } from "@mui/material";
import { useForm } from "@inertiajs/react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import NotificationSnackbar from "../Notification/NotificationSnackbar";

const InterviewRemarks = ({ employee }) => {
    const { data, setData, put, errors } = useForm({
        remarks: employee.remarks || "",
    });

    const [showSnackbar, setShowSnackbar] = useState(false);
    const [typingTimeout, setTypingTimeout] = useState(null);
    const hasTyped = useRef(false);

    useEffect(() => {
        if (!hasTyped.current) return; // ⛔ don't auto-save until user types

        if (typingTimeout) clearTimeout(typingTimeout);

        const timeout = setTimeout(() => {
            put(`/employees/${employee.id}`, {
                data: { remarks: data.remarks },
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    setShowSnackbar(true); // ✅ only show if user typed
                },
            });
        }, 1000);

        setTypingTimeout(timeout);

        return () => clearTimeout(timeout);
    }, [data.remarks]);

    const handleChange = (e) => {
        setData({ ...data, remarks: e.target.value });
        hasTyped.current = true; // ✅ set true only on user typing
    };

    return (
        <div>
            <TextField
                label="Remarks"
                multiline
                fullWidth
                rows={2}
                value={data.remarks}
                onChange={handleChange}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "red" },
                        "&:hover fieldset": { borderColor: "darkred" },
                        "&.Mui-focused fieldset": { borderColor: "red" },
                    },
                    "& .MuiInputBase-input": { color: "red" },
                    "& .MuiInputLabel-root": { color: "red" },
                    "& .Mui-focused": { color: "red" },
                }}
            />
            <NotificationSnackbar
                open={showSnackbar}
                onClose={() => setShowSnackbar(false)}
                message="Remarks updated successfully!"
            />
        </div>
    );
};

export default InterviewRemarks;
