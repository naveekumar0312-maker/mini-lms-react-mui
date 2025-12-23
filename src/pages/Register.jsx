import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  Paper,
  InputAdornment
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Fill all fields");
      return;
    }

    register({ username, password });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={10}
          sx={{
            p: 4,
            borderRadius: 3,
            backgroundColor: "#0b2c4d",
            color: "#fff"
          }}
        >
          {/* TITLE */}
          <Typography
            variant="h5"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            CREATE ACCOUNT
          </Typography>

          {/* FORM */}
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              placeholder="Username"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: "#90caf9" }} />
                  </InputAdornment>
                )
              }}
              sx={{
                input: { color: "#fff" },
                backgroundColor: "#123d63",
                borderRadius: 1
              }}
            />

            <TextField
              fullWidth
              placeholder="Password"
              type="password"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: "#90caf9" }} />
                  </InputAdornment>
                )
              }}
              sx={{
                input: { color: "#fff" },
                backgroundColor: "#123d63",
                borderRadius: 1
              }}
            />

            <Button
              type="submit"
              fullWidth
              sx={{
                mt: 3,
                py: 1.2,
                background:
                  "linear-gradient(90deg, #00c6ff, #0072ff)",
                color: "#fff",
                fontWeight: "bold"
              }}
            >
              CREATE ACCOUNT
            </Button>

            <Typography
              align="center"
              sx={{ mt: 2, fontSize: 14 }}
            >
              Already have an account?{" "}
              <Button
                onClick={() => navigate("/login")}
                sx={{
                  color: "#90caf9",
                  textTransform: "none"
                }}
              >
                Login
              </Button>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
