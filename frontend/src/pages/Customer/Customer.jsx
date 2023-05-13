import {
  Stack,
  Box,
  Divider,
  Grid,
  Item,
  MenuItem,
  Paper,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";
import BottomAppBar from "../../commons/bottomNav/BottomNav";
import CommonModal from "../../commons/Modal/Modal";
import { useEffect, useRef, useState } from "react";
import TextFieldCustom from "../../commons/Textfield";
import axios from "axios";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CustomButton from "../../commons/ButtonCustom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import countryCodes from "../../utils,js/constants";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerCustomer } from "../../features/customer/customerReducer";

function Customers() {
  const dispatch = useDispatch();
  const { customer, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.customer
  );
  const [modalState, setModalState] = useState(false);
  const [userInput, setUserInput] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    role: "",
    phone: "",
    countryCode: "+91",
  });
  const [currentFormStep, setCurrentFormStep] = useState(1);

  const [steps, setSteps] = useState(["First Name", "Last Name", "Phone"]);
  const [formCompleteIndication, setFormCompleteIndication] = useState(0);

  const firstNameInputRef = useRef();
  const phoneInputRef = useRef();

  useEffect(() => {
    if (userInput.firstName.length >= 2) {
      setFormCompleteIndication(1);
    }
    if (userInput.lastName.length >= 2 && userInput.firstName.length >= 2) {
      setFormCompleteIndication(2);
    }
    if (
      userInput.phone.length >= 10 &&
      userInput.lastName.length >= 2 &&
      userInput.firstName.length >= 2
    ) {
      setFormCompleteIndication(3);
    }
  }, [userInput]);

  function handleClose() {
    setModalState(false);
  }

  const reset = [...steps];

  function handleInputChange(event) {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });

    if (event.target.name === "firstName") {
      setSteps([event.target.value || "First Name", steps[1], steps[2]]);
    } else if (event.target.name === "lastName") {
      setSteps([steps[0], event.target.value || "Last Name", steps[2]]);
    } else if (event.target.name === "phone") {
      setSteps([steps[0], steps[1], event.target.value || "Phone"]);
    }
  }

  const handleNextIconClick = (direction) => {
    if (direction === "forward") {
      if (currentFormStep < 3) {
        setCurrentFormStep(currentFormStep + 1);
        setTimeout(() => {
          phoneInputRef.current.focus();
        }, 800);
      }
    } else {
      setCurrentFormStep(currentFormStep - 1);
      setTimeout(() => {
        firstNameInputRef.current.focus();
      }, 500);
    }
  };

  const handleSubmit = () => {
    dispatch(
      registerCustomer({
        firstName: userInput.firstName,
        lastName: userInput.lastName,
        role: "customer",
        phone: userInput.phone,
        communicationPhone: userInput.phone,
        countryCode: "+91",
      })
    );
    setModalState(false);
  };

  if (isLoading) {
    toast.info("Creating new customer...");
  } else if (isSuccess) {
    toast.success("Customer created successfully.");
  } else if (isError) {
    toast.error("Error in creating customer.");
  }

  return (
    <>
      <BottomAppBar onClick={() => setModalState(true)} />
      <CommonModal
        open={modalState}
        handleClose={handleClose}
        header="Add new Customer"
        buttonName="Save"
        handleSave={handleSubmit}
        showFooter={false}
      >
        <Stack sx={{ marginBottom: "20px", alignContent: "center" }}>
          {/* <Typography
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
            <span class="animated-span" style={{ color: "#006DDB" }}></span>
          </Typography> */}
        </Stack>
        {currentFormStep === 1 && (
          <Stack
            sx={{ marginBottom: "10px" }}
            direction={"row"}
            // divider={<Divider orientation="vertical" flexItem />}
            spacing={1}
          >
            <TextFieldCustom
              label="First Name"
              size="small"
              type={"text"}
              id={"addCustForm-firstName"}
              name={"firstName"}
              value={userInput.firstName}
              onValueChange={handleInputChange}
              inputRef={firstNameInputRef}
              // onKeyDown={onPhoneKeyDown}
              // startAdornment={<PermPhoneMsgIcon/>
              //}
            />

            <TextFieldCustom
              label="Last Name"
              size="small"
              type={"text"}
              id={"addCustForm-lastName"}
              value={userInput.lastName}
              name={"lastName"}
              onValueChange={handleInputChange}
              // inputRef={phoneRef}
              // onKeyDown={onPhoneKeyDown}
              // startAdornment={<PermPhoneMsgIcon/>
              //}
            />
          </Stack>
        )}

        {currentFormStep === 2 && (
          <Stack
            sx={{ marginBottom: "10px", width: "100%" }}
            direction={"row"}
            spacing={1}
          >
            <TextField
              select
              label="Country Code"
              value={userInput.countryCode}
              onChange={handleInputChange}
              name="countryCode"
              // helperText="Please select your country code"
              sx={{ width: "30%" }}
            >
              {countryCodes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Phone Number"
              type="tel"
              value={userInput.phone}
              inputRef={phoneInputRef}
              onChange={handleInputChange}
              // helperText="Please enter your phone number"
              sx={{ width: "70%" }}
              name="phone"
            />
          </Stack>
        )}

        <Grid container spacing={0}>
          <Grid item xs={10}>
            <Box sx={{ width: "100%", marginBottom: "4PX" }}>
              <Stepper activeStep={formCompleteIndication} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box sx={{ width: "100%", marginBottom: "4PX" }}>
              {currentFormStep >= 2 && (
                <>
                  <IconButton>
                    <ArrowBackIosIcon
                      fontSize="small"
                      color="primary"
                      onClick={() => {
                        handleNextIconClick("backward");
                      }}
                    />
                  </IconButton>
                  {formCompleteIndication === 3 && (
                    <IconButton>
                      <SendIcon
                        fontSize="large"
                        color="primary"
                        onClick={() => {
                          handleSubmit();
                        }}
                      />
                    </IconButton>
                  )}
                </>
              )}
              {currentFormStep <= 1 && (
                <IconButton>
                  <NavigateNextIcon
                    fontSize="large"
                    color="primary"
                    onClick={() => handleNextIconClick("forward")}
                  />
                </IconButton>
              )}
            </Box>
          </Grid>
        </Grid>
      </CommonModal>

      <Box sx={{ width: "100%", height: "100%" }}>
        <Paper
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            p: 2,
            pt: "70px",
            overflowY: "auto",
            zIndex: 1,
            boxShadow: 5,
          }}
        >
          <Typography variant="h6" sx={{ fontSize: "20px" }} gutterBottom>
            Customers
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Important Customers
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1">
                  John Doe - john.doe@example.com
                </Typography>
                <Typography variant="body1">
                  Jane Doe - jane.doe@example.com
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  New Customers
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1">
                  Michael Smith - michael.smith@example.com
                </Typography>
                <Typography variant="body1">
                  Emma Johnson - emma.johnson@example.com
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0, 0, 0, 0.5)",
            zIndex: 0,
          }}
        />
      </Box>
    </>
  );
}

export default Customers;
