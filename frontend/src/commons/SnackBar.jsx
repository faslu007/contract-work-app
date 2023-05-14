import React from "react";
import { Snackbar, SnackbarContent, CircularProgress } from "@mui/material";

const LoadingSnackBar = (props) => {
  const { isLoading, type } = props;

  let message = "Request in progress...";
  let backgroundColor = "#AAC8A7";

  switch (type) {
    case "loading":
      message = "Your request is in process.";
      backgroundColor = "#1D267D";
      break;
    case "error":
      message = "Request failed. Please try again later.";
      backgroundColor = "#E76161";
      break;
    case "success":
      message = "Success.";
      break;
    default:
      break;
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      open={isLoading}
      action={null}
    >
      <SnackbarContent
        style={{ backgroundColor }}
        message={
          <span style={{ display: "flex", alignItems: "center" }}>
            <CircularProgress
              style={{ marginRight: "8px" }}
              size={20}
              color="info"
            />
            {message}
          </span>
        }
      />
    </Snackbar>
  );
};

export default LoadingSnackBar;
