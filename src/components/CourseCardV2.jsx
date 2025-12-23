import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Box,
  Chip,
  Divider
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TimelineIcon from "@mui/icons-material/Timeline";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function CourseCard({ course }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        background:
          "linear-gradient(180deg,#ffffff,#f9fafb)",
        boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
        transition: "0.45s ease",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow:
            "0 30px 70px rgba(79,70,229,0.35)"
        }
      }}
    >
      {/* ===== TOP PREMIUM STRIP ===== */}
      <Box
        sx={{
          height: 6,
          background:
            "linear-gradient(90deg,#4f46e5,#22c55e)"
        }}
      />

      {/* ===== PREMIUM BADGE ===== */}
      <Chip
        icon={<WorkspacePremiumIcon sx={{ color: "#facc15" }} />}
        label="Premium Course"
        size="small"
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          bgcolor: "#0f172a",
          color: "#fff",
          fontWeight: "bold"
        }}
      />

      {/* ===== CONTENT ===== */}
      <CardContent sx={{ flexGrow: 1, pt: 4 }}>
        <Typography
          variant="h6"
          fontWeight={800}
          sx={{ mb: 1, lineHeight: 1.3 }}
        >
          {course.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          {course.shortDesc}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        {/* ===== META INFO ===== */}
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Chip
            icon={<MenuBookIcon />}
            label={`${course.lessons?.length || 10}+ Lessons`}
            size="small"
          />
          <Chip
            icon={<TimelineIcon />}
            label="Beginner → Advanced"
            size="small"
          />
          <Chip
            icon={<VerifiedIcon />}
            label="Certificate"
            color="success"
            size="small"
          />
        </Stack>
      </CardContent>

      {/* ===== ACTION ===== */}
      <Box sx={{ p: 2 }}>
        <Button
          fullWidth
          size="large"
          startIcon={<PlayCircleFilledWhiteIcon />}
          variant="contained"
          sx={{
            borderRadius: "14px",
            fontWeight: "bold",
            textTransform: "none",
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
