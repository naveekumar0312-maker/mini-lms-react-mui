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
        borderRadius: "26px",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, #020617, #022c22)",
        border: "1px solid rgba(34,197,94,0.35)",
        boxShadow:
          "0 40px 120px rgba(0,0,0,0.85)",
        transition: "all .55s ease",
        "&:hover": {
          transform: "translateY(-18px)",
          boxShadow:
            "0 60px 160px rgba(34,197,94,.45)"
        }
      }}
    >
      {/* NEON EDGE */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius: "26px",
          background:
            "linear-gradient(120deg, transparent 30%, rgba(34,197,94,.25), transparent 70%)",
          opacity: 0,
          transition: ".6s",
          "&:hover": { opacity: 1 }
        }}
      />

      {/* PREMIUM TAG */}
      <Box
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          px: 1.8,
          py: 0.7,
          borderRadius: "999px",
          bgcolor: "#052e16",
          color: "#22c55e",
          fontSize: "0.7rem",
          fontWeight: 900,
          letterSpacing: 0.8,
          display: "flex",
          alignItems: "center",
          gap: 0.7,
          boxShadow:
            "0 0 25px rgba(34,197,94,.6)"
        }}
      >
        <WorkspacePremiumRoundedIcon sx={{ fontSize: 15 }} />
        PREMIUM
      </Box>

      <CardContent sx={{ pt: 6, pb: 4 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 900,
            mb: 1,
            color: "#ecfdf5",
            letterSpacing: .4
          }}
        >
          {course.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mb: 3,
            color: "#a7f3d0",
            opacity: .85
          }}
        >
          {course.shortDesc}
        </Typography>

        <Stack spacing={1.3}>
          <Feature
            icon={<MenuBookRoundedIcon />}
            text={`${course.lessons?.length || 12}+ Lessons`}
          />
          <Feature
            icon={<AutoGraphRoundedIcon />}
            text="Step-by-step Growth"
          />
          <Feature
            icon={<VerifiedRoundedIcon />}
            text="Industry Certificate"
          />
        </Stack>
      </CardContent>

      {/* CTA */}
      <Box sx={{ px: 3, pb: 3 }}>
        <Button
          fullWidth
          startIcon={<PlayArrowRoundedIcon />}
          sx={{
            borderRadius: "18px",
            py: 1.4,
            fontWeight: 900,
            textTransform: "none",
            color: "#052e16",
            background:
              "linear-gradient(135deg,#22c55e,#4ade80)",
            boxShadow:
              "0 18px 60px rgba(34,197,94,.75)",
            "&:hover": {
              background:
                "linear-gradient(135deg,#16a34a,#22c55e)",
              boxShadow:
                "0 30px 90px rgba(34,197,94,.9)"
            }
          }}
          onClick={() => navigate(`/course/${course.id}`)}
        >
          Start Course
        </Button>
      </Box>
    </Card>
  );
}

/* FEATURE */
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
          bgcolor: "rgba(34,197,94,.15)",
          color: "#22c55e",
          boxShadow:
            "0 0 18px rgba(34,197,94,.6)"
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="body2"
        sx={{ color: "#d1fae5", fontWeight: 700 }}
      >
        {text}
      </Typography>
    </Stack>
  );
}
