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
  IconButton,
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

function Login() {
  const phoneRef = useRef();
  const passwordRef = useRef();
  const [tabValue, setTabValue] = useState(1);
  const [currentTabName, setCurrentTabName] = useState("Contractor");
  const tabs = {
    0: "Customer",
    1: "Contractor",
    2: "Employee",
  };
  const [loginInput, setLoginInput] = useState({
    phone: "",
    pin: "",
  });
  const [hasUserForgottenPassword, setHasUserForgottenPassword] =
    useState(false);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);

    //Update the sub header based on the tab label
    setCurrentTabName(tabs[newValue]);
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
      handleLogin();
    }
  };

  const onPhoneKeyDown = (e) => {
    if (e.key.length === 1 && !/\d/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleLogin = () => {
    navigate("/dashboard");
  };

  const handleForgotPassComponent = (event) => {
    if (event === "open") {
      const loginInput = document.querySelector(".loginInputs");
      const loginPageMaster = document.getElementById("loginPageMaster");

      if (loginInput) {
        loginInput.style.display = "none";
        loginInput.style.transition = "display 0.30s ease-in-out";
      }

      setHasUserForgottenPassword(true);
    } else if (event === "close") {
      setHasUserForgottenPassword(false);
      const loginInput = document.querySelector(".loginInputs");

      if (loginInput) {
        loginInput.style.display = "";
        loginInput.style.transition = "display 0.30s ease-in-out";
      }
    }
  };

  return (
    <>
      <div
        className="loginPage"
        id="loginPageMaster"
        style={{ padding: "10px" }}
      >
        <div className="loginInputs" style={{ marginTop: "5px" }}>
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
              <Tab label="Customer" />
              <Tab label="Contractor" />
              <Tab label="Employee" />
            </Tabs>
            {/* Tab Panels */}
            {/* <TabPanel value={0} sx={{ padding: "5px", marginLeft: "10px" }}> */}
            <Stack sx={{ marginBottom: "20px", alignContent: "center" }}>
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
                value={loginInput.phone}
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
            </Stack>
          </TabContext>
        </div>

        {hasUserForgottenPassword && (
          <div>
            <Stack sx={{ marginBottom: "20px", alignContent: "center" }}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={10}
                  sx={{ alignContent: "center", alignContent: "center" }}
                >
                  <Typography
                    variant="h7"
                    gutterBottom
                    sx={{
                      // marginTop: "10px",
                      // fontFamily: "Roboto",
                      fontWeight: 600,
                      fontSize: "20px",
                      textAlign: "center",
                      paddingTop: "10px",
                      paddingBottom: "7px",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      borderRadius: "4px",
                      marginBottom: "3px",
                      display: "inline-block",
                      verticalAlign: "middle",
                    }}
                  >
                    Forgot Pin
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <IconButton
                    onClick={() => handleForgotPassComponent("close")}
                  >
                    <CloseIcon />
                  </IconButton>
                </Grid>
              </Grid>
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
                startAdornment={<PermPhoneMsgIcon />}
              />
            </Stack>

            <Stack sx={{ marginBottom: "10px" }}>
              <TextFieldCustom
                label="OTP"
                size="small"
                type={"number"}
                value={loginInput.pin}
                id={"login-pin"}
                onValueChange={onValueChange}
                name={"pin"}
                inputRef={passwordRef}
                onKeyDown={onPhoneKeyDown}
                disabled={true}
                startAdornment={<PinIcon />}
              />
            </Stack>

            <Stack sx={{ marginBottom: "10px" }}>
              <TextFieldCustom
                label="New Pin"
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
                onClick={() => console.log("clicked")}
              >
                Request OTP
              </CustomButton>
            </Stack>
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
