import { useState, useRef, useEffect } from "react";

import {
  Typography,
  Button,
  TextField,
  Grid,
  Paper,
  Box,
  Stack,
  Divider,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import PinIcon from "@mui/icons-material/Pin";
import CustomButton from "../../commons/ButtonCustom";
import "./style.css";

import TextFieldCustom from "../../commons/Textfield";

function Login() {
  const phoneRef = useRef();
  const passwordRef = useRef();
  const [tabValue, setTabValue] = useState(1);
  const [loginInput, setLoginInput] = useState({
    phone: "",
    pin: "",
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const onValueChange = (e) => {
    let value = e.target.value;
    const name = e.target.name;

    // Replace any non-numeric characters with an empty string
    value = value.replace(/[^0-9]/g, "");

    if (name === "phone") {
      if (value.length === 10) {
        passwordRef.current.focus();
      } else if (value.length > 10) {
        value = value.slice(0, 10);
      }
    } else if (name === "pin" && value.length > 4) {
      value = value.slice(0, 4);
    }

    setLoginInput({
      ...loginInput,
      [name]: value,
    });

    if (
      name === "login-pin" &&
      value.length === 4 &&
      loginInput.phone.length === 10
    ) {
      login();
    }
  };

  const onPhoneKeyDown = (e) => {
    if (e.key.length === 1 && !/\d/.test(e.key)) {
      e.preventDefault();
    }
  };

  const login = () => {
    if (loginInput.phone.length === 9 && loginInput.pin.length === 4) {
      console.log("test");
    }
  };

  return (
    <>
      <div>
        <TabContext value={tabValue}>
          <div className="glassContainer" style={{ padding: "3px" }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              centered
              variant={"fullWidth"}
              textColor="inherit"
              sx={{
                "& .MuiTabs-indicator": {
                  bgcolor: "white",
                },
                "& .MuiTab-textColorInherit.Mui-selected": {
                  color: "white",
                },
                "& .MuiTab-textColorInherit": {
                  color: "rgba(255, 255, 255, 0.7)",
                },
                "@media (max-width: 600px)": {
                  "& .MuiTab-root": {
                    minWidth: "auto",
                  },
                },
              }}
            >
              <Tab label="Customer" />
              <Tab label="Contractor" />
              <Tab label="Employee" />
            </Tabs>
          </div>
          {/* Tab Panels */}
          <div
            className="glassContainer"
            style={{ marginTop: "25px", padding: "15px" }}
          >
            {/* <TabPanel value={0} sx={{ padding: "5px", marginLeft: "10px" }}> */}
            <Stack sx={{ marginBottom: "20px" }}>
              <Typography
                variant="h7"
                gutterBottom
                sx={{ color: "white", marginBottom: "40" }}
              >
                Login as Contractor
              </Typography>
            </Stack>
            <Stack sx={{ marginBottom: "10px" }}>
              <TextFieldCustom
                label="Phone Number"
                size="small"
                type={"number"}
                id={"login-phone"}
                name={"phone"}
                value={loginInput.phone}
                onValueChange={onValueChange}
                inputRef={phoneRef}
                onKeyDown={onPhoneKeyDown}
                startAdornment={<PermPhoneMsgIcon sx={{ color: "white" }} />}
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
                startAdornment={<PinIcon sx={{ color: "white" }} />}
              />
            </Stack>

            <Stack sx={{ marginBottom: "10px" }}>
              <CustomButton
                variant="contained"
                onClick={() => console.log("clicked")}
              >
                Login
              </CustomButton>
            </Stack>

            {/* <h4 style={{ color: "white" }}>Login as Contractor</h4> */}
            {/* </TabPanel> */}
          </div>
        </TabContext>
      </div>
    </>
  );
}

export default Login;
