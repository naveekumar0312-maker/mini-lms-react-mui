import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Box
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";

export default function CourseCard({ course }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: "28px",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(240,253,244,0.95))",
        backdropFilter: "blur(18px)",
        border: "1px solid rgba(34,197,94,0.25)",
        boxShadow: "0 20px 60px rgba(34,197,94,0.25)",
        transition: "all 0.6s cubic-bezier(.4,0,.2,1)",
        "&:hover": {
          transform: "translateY(-14px) scale(1.03)",
          boxShadow: "0 45px 120px rgba(34,197,94,0.55)"
        }
      }}
    >
      {/* ===== GREEN GLOW ===== */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top right, rgba(34,197,94,0.35), transparent 60%)",
          zIndex: 0
        }}
      />

      {/* ===== PREMIUM BADGE ===== */}
      <Box
        sx={{
          position: "absolute",
          top: 18,
          left: 18,
          display: "flex",
          alignItems: "center",
          gap: 0.8,
          px: 1.6,
          py: 0.7,
          borderRadius: "999px",
          bgcolor: "#052e16",
          color: "#ecfdf5",
          fontSize: "0.72rem",
          fontWeight: 800,
          zIndex: 2
        }}
      >
        <WorkspacePremiumRoundedIcon
          sx={{ fontSize: 16, color: "#22c55e" }}
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
              "linear-gradient(90deg,#16a34a,#22c55e)",
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
        <Stack spacing={1.3}>
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
      <Box sx={{ p: 2.8 }}>
        <Button
          fullWidth
          size="large"
          startIcon={<PlayArrowRoundedIcon />}
          sx={{
            borderRadius: "20px",
            py: 1.5,
            fontWeight: 900,
            letterSpacing: 0.4,
            textTransform: "none",
            background:
              "linear-gradient(135deg,#16a34a,#22c55e)",
            boxShadow:
              "0 18px 45px rgba(34,197,94,0.55)",
            "&:hover": {
              background:
                "linear-gradient(135deg,#15803d,#16a34a)",
              boxShadow:
                "0 28px 70px rgba(34,197,94,0.75)"
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

/* ===== FEATURE ROW ===== */
function Feature({ icon, text }) {
  return (
    <Stack direction="row" spacing={1.3} alignItems="center">
      <Box
        sx={{
          width: 36,
          height: 36,
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg,#dcfce7,#ecfdf5)",
          color: "#16a34a"
        }}
      >
        {icon}
      </Box>
      <Typography variant="body2" fontWeight={700}>
        {text}
      </Typography>
    </Stack>
  );
}
