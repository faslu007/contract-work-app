import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomButtonStyle = styled(Button)({
  background: "#0052CC",
  borderRadius: 4,
  border: 0,
  color: "white",
  height: 48,
  padding: "0 30px",
  boxShadow:
    "0px 3px 1px -2px rgba(0, 82, 204, .2), 0px 2px 2px 0px rgba(0, 82, 204, .14), 0px 1px 5px 0px rgba(0, 82, 204, .12)",
  "&:hover": {
    background: "#0052CC",
    opacity: "0.8",
  },
});

const CustomButton = (props) => {
  return <CustomButtonStyle {...props} />;
};

export default CustomButton;
