import {
  Container,
  List,
  ListItem,
  ListItemText,
  Button,
  Stack,
  Typography,
  Paper,
  Divider
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const storedCourses =
      JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(storedCourses);
  }, []);

  const deleteCourse = (id) => {
    const updatedCourses = courses.filter(
      (course) => course.id !== id
    );
    localStorage.setItem(
      "courses",
      JSON.stringify(updatedCourses)
    );
    setCourses(updatedCourses); // ✅ no reload
  };

  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      {/* 🔹 HEADER */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 3 }}
      >
        <Typography variant="h4" fontWeight="bold">
          Admin Dashboard
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/add-course")}
        >
          Add New Course
        </Button>
      </Stack>

      {/* 🔹 COURSE LIST */}
      <Paper elevation={2}>
        <List>
          {courses.length === 0 && (
            <Typography
              align="center"
              color="text.secondary"
              sx={{ p: 3 }}
            >
              No courses available
            </Typography>
          )}

          {courses.map((course, index) => (
            <div key={course.id}>
              <ListItem
                secondaryAction={
                  <Stack direction="row" spacing={1}>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() =>
                        navigate(
                          `/edit-course/${course.id}`
                        )
                      }
                    >
                      Edit
                    </Button>

                    <Button
                      size="small"
                      color="error"
                      variant="outlined"
                      onClick={() =>
                        deleteCourse(course.id)
                      }
                    >
                      Delete
                    </Button>
                  </Stack>
                }
              >
                <ListItemText
                  primary={course.title}
                  secondary={
                    course.shortDesc ||
                    "No description available"
                  }
                />
              </ListItem>

              {index !== courses.length - 1 && (
                <Divider />
              )}
            </div>
          ))}
        </List>
      </Paper>
    </Container>
  );
}
