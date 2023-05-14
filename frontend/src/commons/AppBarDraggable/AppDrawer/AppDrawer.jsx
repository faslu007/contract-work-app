import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import Typography from "@mui/material/Typography";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DescriptionIcon from "@mui/icons-material/Description";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";

export default function SwipeableTemporaryDrawer(props) {
  const location = useLocation();
  const navigate = useNavigate();

  function handleItemClick() {
    const str = location.pathname;
    const pathName = str.replace("/", "");
    window.alert(pathName);

    if (pathName == "dashboard") {
      window.alert("dashboard");
      navigate("/dashboard");
    } else if (pathName == "/customers") {
      window.alert("customers");
      navigate("/customers");
    }
    // if (location.pathname.toLowerCase.includes("dashboard" || "customers")) {
    //   navigate("/customers");
    // }
  }

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        bgcolor: "#ffffff",
      }}
      role="presentation"
    >
      <List>
        <Typography
          variant="h6"
          sx={{
            color: "#1f1f1f",
            fontWeight: "bold",
            pl: 2,
            py: 1,
          }}
        >
          General
        </Typography>
        {[
          { text: "Dashboard", icon: <SpaceDashboardIcon /> },
          { text: "Customers", icon: <PeopleIcon /> },
          { text: "Products", icon: <ShoppingBagIcon /> },
          { text: "Vendors", icon: <LocalShippingIcon /> },
          { text: "Employees", icon: <PersonIcon /> },
        ].map((item, index) => (
          <ListItem id={`appBarItem-${index}`} key={item.text} disablePadding>
            <ListItemButton
              id={`1appBarItem-${index}`}
              onClick={() => {
                handleItemClick();
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ color: "#4f4f4f", fontSize: 16 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <Typography
          variant="h6"
          sx={{
            color: "#1f1f1f",
            fontWeight: "bold",
            pl: 2,
            py: 1,
          }}
        >
          Transactions
        </Typography>
        {[
          { text: "Invoices", icon: <ReceiptIcon /> },
          { text: "Purchases", icon: <ShoppingCartIcon /> },
          { text: "Estimates", icon: <DescriptionIcon /> },
          { text: "Payouts", icon: <AttachMoneyIcon /> },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => {
                handleItemClick();
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ color: "#4f4f4f", fontSize: 16 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // React.useEffect(() => {
  //   const path = location.pathname;
  //   if (path === "/dashboard") {
  //   }
  // }, []);

  return (
    <div>
      <SwipeableDrawer
        key={1}
        open={props.toggle}
        onClose={() => props.toggleDrawer(false)}
      >
        {list(1)}
      </SwipeableDrawer>
    </div>
  );
}
