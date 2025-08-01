import { Box, Typography, Stack, CardContent, Card } from "@mui/material";

import { SocialIconButton } from "@/components/SocialIconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { LabelValue } from "@/components/LabelValue";
import { DataArrayTwoTone } from "@mui/icons-material";

export const ProfileCard = ({ data }) => {
    return (
        <Card
    sx={{
        flexGrow: 1,
        flexBasis: {
            xs: "100%",
            sm: "35%",
            md: "30%",
        },
        minWidth: 280,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        py: 4,
        backgroundColor: "#f4f6f8", // light gray background
        borderRadius: 4,
        boxShadow: 3,
    }}
>
    <CardContent>
        <Stack spacing={2} alignItems="center">
            {/* PROFILE IMAGE */}
            <Box
                component="img"
                src={data.picture ? `/${data.picture}` : "/Images/baybay-logo.png"}
                sx={{
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    objectFit: "cover",
                    boxShadow: 4,
                    border: "4px solid #fff",
                }}
                onError={(e) => (e.target.src = "/Images/baybay-logo.png")}
            />

            {/* NAME */}
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1a202c" }}>
                {data.name}
            </Typography>

            {/* INFO */}
            <Stack spacing={1} sx={{ width: "100%", maxWidth: 300 }}>
                <LabelValue label="Employee Number" value={data.employment_number} />
                <LabelValue
                    label="Department"
                    value={
                        data.department?.department_name?.split("-")[1] ||
                        data.department?.department_name
                    }
                />
                <LabelValue label="Email" value={data.email} />
                <LabelValue label="Contact Number" value={data.contact_number} />
            </Stack>

            {/* SOCIAL ICONS */}
            <Stack direction="row" spacing={1} mt={2}>
                <SocialIconButton href={data.facebook_account} icon={<FacebookIcon />} color="#1877F2" />
                <SocialIconButton href={data.facebook_account} icon={<InstagramIcon />} color="#E4405F" />
                <SocialIconButton href={data.facebook_account} icon={<LinkedInIcon />} color="#0077B5" />
            </Stack>
        </Stack>
    </CardContent>
</Card>

    );
};
