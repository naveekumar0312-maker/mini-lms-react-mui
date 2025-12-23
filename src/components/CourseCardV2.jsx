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

import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function CourseCardV2({ course }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)",
        boxShadow: "0 18px 45px rgba(0,0,0,0.12)",
        transition: "0.35s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 35px 80px rgba(79,70,229,0.35)"
        }
      }}
    >
      {/* ================= IMAGE ================= */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="190"
          image={course.thumbnail}   // 🔥 only this
          alt={course.title}
          sx={{
            objectFit: "cover",
            filter: "brightness(0.92)"
          }}
        />

        {/* Premium badge */}
        <Chip
          icon={<WorkspacePremiumIcon sx={{ color: "#facc15" }} />}
          label="Premium"
          size="small"
          sx={{
            position: "absolute",
            top: 14,
            left: 14,
            bgcolor: "rgba(15,23,42,0.85)",
            color: "#fff",
            fontWeight: "bold"
          }}
        />
      </Box>

      {/* ================= CONTENT ================= */}
      <CardContent sx={{ flexGrow: 1, px: 2.5, pt: 2.5 }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ lineHeight: 1.3 }}
        >
          {course.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1.2 }}
        >
          {course.shortDesc}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          sx={{ mt: 2, flexWrap: "wrap" }}
        >
          <Chip
            icon={<MenuBookIcon />}
            label={`${course.lessons.length}+ Lessons`}
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
      <Box sx={{ p: 2.5 }}>
        <Button
          fullWidth
          size="large"
          endIcon={<ArrowForwardIcon />}
          startIcon={<PlayCircleFilledIcon />}
          variant="contained"
          sx={{
            py: 1.3,
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
