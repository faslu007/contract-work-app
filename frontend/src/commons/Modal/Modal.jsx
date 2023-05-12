import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const CommonModal = (props) => {
  const { open, handleClose, header, buttonName, handleSave, children } = props;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "85vw",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: "10px",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="h3">
            {header}
          </Typography>
          <Button onClick={handleClose}>X</Button>
        </Box>
        <Box>{children}</Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            {buttonName}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CommonModal;
