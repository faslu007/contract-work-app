import { Stack, Box, Divider, Grid, Paper, Typography } from "@mui/material";
import BottomAppBar from "../../commons/bottomNav/BottomNav";
import CommonModal from "../../commons/Modal/Modal";
import { useState } from "react";
import TextFieldCustom from "../../commons/Textfield";

function Customers() {
  const [modalState, setModalState] = useState(false);

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
        <Stack sx={{ marginBottom: "10px" }}>
          <TextFieldCustom
            label="Phone Number"
            size="small"
            type={"number"}
            id={"login-phone"}
            name={"phone"}
            // value={loginInput.phone}
            // onValueChange={onValueChange}
            // inputRef={phoneRef}
            // onKeyDown={onPhoneKeyDown}
            // startAdornment={<PermPhoneMsgIcon/>
            //}
          />
        </Stack>
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
