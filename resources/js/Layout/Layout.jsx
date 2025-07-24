import {
    Box,
    Drawer,
    Toolbar,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    CssBaseline,
} from "@mui/material";
import { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { Link, usePage } from "@inertiajs/react";
import Dropdown from "@/components/Dropdown";

const drawerWidth = 240;

const navLinks = [
    { text: "Dashboard", href: "/dashboard", icon: <DashboardIcon /> },
    { text: "Employees", href: "/employees", icon: <PeopleIcon /> },
    // { text: "Departments", href: "/departments", icon: <BusinessIcon /> },
    {
        text: "Profile",
        href: "/profile",
        icon: <SettingsIcon />,
        menu: true,
    },
];

export default function Layout({ children }) {
    const { url } = usePage();

    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen(!open);

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />

            {/* SideNav Drawer */}
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        py: 2,
                        color: "#fff",
                    }}
                >
                    <img src="/Images/baybay-logo.png" alt="Logo" width={80} />
                </Box>
                <Toolbar />
                <List>
                    {navLinks
                        .filter((i) => !i.menu)
                        .map((item) => (
                            <ListItem
                                key={item.text}
                                disablePadding
                                selected={url === item.href}
                            >
                                <ListItemButton
                                    component={Link}
                                    href={item.href}
                                >
                                    <ListItemIcon
                                        sx={{ color: "primary.main" }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    <Dropdown>
                        <Dropdown.Trigger>
                            <ListItemButton>
                                <ListItemIcon sx={{ color: "primary.main" }}>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Settings" />
                                <KeyboardArrowDownIcon
                                    sx={{
                                        transition: "transform 0.3s ease",
                                        transform: open
                                            ? "rotate(180deg)"
                                            : "rotate(0deg)",
                                        color: "primary.main",
                                    }}
                                />
                            </ListItemButton>
                        </Dropdown.Trigger>

                        <Dropdown.Content className="bg-white border border-gray-200 rounded-md shadow-md">
                            <Dropdown.Link
                                href={route("profile.edit")}
                                className="text-gray-700 hover:bg-gray-100"
                            >
                                Profile
                            </Dropdown.Link>

                            <Dropdown.Link
                                href={route("logout")}
                                method="post"
                                as="button"
                                className="text-gray-700 hover:bg-gray-100"
                            >
                                Log Out
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </List>
            </Drawer>

            {/* Main content area */}
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, bgcolor: "background.default" }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}
