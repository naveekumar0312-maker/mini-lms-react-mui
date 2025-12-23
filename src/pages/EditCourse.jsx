import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
  Stack
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EditCourse() {
  const { id } = useParams();
  const navigate = useNavigate();

  const courses = JSON.parse(localStorage.getItem("courses")) || [];
  const course = courses.find(c => c.id === Number(id));

  const [title, setTitle] = useState(course?.title || "");
  const [shortDesc, setShortDesc] = useState(course?.shortDesc || "");
  const [description, setDescription] = useState(course?.description || "");
  const [duration, setDuration] = useState(course?.duration || "");
  const [level, setLevel] = useState(course?.level || "");
  const [price, setPrice] = useState(course?.price || 0);

  function updateCourse() {
    const updatedCourses = courses.map(c =>
      c.id === Number(id)
        ? {
            ...c,
            title,
            shortDesc,
            description,
            duration,
            level,
            price: Number(price)
          }
        : c
    );

    localStorage.setItem("courses", JSON.stringify(updatedCourses));
    navigate("/admin");
  }

  if (!course) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography>Course not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Edit Course
        </Typography>

        <TextField
          fullWidth
          label="Course Title"
          margin="normal"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <TextField
          fullWidth
          label="Short Description"
          margin="normal"
          value={shortDesc}
          onChange={e => setShortDesc(e.target.value)}
        />

        <TextField
          fullWidth
          multiline
          rows={4}
          label="Full Description"
          margin="normal"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <TextField
          fullWidth
          label="Duration"
          margin="normal"
          value={duration}
          onChange={e => setDuration(e.target.value)}
        />

        <TextField
          fullWidth
          select
          label="Level"
          margin="normal"
          value={level}
          onChange={e => setLevel(e.target.value)}
        >
          <MenuItem value="Beginner">Beginner</MenuItem>
          <MenuItem value="Intermediate">Intermediate</MenuItem>
          <MenuItem value="Advanced">Advanced</MenuItem>
        </TextField>

        <TextField
          fullWidth
          label="Price"
          type="number"
          margin="normal"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />

        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Button variant="contained" onClick={updateCourse}>
            Update
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate("/admin")}
          >
            Cancel
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}