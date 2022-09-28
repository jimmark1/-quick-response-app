import React from "react";
import { useNavigate } from "react-router-dom";

import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

import {
  Button,
  Grid,
  TextField,
  Stack,
  Box,
  //   CircularProgress,
  FormControl,
  FormLabel,
  Container,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Register = () => {
  const navigate = useNavigate();

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[900]),
    borderRadius: 10,
    backgroundColor: "#111928",
    "&:hover": {
      backgroundColor: grey[800],
    },
  }));

  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "Poppins",
        spacing: 2,
      },
    },
  });

  return (
    <div>
      <Container maxWidth="xl" style={{ backgroundColor: "#F2F2F9" }}>
        <ThemeProvider theme={theme}>
          <Grid
            container
            spacing={2}
            direction={"column"}
            justifyContent="center"
            alignContent={"center"}
            style={{ minHeight: "100vh", marginTop: "0px" }}
          >
            <Box
              sx={{
                width: 750,
                height: "80vh",
                padding: 5,
                borderRadius: 10,
                backgroundColor: "#ffff",
                boxShadow: 2,
              }}
            >
              <Stack direction={"column"} spacing={2} justifyContent="center">
                <h1 style={{ marginBottom: "1px" }}>
                  <b>Sign Up</b>
                </h1>
                <p style={{ marginTop: "0px" }}>
                  This is your first step with us!
                </p>
                <Stack>
                  <FormControl>
                    <Box
                      sx={{ display: "inline-flex" }}
                      style={{ marginBottom: "10px" }}
                    >
                      <TextField
                        variant="outlined"
                        label="Firstname"
                        style={{ width: "250px", margin: "2.5px" }}
                      />
                      <TextField
                        fullWidth
                        variant="outlined"
                        label="Middlename"
                        style={{ width: "250px", margin: "2.5px" }}
                      />
                      <TextField
                        fullWidth
                        variant="outlined"
                        label="Lastname"
                        style={{ width: "250px", margin: "2.5px" }}
                      />
                    </Box>
                  </FormControl>
                  <Box
                    sx={{ display: "inline-flex" }}
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                  >
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Email"
                      type={"email"}
                    />
                  </Box>
                  <FormControl>
                    <Box
                      sx={{ display: "inline-flex" }}
                      style={{ marginTop: "10px", marginBottom: "10px" }}
                    >
                      <TextField
                        fullWidth
                        variant="outlined"
                        label="ID number"
                        type={"number"}
                        style={{ margin: "2.5px" }}
                      />
                      <TextField
                        fullWidth
                        variant="outlined"
                        label="Password"
                        type={"password"}
                        style={{ margin: "2.5px" }}
                      />
                    </Box>
                  </FormControl>
                </Stack>
                <Stack>
                  <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">
                      Account Type
                    </FormLabel>
                    <FormControl>
                      <Box
                        sx={{ display: "inline-flex" }}
                        style={{
                          marginTop: "10px",
                          marginBottom: "30px",
                          overflow: "hidden",
                          height: "40px",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      >
                        <input
                          className="radio__input"
                          type={"radio"}
                          value="Student"
                          name="radio"
                          id="student"
                          defaultChecked
                        ></input>
                        <label className="radio__label" htmlFor={"student"}>
                          I am a Student
                        </label>
                        <input
                          className="radio__input"
                          type={"radio"}
                          value="Student"
                          name="radio"
                          id="teacher"
                        ></input>
                        <label className="radio__label" htmlFor={"teacher"}>
                          I am a Teacher
                        </label>
                      </Box>
                    </FormControl>
                  </FormControl>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* <CircularProgress /> */}
                  </Box>

                  <ColorButton
                    fullWidth
                    variant="contained"
                    size="large"
                    style={{ marginBottom: "20px" }}
                  >
                    Create Account
                  </ColorButton>
                </Stack>
              </Stack>
              <Box style={{ textAlign: "center", marginTop: "15px" }}>
                <label
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/login")}
                >
                  Already have an account? Login
                </label>
              </Box>
            </Box>
          </Grid>
        </ThemeProvider>
      </Container>
    </div>
  );
};

export default Register;
