import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Avatar,
  Divider,
  IconButton,
  Alert,
  Stack
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import LockIcon from "@mui/icons-material/Lock";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
  const { user, setUser } = useContext(AuthContext);

  const profileKey = `profile_${user.username}`;
  const storedProfile =
    JSON.parse(localStorage.getItem(profileKey)) || {};

  const [edit, setEdit] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [profile, setProfile] = useState({
    username: storedProfile.username || user.username,
    name: storedProfile.name || "",
    age: storedProfile.age || "",
    email: storedProfile.email || "",
    image: storedProfile.image || null
  });

  const [passwords, setPasswords] = useState({
    current: "",
    newPass: "",
    confirm: ""
  });

  /* ================= SAVE PROFILE ================= */
  useEffect(() => {
    localStorage.setItem(profileKey, JSON.stringify(profile));
  }, [profile, profileKey]);

  /* ================= IMAGE ================= */
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile({ ...profile, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  /* ================= SAVE PROFILE ================= */
  const handleSaveProfile = () => {
    setError("");
    if (profile.username !== user.username) {
      const updatedUser = { ...user, username: profile.username };
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      setUser(updatedUser);
    }
    setEdit(false);
    setMessage("✨ Profile updated successfully");
  };

  /* ================= PASSWORD ================= */
  const handleChangePassword = () => {
    setMessage("");
    setError("");

    const savedUser =
      user.role === "admin"
        ? JSON.parse(localStorage.getItem("adminUser"))
        : JSON.parse(localStorage.getItem("registeredUser"));

    if (passwords.current !== savedUser.password) {
      setError("❌ Current password incorrect");
      return;
    }

    if (passwords.newPass.length < 6) {
      setError("❌ Password must be at least 6 characters");
      return;
    }

    if (passwords.newPass !== passwords.confirm) {
      setError("❌ Passwords do not match");
      return;
    }

    const updatedUser = {
      ...savedUser,
      password: passwords.newPass
    };

    if (user.role === "admin") {
      localStorage.setItem("adminUser", JSON.stringify(updatedUser));
    } else {
      localStorage.setItem("registeredUser", JSON.stringify(updatedUser));
    }

    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    setUser(updatedUser);

    setPasswords({ current: "", newPass: "", confirm: "" });
    setMessage("🔐 Password updated successfully. Please login again.");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 14 }}>
      {/* ================= HEADER ================= */}
      <Paper
  sx={{
    p: 0,
    mb: 6,
    borderRadius: 6,
    overflow: "hidden",
    color: "#fff",
    boxShadow: "0 40px 120px rgba(79,70,229,.6)"
  }}
>
  {/* ===== BANNER ===== */}
  <Box
    sx={{
      height: 180,
      position: "relative",
      backgroundImage:
        "url(https://images.unsplash.com/photo-1557683316-973673baf926)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  >
    {/* gradient overlay – SAME COLORS */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(135deg,#020617,#4f46e5,#22c55e)",
        opacity: 0.85
      }}
    />

    {/* PROFILE AVATAR */}
    <Box
      sx={{
        position: "absolute",
        bottom: -45,
        left: 40
      }}
    >
      <Avatar
        src={profile.image || undefined}
        sx={{
          width: 90,
          height: 90,
          fontSize: 34,
          bgcolor: "#6366f1",
          border: "4px solid #fff",
          boxShadow: "0 15px 40px rgba(0,0,0,.35)"
        }}
      >
        {!profile.image &&
          user.username.charAt(0).toUpperCase()}
      </Avatar>
    </Box>
  </Box>

  {/* ===== TEXT CONTENT ===== */}
  <Box sx={{ pt: 7, pb: 4, px: 5 }}>
    <Typography
      variant="h4"
      fontWeight={900}
      sx={{
        background:
          "linear-gradient(90deg,#a5b4fc,#22c55e)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}
    >
      {profile.name || user.username}
    </Typography>

    <Typography sx={{ opacity: 0.9 }}>
      @{user.username} • Profile Dashboard
    </Typography>
  </Box>
</Paper>


      {message && (
        <Alert severity="success" sx={{ mb: 3 }}>
          {message}
        </Alert>
      )}
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {/* ================= PROFILE CARD ================= */}
      <Paper sx={glassCard}>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={4} textAlign="center">
            <Box sx={{ position: "relative", display: "inline-block" }}>
              <Avatar
                src={profile.image}
                sx={{
                  width: 160,
                  height: 160,
                  fontSize: 52,
                  background:
                    "linear-gradient(135deg,#4f46e5,#22c55e)",
                  boxShadow: "0 20px 50px rgba(79,70,229,.6)"
                }}
              >
                {!profile.image &&
                  profile.username.charAt(0).toUpperCase()}
              </Avatar>

              <IconButton
                component="label"
                sx={{
                  position: "absolute",
                  bottom: 6,
                  right: 6,
                  bgcolor: "#020617",
                  color: "#22c55e",
                  boxShadow: "0 10px 25px rgba(0,0,0,.4)",
                  "&:hover": { bgcolor: "#020617" }
                }}
              >
                <PhotoCameraIcon />
                <input hidden type="file" onChange={handleImageUpload} />
              </IconButton>
            </Box>
          </Grid>

          <Grid xs={12} md={8}>
            <Stack spacing={3}>
              <TextField
                label="Username"
                value={profile.username}
                disabled={!edit}
                onChange={(e) =>
                  setProfile({ ...profile, username: e.target.value })
                }
              />

              <TextField
                label="Full Name"
                value={profile.name}
                disabled={!edit}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
              />

              <TextField
                label="Age"
                type="number"
                value={profile.age}
                disabled={!edit}
                onChange={(e) =>
                  setProfile({ ...profile, age: e.target.value })
                }
              />

              <TextField
                label="Email"
                value={profile.email}
                disabled={!edit}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
              />

              {!edit ? (
                <Button
                  startIcon={<EditIcon />}
                  sx={primaryBtn}
                  size="large"
                  onClick={() => setEdit(true)}
                >
                  Edit Profile
                </Button>
              ) : (
                <Button
                  startIcon={<SaveIcon />}
                  sx={successBtn}
                  size="large"
                  onClick={handleSaveProfile}
                >
                  Save Changes
                </Button>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      {/* ================= PASSWORD ================= */}
      <Paper sx={{ ...glassCard, mt: 7 }}>
        <Typography variant="h6" fontWeight={900}>
          <LockIcon sx={{ mr: 1 }} />
          Change Password
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Grid container spacing={3}>
          <Grid xs={12} md={4}>
            <TextField
              fullWidth
              label="Current Password"
              type="password"
              value={passwords.current}
              onChange={(e) =>
                setPasswords({ ...passwords, current: e.target.value })
              }
            />
          </Grid>

          <Grid xs={12} md={4}>
            <TextField
              fullWidth
              label="New Password"
              type="password"
              value={passwords.newPass}
              onChange={(e) =>
                setPasswords({ ...passwords, newPass: e.target.value })
              }
            />
          </Grid>

          <Grid xs={12} md={4}>
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              value={passwords.confirm}
              onChange={(e) =>
                setPasswords({ ...passwords, confirm: e.target.value })
              }
            />
          </Grid>
        </Grid>

        <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
          <Button
            sx={dangerBtn}
            size="large"
            onClick={handleChangePassword}
          >
            Update Password
          </Button>

          <Button
            startIcon={<RestartAltIcon />}
            variant="outlined"
            size="large"
            onClick={() =>
              setPasswords({ current: "", newPass: "", confirm: "" })
            }
          >
            Reset
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}

/* ================= STYLES ================= */

const glassCard = {
  p: 5,
  borderRadius: 6,
  background:
    "linear-gradient(135deg,rgba(255,255,255,.95),rgba(238,242,255,.85))",
  backdropFilter: "blur(18px)",
  boxShadow: "0 30px 90px rgba(79,70,229,.25)"
};

const primaryBtn = {
  borderRadius: "999px",
  px: 4,
  py: 1.2,
  fontWeight: 800,
  background:
    "linear-gradient(135deg,#4f46e5,#22c55e)",
  boxShadow:
    "0 18px 45px rgba(79,70,229,.55)"
};

const successBtn = {
  ...primaryBtn,
  background:
    "linear-gradient(135deg,#16a34a,#22c55e)"
};

const dangerBtn = {
  borderRadius: "999px",
  px: 4,
  py: 1.2,
  fontWeight: 800,
  background:
    "linear-gradient(135deg,#ef4444,#dc2626)",
  boxShadow:
    "0 18px 45px rgba(239,68,68,.45)"
};
