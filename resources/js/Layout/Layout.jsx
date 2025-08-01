import {
  Box,
  CssBaseline,
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  BottomNavigation,
  BottomNavigationAction,
  useMediaQuery,
  Divider,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Dropdown from "@/components/Dropdown";

const drawerWidth = 240;

const navLinks = [
  { text: "Dashboard", href: "/dashboard", icon: <DashboardIcon /> },
  { text: "Employees", href: "/employees", icon: <PeopleIcon /> },
];

export default function Layout({ children }) {
  const { url } = usePage();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [bottomNavValue, setBottomNavValue] = useState(url);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CssBaseline />

      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              bgcolor: "#ffffff",
              borderRight: "none",
              boxShadow: "3px 0 10px rgba(0,0,0,0.1)",
            },
          }}
        >
          <Toolbar sx={{ justifyContent: "center", py: 2 }}>
            <img src="/Images/baybay-logo.png" alt="Logo" width={60} />
          </Toolbar>
          <Divider />
          <List>
            {navLinks.map((item) => (
              <ListItemButton
                key={item.text}
                component={Link}
                href={item.href}
                selected={url.startsWith(item.href)}
                sx={{
                  borderRadius: 2,
                  mx: 1,
                  mb: 1,
                  transition: "0.3s",
                  "&.Mui-selected": {
                    bgcolor: "primary.light",
                    color: "white",
                    "&:hover": { bgcolor: "primary.main" },
                  },
                }}
              >
                <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            ))}

            <Dropdown>
              <Dropdown.Trigger>
                <ListItemButton
                  onClick={() => setSettingsOpen(!settingsOpen)}
                  sx={{ borderRadius: 2, mx: 1 }}
                >
                  <ListItemIcon><SettingsIcon /></ListItemIcon>
                  <ListItemText primary="Settings" />
                  <KeyboardArrowDownIcon
                    sx={{
                      transition: "transform 0.3s ease",
                      transform: settingsOpen ? "rotate(180deg)" : "rotate(0deg)",
                      ml: "auto",
                    }}
                  />
                </ListItemButton>
              </Dropdown.Trigger>
              <Dropdown.Content className="w-full bg-white border border-gray-200 rounded-md shadow-md">
                <Dropdown.Link href={route("profile.edit")} className="text-gray-700 hover:bg-gray-100">
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
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: 3,
          pt: 3,
          pb: isMobile ? 7 : 3,
          ml: !isMobile ? `${drawerWidth}px` : 0,
          bgcolor: "#f5f7fa",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 3,
            borderRadius: 3,
            bgcolor: "white",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
            minHeight: "calc(100vh - 100px)",
          }}
        >
          {children}
        </Paper>
      </Box>

      {isMobile && (
        <BottomNavigation
          showLabels={false}
          value={bottomNavValue}
          onChange={(event, newValue) => setBottomNavValue(newValue)}
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            borderTop: "1px solid #ccc",
            zIndex: 1300,
            bgcolor: "#fff",
            boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {[...navLinks, { text: "Settings", href: "#", icon: <SettingsIcon /> }].map((item) => (
            <BottomNavigationAction
              key={item.text}
              label={item.text}
              icon={item.icon}
              component={Link}
              href={item.href}
              value={item.href}
            />
          ))}
        </BottomNavigation>
      )}
    </Box>
  );
}
