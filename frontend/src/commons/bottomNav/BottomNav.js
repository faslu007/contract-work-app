import { useState, useRef, useEffect } from "react";
import {
    Typography,
    Button,
    TextField,
    Grid,
    Paper,
    Box,
    Stack,
    Link,
    Divider,
    InputAdornment,
    Skeleton,
} from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import CloseIcon from "@mui/icons-material/Close";
import PinIcon from "@mui/icons-material/Pin";
import CustomButton from "../../commons/ButtonCustom";
import "./style.css";
import { useNavigate } from "react-router-dom";
import TextFieldCustom from "../../commons/Textfield";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import SwipeableTemporaryDrawer from "../AppBarDraggable/AppDrawer/AppDrawer";

const BottomNavSubComponent = () => {
    const [tabValue, setTabValue] = useState(1);
    const [currentTabName, setCurrentTabName] = useState("Estimate");
    const tabs = {
        0: "Estimate",
        1: "Purchase",
        2: "Invoice",
    };


    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);

        //Update the sub header based on the tab label
        setCurrentTabName(tabs[newValue]);
    };

    return (
        <div className="bottomNav">
            <TabContext value={tabValue}>
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    centered
                    variant="fullWidth"
                    textColor="inherit"
                    sx={{
                        "& .MuiTabs-root": {
                            borderBottom: "1px solid rgb(62, 80, 96)",
                        },
                        "& .MuiTab-root": {
                            border: "1px solid rgb(62, 80, 96)",
                            borderRadius: 0,
                            "&:first-of-type": {
                                borderTopLeftRadius: "7px",
                                borderBottomLeftRadius: "7px",
                            },
                            "&:last-of-type": {
                                borderTopRightRadius: "7px",
                                borderBottomRightRadius: "7px",
                            },
                        },
                        "& .Mui-selected": {
                            borderColor: "#007fff",
                            borderBottomColor: "#007fff",
                            color: "#006DDB",
                            backgroundColor: "#E2EDF8",
                            fontWeight: "bold",
                        },
                        "@media (max-width: 600px)": {
                            "& .MuiTab-root": {
                                minWidth: "auto",
                                fontSize: "12px",
                                padding: "4px 8px",
                            },
                        },
                    }}
                >
                    <Tab label="Estimate" />
                    <Tab label="Purchase" />
                    <Tab label="Invoice" />
                </Tabs>
                {/* Tab Panels */}
                {/* <TabPanel value={0} sx={{ padding: "5px", marginLeft: "10px" }}> */}
                {/* <Stack sx={{ marginBottom: "20px", alignContent: "center" }}>
                    <Typography
                        variant="h7"
                        gutterBottom
                        sx={{
                            marginTop: "10px",
                            // fontFamily: "Roboto",
                            fontWeight: 600,
                            fontSize: "16px",
                            textAlign: "center",
                            paddingTop: "10px",
                            paddingBottom: "7px",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            borderRadius: "4px",
                            display: "inline-block",
                            verticalAlign: "middle",
                        }}
                    >
                        Login as{" "}
                        <span class="animated-span" style={{ color: "#006DDB" }}>
                            {currentTabName}
                        </span>
                    </Typography>
                </Stack>
                <Stack sx={{ marginBottom: "10px" }}>
                    <TextFieldCustom
                        label="Phone Number"
                        size="small"
                        type={"number"}
                        id={"login-phone"}
                        name={"phone"}
                        // value={loginInput.phone}
                        onValueChange={onValueChange}
                        inputRef={phoneRef}
                        onKeyDown={onPhoneKeyDown}
                        startAdornment={<PermPhoneMsgIcon />}
                    />
                </Stack>

                <Stack sx={{ marginBottom: "10px" }}>
                    <TextFieldCustom
                        label="Login PIN (4 digit)"
                        size="small"
                        type={"number"}
                        value={loginInput.pin}
                        id={"login-pin"}
                        onValueChange={onValueChange}
                        name={"pin"}
                        inputRef={passwordRef}
                        onKeyDown={onPhoneKeyDown}
                        startAdornment={<PinIcon />}
                    />
                </Stack>

                <Stack sx={{ marginBottom: "10px" }}>
                    <CustomButton
                        variant="contained"
                        onClick={() => {
                            handleLogin();
                        }}
                    >
                        Login
                    </CustomButton>
                </Stack>

                <Stack sx={{ marginBottom: "3px", alignItems: "center" }}>
                    <Link
                        href="#"
                        onClick={() => handleForgotPassComponent("open")}
                        style={{
                            textDecoration: "none",
                            fontSize: "14px",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        Forgot Pin
                    </Link>
                </Stack> */}
            </TabContext>
        </div>
    )
}
// export default BottomNavSubComponent



const messages = [
    {
        id: 1,
        primary: 'Brunch this week?',
        secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
        person: '/static/images/avatar/5.jpg',
    },
    {
        id: 2,
        primary: 'Birthday Gift',
        secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 3,
        primary: 'Recipe to try',
        secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
        person: '/static/images/avatar/2.jpg',
    },
    {
        id: 4,
        primary: 'Yes!',
        secondary: 'I have the tickets to the ReactConf for this year.',
        person: '/static/images/avatar/3.jpg',
    },
    {
        id: 5,
        primary: "Doctor's Appointment",
        secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
        person: '/static/images/avatar/4.jpg',
    },
    {
        id: 6,
        primary: 'Discussion',
        secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
        person: '/static/images/avatar/5.jpg',
    },
    {
        id: 7,
        primary: 'Summer BBQ',
        secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
        person: '/static/images/avatar/1.jpg',
    },
];

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -100,
    left: 250,
    right: 0,
    margin: '0 auto',
});

export default function BottomAppBar(props) {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <React.Fragment>
            <SwipeableTemporaryDrawer toggle={toggle} toggleDrawer={setToggle} />
            <CssBaseline />
            {/* <Paper square sx={{ pb: '50px' }}>
                <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
                    Inbox
                </Typography>
                <List sx={{ mb: 2 }}>
                    {messages.map(({ id, primary, secondary, person }) => (
                        <React.Fragment key={id}>
                            {id === 1 && (
                                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                                    Today
                                </ListSubheader>
                            )}

                            {id === 3 && (
                                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                                    Yesterday
                                </ListSubheader>
                            )}

                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar alt="Profile Picture" src={person} />
                                </ListItemAvatar>
                                <ListItemText primary={primary} secondary={secondary} />
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </Paper> */}
            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, height: '4%%' }}>
                <Toolbar>
                    <BottomNavSubComponent />
                    {/* <IconButton color="inherit" aria-label="open drawer">
                        <MenuIcon />
                    </IconButton> */}
                    <StyledFab color="primary" aria-label="add" onClick={props.onClick}>
                        <AddIcon />
                    </StyledFab>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton color="inherit">
                        <MarkChatUnreadIcon />
                    </IconButton>
                    <IconButton color="inherit" onClick={handleToggle}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
