import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
  Box,
  Chip
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export default function CourseCard({ course }) {
  const navigate = useNavigate();

  // 🔥 IMPORTANT: only thumbnail (no fallback, no imports)
  const image = course.thumbnail;

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "18px",
        overflow: "hidden",
        transition: "0.35s ease",
        boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 25px 60px rgba(79,70,229,0.35)"
        }
      }}
    >
      {/* ================= IMAGE ================= */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={course.title}
          sx={{
            objectFit: "cover",
            backgroundColor: "#f1f5f9" // image load aagum varai
          }}
        />

        {/* PREMIUM BADGE */}
        <Chip
          icon={<WorkspacePremiumIcon sx={{ color: "#facc15" }} />}
          label="Premium"
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            bgcolor: "rgba(15,23,42,0.85)",
            color: "#fff",
            fontWeight: "bold"
          }}
        />
      </Box>

      {/* ================= CONTENT ================= */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ mb: 1, lineHeight: 1.3 }}
        >
          {course.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          {course.shortDesc}
        </Typography>

        <Stack direction="row" spacing={1}>
          <Chip
            icon={<MenuBookIcon />}
            label={`${course.lessons?.length || 5} Lessons`}
            size="small"
          />
          <Chip
            label="Certificate"
            color="success"
            size="small"
          />
        </Stack>
      </CardContent>

      {/* ================= ACTION ================= */}
      <Box sx={{ p: 2 }}>
        <Button
          fullWidth
          size="large"
          startIcon={<PlayCircleFilledWhiteIcon />}
          variant="contained"
          sx={{
            borderRadius: "14px",
            fontWeight: "bold",
            background:
              "linear-gradient(135deg,#4f46e5,#7c3aed)",
            "&:hover": {
              background:
                "linear-gradient(135deg,#4338ca,#6d28d9)"
            }
          }}
          onClick={() => navigate(`/course/${course.id}`)}
        >
          Open Course
        </Button>
      </Box>
    </Card>
  );
}
