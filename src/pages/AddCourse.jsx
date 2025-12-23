import {
  Container,
  TextField,
  Button,
  Paper,
  Typography
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCourse() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  function saveCourse() {
    const courses = JSON.parse(localStorage.getItem("courses")) || [];

    courses.push({
      id: Date.now(),
      title,
      shortDesc: "Admin added course",
      description: "Course added by admin",
      level: "Intermediate",
      duration: "4 Weeks",
      price: 999,
      image
    });

    localStorage.setItem("courses", JSON.stringify(courses));
    navigate("/admin");
  }

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5">Add Course</Typography>

        <TextField
          fullWidth
          label="Course Title"
          margin="normal"
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          fullWidth
          label="Image URL"
          margin="normal"
          onChange={(e) => setImage(e.target.value)}
        />

        <Button fullWidth variant="contained" onClick={saveCourse}>
          Save
        </Button>
      </Paper>
    </Container>
  );
}