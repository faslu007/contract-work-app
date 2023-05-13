import {
  Stack,
  Box,
  Divider,
  Grid,
  Item,
  Paper,
  Typography,
} from "@mui/material";
import BottomAppBar from "../../commons/bottomNav/BottomNav";
import CommonModal from "../../commons/Modal/Modal";
import { useEffect, useState } from "react";
import TextFieldCustom from "../../commons/Textfield";
import axios from "axios";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

function Customers() {
  const [modalState, setModalState] = useState(false);
  const [userInput, setUserInput] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    role: "",
    phone: "",
  });

  const steps = ["First Name", "Last Name", "Phone"];

  function handleClose() {
    setModalState(false);
  }

  function handleSave() {
    setModalState(false);
  }
  return (
    <>
      <BottomAppBar onClick={() => setModalState(true)} />
      <CommonModal
        open={modalState}
        handleClose={handleClose}
        header="Add new Customer"
        buttonName="Save"
        handleSave={handleSave}
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
            name={"phone"}
            // value={loginInput.phone}
            // onValueChange={onValueChange}
            // inputRef={phoneRef}
            // onKeyDown={onPhoneKeyDown}
            // startAdornment={<PermPhoneMsgIcon/>
            //}
          />

          <TextFieldCustom
            label="Last Name"
            size="small"
            type={"text"}
            id={"addCustForm-lastName"}
            name={"phone"}
            // value={loginInput.phone}
            // onValueChange={onValueChange}
            // inputRef={phoneRef}
            // onKeyDown={onPhoneKeyDown}
            // startAdornment={<PermPhoneMsgIcon/>
            //}
          />
        </Stack>

        <Stack
          sx={{ marginBottom: "10px" }}
          direction={"row"}
          // divider={<Divider orientation="vertical" flexItem />}
          spacing={1}
        ></Stack>

        <Grid container spacing={0}>
          <Grid item xs={10}>
            <Box sx={{ width: "100%", marginBottom: "4PX" }}>
              <Stepper activeStep={1} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <div>Test</div>
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
