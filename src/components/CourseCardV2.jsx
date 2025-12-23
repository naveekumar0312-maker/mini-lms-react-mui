import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Box,
  Chip
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";

export default function CourseCard({ course }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: "26px",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg,rgba(255,255,255,0.85),rgba(248,250,252,0.9))",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.4)",
        boxShadow:
          "0 20px 60px rgba(79,70,229,0.18)",
        transition: "all 0.6s cubic-bezier(.4,0,.2,1)",
        "&:hover": {
          transform: "translateY(-14px) scale(1.02)",
          boxShadow:
            "0 45px 120px rgba(79,70,229,0.45)"
        }
      }}
    >
      {/* ===== GLOW BACKGROUND ===== */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top right,rgba(99,102,241,0.25),transparent 60%)",
          zIndex: 0
        }}
      />

      {/* ===== PREMIUM RIBBON ===== */}
      <Box
        sx={{
          position: "absolute",
          top: 18,
          left: 18,
          display: "flex",
          alignItems: "center",
          gap: 0.8,
          px: 1.5,
          py: 0.6,
          borderRadius: "999px",
          bgcolor: "#0f172a",
          color: "#fff",
          fontSize: "0.72rem",
          fontWeight: 700,
          zIndex: 2
        }}
      >
        <WorkspacePremiumRoundedIcon
          sx={{ fontSize: 16, color: "#facc15" }}
        />
        ULTRA PRO
      </Box>

      {/* ===== CONTENT ===== */}
      <CardContent sx={{ position: "relative", zIndex: 1, pt: 6 }}>
        <Typography
          variant="h6"
          fontWeight={900}
          sx={{
            mb: 1,
            lineHeight: 1.25,
            background:
              "linear-gradient(90deg,#4f46e5,#22c55e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
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

        {/* ===== FEATURES ===== */}
        <Stack spacing={1.2}>
          <Feature
            icon={<MenuBookRoundedIcon />}
            text={`${course.lessons?.length || 12}+ Structured Lessons`}
          />
          <Feature
            icon={<AutoGraphRoundedIcon />}
            text="Beginner → Advanced Roadmap"
          />
          <Feature
            icon={<VerifiedRoundedIcon />}
            text="Verified Certificate Included"
          />
        </Stack>
      </CardContent>

      {/* ===== ACTION ===== */}
      <Box sx={{ p: 2.5 }}>
        <Button
          fullWidth
          size="large"
          startIcon={<PlayArrowRoundedIcon />}
          sx={{
            borderRadius: "18px",
            py: 1.4,
            fontWeight: 800,
            letterSpacing: 0.4,
            textTransform: "none",
            background:
              "linear-gradient(135deg,#4f46e5,#7c3aed)",
            boxShadow:
              "0 18px 40px rgba(79,70,229,0.45)",
            "&:hover": {
              background:
                "linear-gradient(135deg,#4338ca,#6d28d9)",
              boxShadow:
                "0 25px 60px rgba(79,70,229,0.6)"
            }
          }}
          onClick={() => navigate(`/course/${course.id}`)}
        >
          Start Learning
        </Button>
      </Box>
    </Card>
  );
}

/* ===== MINI FEATURE ROW ===== */
function Feature({ icon, text }) {
  return (
    <Stack direction="row" spacing={1.2} alignItems="center">
      <Box
        sx={{
          width: 34,
          height: 34,
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg,#eef2ff,#ecfeff)",
          color: "#4f46e5"
        }}
      >
        {icon}
      </Box>
      <Typography variant="body2" fontWeight={600}>
        {text}
      </Typography>
    </Stack>
  );
}
