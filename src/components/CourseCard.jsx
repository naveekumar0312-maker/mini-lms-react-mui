import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CourseCard({ course }) {
  const navigate = useNavigate();

  const image =
    course.thumbnail ||
    "https://picsum.photos/seed/defaultcourse/800/450";

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        boxShadow: 3
      }}
    >
      {/* ✅ IMAGE */}
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={course.title}
        sx={{ objectFit: "cover" }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {course.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {course.shortDesc}
        </Typography>
      </CardContent>

      <Stack direction="row" spacing={1} sx={{ p: 2 }}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => navigate(`/course/${course.id}`)}
        >
          Open
        </Button>
      </Stack>
    </Card>
  );
}
