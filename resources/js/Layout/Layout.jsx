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
  BottomNavigation,
  BottomNavigationAction,
  useMediaQuery,
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
  { text: "Settings", href: "/profile", icon: <SettingsIcon />, menu: true },
];

export default function Layout({ children }) {
  const { url } = usePage();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = useState(false);
  const [bottomNavValue, setBottomNavValue] = useState(url);

  const handleToggle = () => setOpen(!open);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CssBaseline />

      {/* Sidebar Drawer for Desktop */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", py: 2 }}>
            <img src="/Images/baybay-logo.png" alt="Logo" width={80} />
          </Box>
          <Toolbar />
          <List>
            {navLinks.filter(i => !i.menu).map(item => (
              <ListItem key={item.text} disablePadding selected={url === item.href}>
                <ListItemButton component={Link} href={item.href}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}

            {/* Dropdown for Settings */}
            <Dropdown>
              <Dropdown.Trigger>
                <ListItemButton onClick={handleToggle}>
                  <ListItemIcon><SettingsIcon /></ListItemIcon>
                  <ListItemText primary="Settings" />
                  <KeyboardArrowDownIcon
                    sx={{
                      transition: "transform 0.3s ease",
                      transform: open ? "rotate(180deg)" : "rotate(0deg)",
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

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: !isMobile ? `${drawerWidth}px` : 0,
          pb: isMobile ? 7 : 3,
        }}
      >
        {children}
      </Box>

      {/* Bottom Navigation for Mobile */}
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
          }}
        >
          {navLinks.map(item => (
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
