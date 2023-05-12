import * as React from "react";
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

export default function SwipeableTemporaryDrawer(props) {
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
          { text: "Customers", icon: <PeopleIcon /> },
          { text: "Products", icon: <ShoppingBagIcon /> },
          { text: "Vendors", icon: <LocalShippingIcon /> },
          { text: "Employees", icon: <PersonIcon /> },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
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
            <ListItemButton>
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
