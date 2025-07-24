import {
    Avatar,
    Box,
    Paper,
    TextField,
    Typography,
    Button,
    Stack,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Head, useForm } from "@inertiajs/react";

export default function Login({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <>
            <Head title="Login" />

            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 2,
                    backgroundColor: "#f4f6f8",
                }}
            >
                <Paper
                    elevation={4}
                    sx={{
                        width: "100%",
                        maxWidth: 400,
                        p: { xs: 3, sm: 4 },
                        borderRadius: 3,
                        backgroundColor: "white",
                    }}
                >
                    <Box textAlign="center" mb={3}>
                        <Avatar
                            sx={{
                                m: "auto",
                                bgcolor: "primary.main",
                                width: 56,
                                height: 56,
                            }}
                        >
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography variant="h5" mt={1}>
                            Sign in
                        </Typography>
                        {status && (
                            <Typography
                                variant="body2"
                                color="success.main"
                                mt={2}
                            >
                                {status}
                            </Typography>
                        )}
                    </Box>

                    <Box component="form" onSubmit={handleSubmit} noValidate>
                        <Stack spacing={2}>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                error={!!errors.email}
                                helperText={errors.email}
                            />

                            <TextField
                                fullWidth
                                label="Password"
                                name="password"
                                type="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                error={!!errors.password}
                                helperText={errors.password}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={processing}
                            >
                                Log in
                            </Button>
                        </Stack>
                    </Box>
                </Paper>
            </Box>
        </>
    );
}
