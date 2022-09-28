import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { Box, Button, Stack, TextField, Container, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import teaching from "../image/teaching.svg";

const Login = () => {
  const navigate = useNavigate();

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[900]),
    borderRadius: 10,
    backgroundColor: grey[900],
    "&:hover": {
      backgroundColor: grey[800],
    },
  }));

  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "Poppins",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" style={{ backgroundColor: "#F2F2F9" }}>
          <Grid
            container
            spacing={0}
            direction={"column"}
            justifyContent="center"
            alignContent={"center"}
            style={{ minHeight: "100vh" }}
          >
            <Stack direction="row">
              <Box
                sx={{
                  width: 540,
                  height: 600,
                  backgroundColor: "#ffff",
                  borderTopLeftRadius: 30,
                  borderBottomLeftRadius: 30,
                  boxShadow: 2,
                }}
              >
                <Stack direction="column" sx={{ height: 500, padding: 5 }}>
                  <h1 style={{ marginBottom: "1px" }}>Login</h1>
                  <p style={{ marginTop: "0px" }}>Already Have an account?</p>
                  <Stack spacing={2} sx={{ marginY: 5, marginX: 5 }}>
                    <TextField
                      label="Email"
                      variant="filled"
                      type={"email"}
                      fullWidth
                    />
                    <TextField
                      label="Password"
                      variant="filled"
                      fullWidth
                      type={"password"}
                    />
                    <Stack style={{ marginLeft: "auto" }}>
                      <label
                        variant="text"
                        size="small"
                        style={{
                          width: "140px",
                          cursor: "pointer",
                        }}
                      >
                        Forgot Password?
                      </label>
                    </Stack>
                    <ColorButton variant="contained" size="large">
                      Sign In
                    </ColorButton>
                    <Stack
                      style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "40px",
                      }}
                    >
                      <label
                        style={{
                          width: "200px",
                          background: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => navigate("/register")}
                      >
                        Not a member ? <b>Sign up</b>
                      </label>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
              <Box
                sx={{
                  width: 540,
                  height: 600,
                  backgroundColor: "#101828",
                  borderTopRightRadius: 30,
                  borderBottomRightRadius: 30,
                }}
              >
                <Stack textAlign={"center"}>
                  <h6
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "40px",
                      marginBottom: "0px",
                      fontSize: "30px",
                      width: "400px",
                      textAlign: "center",
                      color: "#ffff",
                      letterSpacing: "1.5px",
                    }}
                  >
                    Student Attendance System
                  </h6>

                  <Stack
                    padding={"5px"}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={teaching} alt="teaching" />
                    <h6
                      style={{
                        width: "180px",
                        fontSize: "15px",
                        color: "#ffff",
                        fontWeight: "lighter",
                        letterSpacing: ".5px",
                        marginTop: "15px",
                      }}
                    >
                      Made by Group Name EST 2022
                    </h6>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Login;
