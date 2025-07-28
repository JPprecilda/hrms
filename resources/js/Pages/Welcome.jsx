import React from "react";
import { Head, Link } from "@inertiajs/react";
import {
    Container,
    Box,
    Typography,
    Button,
    Paper,
    Avatar,
    Stack,
    useMediaQuery,
    useTheme,
} from "@mui/material";

export default function Welcome() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Container maxWidth="sm">
            <Head title="Welcome" />
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "white",
                    px: 2,
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        p: isMobile ? 3 : 5,
                        textAlign: "center",
                        width: "100%",
                        borderRadius: 3,
                    }}
                >
                    {/* Logo */}
                    <Avatar
                        src="/Images/baybay-logo.png"
                        alt="HRMS Logo"
                        sx={{
                            width: isMobile ? 64 : 80,
                            height: isMobile ? 64 : 80,
                            mx: "auto",
                            mb: 2,
                        }}
                    />

                    {/* Title & Subtitle */}
                    <Typography
                        variant={isMobile ? "h5" : "h4"}
                        gutterBottom
                        fontWeight="bold"
                    >
                        Welcome to HRMS
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        mb={3}
                        sx={{ fontSize: isMobile ? "0.9rem" : "1rem" }}
                    >
                        Human Resource Management System
                    </Typography>

                    {/* Key Features */}
                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                        flexWrap="wrap"
                        mb={3}
                    >
                        <Typography variant="body2" color="text.secondary">
                            ✔ Employee Records
                        </Typography>
                    </Stack>

                    {/* Login Button */}
                    <Button
                        component={Link}
                        href="/login"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth={isMobile}
                    >
                        Go to Login
                    </Button>
                </Paper>
            </Box>
        </Container>
    );
}
