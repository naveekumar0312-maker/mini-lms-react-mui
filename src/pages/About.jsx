import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Divider
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import FlagIcon from "@mui/icons-material/Flag";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CodeIcon from "@mui/icons-material/Code";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import TerminalIcon from "@mui/icons-material/Terminal";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

export default function About() {
  return (
    <Container sx={{ mt: 10, mb: 14 }}>

      {/* ================= HERO ================= */}
      <Paper
        sx={{
          p: { xs: 4, md: 7 },
          borderRadius: 6,
          background:
            "linear-gradient(135deg,#4f46e5,#7c3aed)",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(79,70,229,0.45)"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(255,255,255,0.25), transparent 60%)"
          }}
        />

        <Typography variant="h3" fontWeight={800}>
          About LMS
        </Typography>

        <Typography sx={{ mt: 2, maxWidth: 900, opacity: 0.95 }}>
          LMS (Learning Management System) is a student-focused learning
          platform designed to provide simple explanations, structured
          courses, and real-world skills through hands-on learning.
        </Typography>
      </Paper>

      {/* ================= WHO WE ARE ================= */}
      <Box sx={{ mt: 10 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Who We Are
        </Typography>

        <Typography sx={{ maxWidth: 950, color: "text.secondary" }}>
          LMS is built for beginners, students, and freshers who want
          clarity over confusion. Every course is explained in a
          step-by-step and easy-to-understand manner.
        </Typography>
      </Box>

      {/* ================= MISSION / VISION ================= */}
      <Grid container spacing={4} sx={{ mt: 6 }}>
        {[
          {
            icon: <FlagIcon />,
            title: "Our Mission",
            text:
              "To simplify learning and make technical skills easy for everyone."
          },
          {
            icon: <VisibilityIcon />,
            title: "Our Vision",
            text:
              "To become a beginner-friendly learning platform with premium experience."
          },
          {
            icon: <StarIcon />,
            title: "Why LMS?",
            text:
              "Simple explanations, practical learning, and real-world examples."
          }
        ].map((item, i) => (
          <Grid key={i} xs={12} md={4}>
            <Paper
              sx={{
                p: 4,
                borderRadius: 4,
                height: "100%",
                border: "1px solid #e5e7eb",
                background:
                  "linear-gradient(135deg,#ffffff,#f8fafc)",
                transition: "0.35s",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow:
                    "0 25px 50px rgba(79,70,229,0.3)"
                }
              }}
            >
              <Box
                sx={{
                  width: 55,
                  height: 55,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg,#4f46e5,#7c3aed)",
                  color: "#fff",
                  mb: 2
                }}
              >
                {item.icon}
              </Box>

              <Typography fontWeight={700}>
                {item.title}
              </Typography>

              <Typography color="text.secondary">
                {item.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* ================= HOW LMS HELPS ================= */}
      <Box sx={{ mt: 12 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          How LMS Helps You
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {[
            "Concepts explained from basic level",
            "Simple language and clear examples",
            "Hands-on projects after every module",
            "Premium and distraction-free UI",
            "Career-oriented learning approach"
          ].map((point, i) => (
            <Grid key={i} xs={12} md={6}>
              <Paper
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: "1px solid #e5e7eb",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  transition: "0.3s",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg,#eef2ff,#faf5ff)",
                    transform: "translateX(6px)"
                  }
                }}
              >
                <CheckCircleIcon color="primary" />
                <Typography fontWeight={600}>
                  {point}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ================= COURSES OFFERED ================= */}
      <Box sx={{ mt: 12 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Courses Offered at LMS
        </Typography>

        <Typography sx={{ maxWidth: 950, color: "text.secondary" }}>
          All courses in LMS are designed in a simple and beginner-friendly
          way. No prior knowledge is required.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Grid container spacing={3}>
          {[
            {
              icon: <WebIcon />,
              title: "Frontend Development",
              text:
                "HTML, CSS, JavaScript, React – explained from scratch with UI focus."
            },
            {
              icon: <CodeIcon />,
              title: "Backend Development",
              text:
                "Python & Django with real-world backend logic and projects."
            },
            {
              icon: <StorageIcon />,
              title: "Database & SQL",
              text:
                "MySQL basics, queries, and database integration made simple."
            },
            {
              icon: <TerminalIcon />,
              title: "Programming Fundamentals",
              text:
                "Core programming concepts explained in an easy manner."
            },
            {
              icon: <DesignServicesIcon />,
              title: "UI / UX Basics",
              text:
                "Clean design principles, layouts, and premium user experience."
            },
            {
              icon: <SchoolIcon />,
              title: "Project-Based Learning",
              text:
                "Mini and major projects to gain real-time experience."
            }
          ].map((course, i) => (
            <Grid key={i} xs={12} md={4}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 4,
                  height: "100%",
                  border: "1px solid #e5e7eb",
                  transition: "0.35s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow:
                      "0 18px 45px rgba(79,70,229,0.25)"
                  }
                }}
              >
                <Box sx={{ color: "primary.main", mb: 2 }}>
                  {course.icon}
                </Box>

                <Typography fontWeight={700} mb={1}>
                  {course.title}
                </Typography>

                <Typography color="text.secondary">
                  {course.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ================= CLOSING ================= */}
      <Paper
        sx={{
          mt: 12,
          p: 6,
          borderRadius: 5,
          textAlign: "center",
          background:
            "linear-gradient(135deg,#eef2ff,#faf5ff)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.08)"
        }}
      >
        <Typography variant="h5" fontWeight={800}>
          Learn Simply. Build Confidently. 
        </Typography>

        <Typography sx={{ mt: 1, maxWidth: 750, mx: "auto" }}>
          LMS helps you learn step by step, practice with projects,
          and grow confidently in your career journey.
        </Typography>
      </Paper>

    </Container>
  );
}
