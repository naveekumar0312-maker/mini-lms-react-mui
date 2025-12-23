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
          minHeight: { xs: "75vh", md: "92vh" },
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
        {/* DIAMOND OVERLAY */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(2,6,23,0.95), rgba(79,70,229,0.9), rgba(34,197,94,0.75))"
          }}
        />

        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: 780 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2.2,
                py: 1,
                mb: 3,
                borderRadius: "999px",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,.18), rgba(255,255,255,.05))",
                backdropFilter: "blur(14px)",
                boxShadow:
                  "0 0 25px rgba(124,58,237,.6)"
              }}
            >
              <SchoolIcon />
              <Typography fontWeight={700}>
                 Learning Platform
              </Typography>
            </Box>

            <Typography
              variant="h2"
              fontWeight={900}
              sx={{
                mb: 2,
                lineHeight: 1.12,
                background:
                  "linear-gradient(90deg,#a5b4fc,#22c55e,#5eead4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Learn Skills That <br />
              Shape Your Future
            </Typography>

            <Typography
              sx={{
                fontSize: "1.15rem",
                opacity: 0.95,
                maxWidth: 620,
                color: "#e0f2fe"
              }}
            >
              Real-world courses, hands-on practice and certification
              crafted for serious learners.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ================= FLOATING SEARCH ================= */}
      <Container
        sx={{
          position: "relative",
          zIndex: 6,
          transform: "translateY(-95px)"
        }}
      >
        <Paper
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 6,
            background:
              "linear-gradient(135deg, rgba(255,255,255,.92), rgba(240,253,244,.85))",
            backdropFilter: "blur(22px)",
            boxShadow:
              "0 45px 110px rgba(79,70,229,.45)",
            border: "1px solid rgba(124,58,237,.25)",
            animation: "fadeUp 0.9s ease"
          }}
        >
          <Typography
            variant="h5"
            fontWeight={900}
            align="center"
            sx={{
              mb: 2,
              background:
                "linear-gradient(90deg,#4f46e5,#22c55e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
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
                  <SearchIcon sx={{ color: "#4f46e5" }} />
                </InputAdornment>
              )
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "18px"
              }
            }}
          />
        </Paper>
      </Container>

      {/* ================= COURSES ================= */}
      <Container sx={{ mt: -2, mb: 14 }}>
        {/* TITLE */}
        <Box
          sx={{
            mb: 6,
            display: "flex",
            alignItems: "center",
            gap: 2
          }}
        >
          <Box
            sx={{
              width: 58,
              height: 58,
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(135deg,#7c3aed,#22c55e)",
              boxShadow:
                "0 0 30px rgba(124,58,237,.6)"
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
                  "linear-gradient(90deg,#4f46e5,#22c55e,#5eead4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              All Courses
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#64748b" }}
            >
              Learn • Practice • Get Certified
            </Typography>
          </Box>
        </Box>

        {/* GRID */}
        <Grid container spacing={4}>
          {filteredCourses.map((course) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={course.id}
              sx={{
                transition: "0.4s",
                "&:hover": {
                  transform: "translateY(-14px)"
                }
              }}
            >
              <CourseCard course={course} />
            </Grid>
          ))}
        </Grid>

        {filteredCourses.length === 0 && (
          <Box sx={{ textAlign: "center", mt: 10 }}>
            <SearchIcon
              sx={{
                fontSize: 70,
                color: "#94a3b8"
              }}
            />
            <Typography variant="h6">
              No courses found
            </Typography>
          </Box>
        )}
      </Container>

      {/* ================= ANIMATION ================= */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(45px);
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
