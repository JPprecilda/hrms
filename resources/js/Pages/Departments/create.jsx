import Layout from "@/Layout/Layout";
import { TextField, Button, Typography, Box, MenuItem, FormControl, Select } from "@mui/material";
import { useForm } from "@inertiajs/react";

const create = () => {
    const { data, setData, post, processing, errors} = useForm({
        department_name: "",
        department_head: "",

    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/departments", {
            onSuccess: () => {
                alert("Department added!");
            },
        });
    };

    return (
        <Layout>
            <Typography variant="h4" gutterBottom>
                Add Department
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
                <TextField
                    label="Department Name"
                    value={data.department_name}
                    onChange={(e) => setData("department_name", e.target.value)}
                    error={!!errors.department_name}
                    helperText={errors.department_name}
                />
                <TextField
                    label="Department Head"
                    value={data.department_head}
                    onChange={(e) =>
                        setData("department_head", e.target.value)
                    }
                    error={!!errors.department_head}
                    helperText={errors.department_head}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={processing}
                >
                    Add Department
                </Button>
            </Box>
        </Layout>
    );
};

export default create;
