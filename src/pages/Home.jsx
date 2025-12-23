import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Paper
} from "@mui/material";
import Grid from "@mui/material/Grid";
import SchoolIcon from "@mui/icons-material/School";
import SearchIcon from "@mui/icons-material/Search";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCardV2";
import coursesData from "../data/coursesData";

export default function Home() {
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    let storedCourses =
      JSON.parse(localStorage.getItem("courses")) || [];

    if (storedCourses.length < coursesData.length) {
      localStorage.setItem(
        "courses",
        JSON.stringify(coursesData)
      );
      storedCourses = coursesData;
    }

    setCourses(storedCourses);
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* ================= HERO ================= */}
      <Box
        sx={{
          minHeight: { xs: "75vh", md: "90vh" },
          display: "flex",
          alignItems: "center",
          position: "relative",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1513258496099-48168024aec0)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff"
        }}
      >
        {/* overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(15,23,42,0.94), rgba(79,70,229,0.88))"
          }}
        />

        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: 760 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 1,
                mb: 3,
                borderRadius: "999px",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)"
              }}
            >
              <SchoolIcon />
              <Typography fontWeight={600}>
                Premium Learning Platform
              </Typography>
            </Box>

            <Typography
              variant="h2"
              fontWeight={900}
              sx={{ mb: 2, lineHeight: 1.15 }}
            >
              Learn Skills That <br />
              Shape Your Future
            </Typography>

            <Typography
              sx={{
                fontSize: "1.15rem",
                opacity: 0.95,
                maxWidth: 600
              }}
            >
              Real-world courses, hands-on practice and certification
              designed for serious learners.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ================= FLOATING SEARCH ================= */}
      <Container
        sx={{
          position: "relative",
          zIndex: 5,
          transform: "translateY(-90px)"
        }}
      >
        <Paper
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 5,
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(18px)",
            boxShadow:
              "0 40px 80px rgba(79,70,229,0.35)",
            animation: "fadeUp 0.8s ease"
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            align="center"
            sx={{ mb: 2 }}
          >
            Find Your Course
          </Typography>

          <TextField
            fullWidth
            placeholder="Search by course title, skill, or keyword…"
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="primary" />
                </InputAdornment>
              )
            }}
          />
        </Paper>
      </Container>

      {/* ================= COURSES ================= */}
      <Container sx={{ mt: -2, mb: 12 }}>
        {/* title */}
        <Box sx={{ mb: 6, display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(135deg,#4f46e5,#7c3aed)"
            }}
          >
            <MenuBookIcon sx={{ color: "#fff", fontSize: 30 }} />
          </Box>

          <Box>
            <Typography
              variant="h4"
              fontWeight={900}
              sx={{
                background:
                  "linear-gradient(90deg,#4f46e5,#22c55e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              All Courses
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Learn • Practice • Get Certified
            </Typography>
          </Box>
        </Box>

        {/* grid */}
        <Grid container spacing={4}>
          {filteredCourses.map((course) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={course.id}
              sx={{
                transition: "0.35s",
                "&:hover": {
                  transform: "translateY(-12px)"
                }
              }}
            >
              <CourseCard course={course} />
            </Grid>
          ))}
        </Grid>

        {filteredCourses.length === 0 && (
          <Box sx={{ textAlign: "center", mt: 10 }}>
            <SearchIcon sx={{ fontSize: 64 }} />
            <Typography variant="h6">
              No courses found
            </Typography>
          </Box>
        )}
      </Container>

      {/* animation */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
}
