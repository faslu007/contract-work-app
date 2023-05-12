import React from "react";
import { TextField, Stack, InputAdornment } from "@mui/material";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import PinIcon from "@mui/icons-material/Pin";

const TextFieldCustom = ({
  label,
  size,
  type,
  startAdornment,
  onValueChange,
  error,
  errorMessage,
  id,
  name,
  inputRef,
  onKeyDown,
  value,
  disabled,
}) => {
  return (
    <Stack sx={{ marginBottom: "10px" }}>
      <TextField
        hiddenLabel
        label={label}
        variant="outlined"
        value={value}
        type={type}
        onChange={onValueChange}
        name={name}
        id={id}
        inputRef={inputRef}
        disabled={disabled}
        onKeyDown={onKeyDown ?? ""}
        // sx={{
        //   "& .MuiInputLabel-root": {
        //     color: "white",
        //   },
        //   "& .MuiOutlinedInput-root": {
        //     "& fieldset": {
        //       borderColor: "white",
        //     },
        //     "&.Mui-focused fieldset": {
        //       borderColor: "white",
        //     },
        //     "& .MuiInputBase-input": {
        //       color: "white",
        //     },
        //     "& .MuiInputAdornment-root": {
        //       color: "white",
        //     },
        //     "& .MuiOutlinedInput-notchedOutline": {
        //       borderColor: "white",
        //     },
        //   },
        // }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ),
          ...(type === "number" && {
            inputMode: "numeric",
            pattern: "[0-9]*",
          }),
        }}
        error={error}
        helperText={errorMessage}
        // InputLabelProps={{
        //   className: "white-label",
        // }}
      />
    </Stack>
  );
};

export default TextFieldCustom;
