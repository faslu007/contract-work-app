import { useState, useEffect } from "react";
import "./style.css";
import { Stack, Typography, Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PaidTwoToneIcon from "@mui/icons-material/PaidTwoTone";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BottomAppBar from "../../commons/bottomNav/BottomNav";
// import BottomAppBar from "../../commons/AppBarDraggable/AppBarDraggable";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const accChange = (card) => (e, isOpen) => {
    setOpen(isOpen ? card : false);
  };

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
  ];

  return (
    <>
      <BottomAppBar />
      <div>{/* <BottomNav /> */}</div>
      <div className="container-dashboard">
        <div className="row-1">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Stack
                sx={{
                  border: "1px solid #66adf5",
                  borderRadius: "10px",
                  margin: "4px",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    // marginTop: "10px",
                    // fontFamily: "Roboto",
                    fontWeight: 600,
                    fontSize: "30px",
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
                  Hello User!
                </Typography>
                <Typography
                  variant="v8"
                  sx={{
                    marginLeft: "20px",
                    marginTop: "-10px",
                    marginBottom: "5px",
                  }}
                >
                  Logged in as a{" "}
                  <span className="animated-span" style={{ fontWeight: "500" }}>
                    Contractor
                  </span>
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <div
                style={{
                  border: "1px solid #66adf5",
                  borderRadius: "10px",
                  margin: "4px",
                  alignItems: "flex-start",
                }}
              >
                <Stack>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      // fontSize: "25px",
                      textAlign: "center",
                      // paddingTop: "10px",
                      paddingBottom: "7px",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      borderRadius: "4px",
                      marginBottom: "3px",
                      display: "flex",
                    }}
                  >
                    Account Summery
                  </Typography>
                </Stack>
                <Stack sx={{ padding: "10px" }}>
                  <Accordion sx={{ borderRadius: "15px" }}>
                    <AccordionSummary
                      // sx={{ backgroundColor: "#C1D0B5" }}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3a-content"
                      id="panel3a-header"
                    >
                      <PaidTwoToneIcon
                        sx={{ marginRight: "5px", color: "white" }}
                      />
                      <Typography>Payments</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Total Payment since May 1 - <span>$2000.00</span>
                      </Typography>

                      <TableContainer component={Paper}>
                        <Table
                          sx={{
                            minWidth: "auto",
                            border: "1px solid #e0e0e0",
                            borderRadius: "5px",
                            overflow: "hidden",
                          }}
                          aria-label="caption table"
                        >
                          <TableHead sx={{ backgroundColor: "#f2f2f2" }}>
                            <TableRow>
                              <TableCell sx={{ fontWeight: "bold" }}>
                                Customer
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{ fontWeight: "bold" }}
                              >
                                Invoice#
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{ fontWeight: "bold" }}
                              >
                                Payment
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{ fontWeight: "bold" }}
                              >
                                Balance
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row) => (
                              <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                  {row.name}
                                </TableCell>
                                <TableCell align="right">
                                  {row.calories}
                                </TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ borderRadius: "15px" }}>
                    <AccordionSummary
                      // sx={{ backgroundColor: "#C1D0B5" }}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3a-content"
                      id="panel3a-header"
                    >
                      <PaidTwoToneIcon
                        sx={{ marginRight: "5px", color: "white" }}
                      />
                      <Typography>Recievable</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Total Payment since May 1 - <span>$2000.00</span>
                      </Typography>

                      <TableContainer component={Paper}>
                        <Table
                          sx={{
                            minWidth: "auto",
                            border: "1px solid #e0e0e0",
                            borderRadius: "5px",
                            overflow: "hidden",
                          }}
                          aria-label="caption table"
                        >
                          <TableHead sx={{ backgroundColor: "#f2f2f2" }}>
                            <TableRow>
                              <TableCell sx={{ fontWeight: "bold" }}>
                                Customer
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{ fontWeight: "bold" }}
                              >
                                Invoice#
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{ fontWeight: "bold" }}
                              >
                                Payment
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{ fontWeight: "bold" }}
                              >
                                Balance
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row) => (
                              <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                  {row.name}
                                </TableCell>
                                <TableCell align="right">
                                  {row.calories}
                                </TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ borderRadius: "15px" }}>
                    <AccordionSummary
                      // sx={{ backgroundColor: "#C1D0B5" }}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3a-content"
                      id="panel3a-header"
                    >
                      <PaidTwoToneIcon
                        sx={{ marginRight: "5px", color: "white" }}
                      />
                      <Typography>Payable</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Total Payment since May 1 - <span>$2000.00</span>
                      </Typography>

                      <TableContainer component={Paper}>
                        <Table
                          sx={{
                            minWidth: "auto",
                            border: "1px solid #e0e0e0",
                            borderRadius: "5px",
                            overflow: "hidden",
                          }}
                          aria-label="caption table"
                        >
                          <TableHead sx={{ backgroundColor: "#f2f2f2" }}>
                            <TableRow>
                              <TableCell sx={{ fontWeight: "bold" }}>
                                Customer
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{ fontWeight: "bold" }}
                              >
                                Invoice#
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{ fontWeight: "bold" }}
                              >
                                Payment
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{ fontWeight: "bold" }}
                              >
                                Balance
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row) => (
                              <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                  {row.name}
                                </TableCell>
                                <TableCell align="right">
                                  {row.calories}
                                </TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </AccordionDetails>
                  </Accordion>
                </Stack>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
