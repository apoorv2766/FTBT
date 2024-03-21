import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../images/signInLogo.jpeg";
import BG from "../images/pexels-jess-bailey-designs-965119.jpg";
import { useState } from "react";

const defaultTheme = createTheme();

const Login = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setInputValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("LOGIN CREDENTIAL", inputValue);
  };

  return (
    <Typography
      style={{
        // backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        // height: "100vh",
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography>
              <img src={Logo} alt="Image Error"/>
            </Typography>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                // required
                fullWidth
                id="email"
                label="Userid"
                name="email"
                value={inputValue.email}
                onChange={handleFieldChange}
                autoComplete="email"
              />
              <TextField
                margin="normal"
                // required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={inputValue.password}
                onChange={handleFieldChange}
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid
                  item
                  xs
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Typography>
  );
};
export default Login;
