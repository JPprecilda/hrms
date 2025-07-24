import { Box, Typography, Stack, CardContent, Card } from "@mui/material";

import { SocialIconButton } from "@/components/SocialIconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const ProfileCard = ({ data }) => {
    return (
        <Card
            sx={{
                flexGrow: 1,
                flexBasis: {
                    xs: "100%", // full width on mobile
                    sm: "40%", // 40% on small screens
                    md: "30%", // 30% on medium screens
                },
                minWidth: 280,
                maxWidth: 350,
                display: "flex",
                flexDirection: "column",
                height: 600,
            }}
        >
            <CardContent>
                <Stack spacing={1}>
                    <Box
                        component="img"
                        src={
                            data.picture
                                ? `/${data.picture}`
                                : "Images/baybay-logo.png"
                        }
                        sx={{
                            width: "100%",
                            height: "auto",
                            maxWidth: 250,
                        }}
                    />
                    <Typography variant="h5">{data.name}</Typography>
                    <Box sx={{ maxWidth: "300px" }}>
                        <Typography variant="body1" noWrap>
                            {data.employment_number}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Employee Number
                        </Typography>
                    </Box>
                    <Box sx={{ maxWidth: "300px" }}>
                        <Typography variant="body1" noWrap>
                            {data.department?.department_name?.split(
                                "-"
                            )[1] || data.department?.department_name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Department
                        </Typography>
                    </Box>
                    <Box sx={{ maxWidth: "300px" }}>
                        <Typography variant="body1" noWrap>
                            {data.email}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Email
                        </Typography>
                    </Box>

                    <Box sx={{ maxWidth: "200px" }}>
                        <Typography variant="body1" noWrap>
                            {data.contact_number}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Contact Number
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", gap: 2 }}>
                        <SocialIconButton
                            title="View Facebook Profile"
                            href={data.facebook_account}
                            icon={<FacebookIcon />}
                            color="#1877F2"
                        />
                        <SocialIconButton
                            title="View Facebook Profile"
                            href={data.facebook_account}
                            icon={<InstagramIcon />}
                            color="#E4405F"
                        />
                        <SocialIconButton
                            title="View Facebook Profile"
                            href={data.facebook_account}
                            icon={<LinkedInIcon />}
                            color="#0077B5"
                        />
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
};
