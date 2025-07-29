import React from 'react';
import { Head, Link } from '@inertiajs/react';
import {
    Box,
    Typography,
    Button,
    Container,
    useTheme,
    useMediaQuery,
} from '@mui/material';

export default function NotFound() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Head title="404 - Page Not Found" />
            <Container
                maxWidth="sm"
                sx={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    px: 2,
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: isMobile ? '6rem' : '8rem',
                        fontWeight: 'bold',
                        color: 'primary.main',
                        mb: 2,
                    }}
                >
                    404
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Page Not Found
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    Sorry, the page you’re looking for doesn’t exist or has been moved.
                </Typography>
                <Button
                    variant="contained"
                    component={Link}
                    href="/"
                    size={isMobile ? 'medium' : 'large'}
                >
                    Go to Home
                </Button>
            </Container>
        </>
    );
}
