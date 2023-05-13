import React, { useState } from "react";
import { Snackbar, SnackbarContent, CircularProgress } from "@mui/material";

const LoadingSnackBar = (props) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      open={props.isLoading}
      message="Request in progress..."
      action={null}
    >
      <SnackbarContent
        style={{ backgroundColor: "#1D267D" }}
        message={
          <span style={{ display: "flex", alignItems: "center" }}>
            <CircularProgress
              style={{ marginRight: "8px" }}
              size={20}
              color="info"
            />
            Request failed. Please try again later.
          </span>
        }
      />
    </Snackbar>
  );
};

export default LoadingSnackBar;
