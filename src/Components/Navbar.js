import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Home", "Twoway", "About", "Contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        S2S
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              {/* <ListItemText primary={item} /> */}
              <Link
                to={item}
                primary={item}
                style={{ textDecoration: "none", color: "#000" }}
              >
                {item}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        style={{
          background: "rgba(242, 247, 251, 0.25)",

          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          position: "fixed",
          zIndex: 2,
        }}
      >
        <Toolbar
          style={{
            flex: 1,
            display: "flex",
            alignSelf: "flex-start",
            flexDirection: "row",
          }}
        >
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              color: "#000",
              fontWeight: "bold",
              display: { xs: "none", sm: "block" },
            }}
          >
            ᔕ2ᔕ ᗰOᗪᑌᒪO
          </Typography>
          <Box
            sx={{ display: { xs: "none", sm: "block" } }}
            style={{ marginLeft: 200 }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "#000" }}
                style={{
                  paddingLeft: 15,
                  paddingRight: 15,
                  listStyleType: "none",
                }}
              >
                <Link
                  to={item}
                  style={{
                    color: "#000",
                    listStyleType: "none",
                    textDecoration: "none",
                  }}
                >
                  {item}
                </Link>
              </Button>
            ))}
            <Button
              sx={{ color: "#000" }}
              style={{
                paddingLeft: 15,
                paddingRight: 15,
                listStyleType: "none",
              }}
            >
              <Link
                to={"http://127.0.0.1:5000"}
                style={{
                  color: "#000",
                  listStyleType: "none",
                  textDecoration: "none",
                }}
              >
                {"OneWay"}
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" className="app__navbar">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
