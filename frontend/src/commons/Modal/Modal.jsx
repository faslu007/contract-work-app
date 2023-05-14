import React from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CommonModal = (props) => {
  const { open, handleClose, header, buttonName, handleSave, children } = props;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      BackdropComponent={Box}
      sx={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "85vw",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: "10px",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0px",
            padding: "0px",
          }}
        >
          <Typography variant="h6" component="h3">
            {header}
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider variant="middle" />

        <Box>{children}</Box>
        {props.showFooter && (
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" onClick={handleSave}>
              {buttonName}
            </Button>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default CommonModal;
