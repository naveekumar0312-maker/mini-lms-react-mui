import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
  Divider
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from "@mui/icons-material/School";

export default function Footer() {
  return (
    <Box sx={{ mt: 12, position: "relative" }}>
      {/* ================= WAVE SVG ================= */}
      <Box sx={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 120"
          width="100%"
          height="120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,53.3C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            fill="#020617"
          />
        </svg>
      </Box>

      {/* ================= FOOTER BODY ================= */}
      <Box
        sx={{
          background: "linear-gradient(135deg,#020617,#0f172a,#020617)",
          color: "#e5e7eb",
          pt: 8,
          pb: 4
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* BRAND */}
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <SchoolIcon sx={{ color: "#22c55e", fontSize: 34 }} />
                  <Typography variant="h6" fontWeight={800}>
                    MINI LMS Academy
                  </Typography>
                </Stack>

                <Typography color="#cbd5f5">
                  A premium learning platform designed to deliver
                  structured courses, hands-on exercises, real projects,
                  assessments, and verified certificates.
                </Typography>
              </Stack>
            </Grid>

            {/* QUICK LINKS */}
            <Grid item xs={12} sm={6} md={2}>
              <FooterTitle>Quick Links</FooterTitle>
              <FooterLink text="Home" />
              <FooterLink text="Courses" />
              <FooterLink text="About Us" />
              <FooterLink text="Contact" />
            </Grid>

            {/* RESOURCES */}
            <Grid item xs={12} sm={6} md={3}>
              <FooterTitle>Resources</FooterTitle>
              <FooterLink text="My Learning" />
              <FooterLink text="Certificates" />
              <FooterLink text="Interview Prep" />
              <FooterLink text="Help Center" />
            </Grid>

            {/* CONNECT */}
            <Grid item xs={12} md={3}>
              <FooterTitle>Connect With Us</FooterTitle>

              <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                <SocialIcon icon={<FacebookIcon />} />
                <SocialIcon icon={<TwitterIcon />} />
                <SocialIcon icon={<InstagramIcon />} />
                <SocialIcon icon={<LinkedInIcon />} />
                <SocialIcon icon={<EmailIcon />} />
              </Stack>

              <Typography
                variant="body2"
                sx={{ color: "#94a3b8" }}
              >
                support@minilmsacademy.com
              </Typography>
            </Grid>
          </Grid>

          <Divider
            sx={{
              my: 5,
              borderColor: "rgba(255,255,255,0.08)"
            }}
          />

          {/* COPYRIGHT */}
          <Typography
            align="center"
            variant="body2"
            sx={{ color: "#94a3b8" }}
          >
            © 2025 MINI LMS Academy — All Rights Reserved
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

/* ================= REUSABLE ================= */

function FooterTitle({ children }) {
  return (
    <Typography
      fontWeight={700}
      sx={{ mb: 2, letterSpacing: "0.4px" }}
    >
      {children}
    </Typography>
  );
}

function FooterLink({ text }) {
  return (
    <Typography
      sx={{
        color: "#cbd5f5",
        fontSize: "0.9rem",
        mb: 1,
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
          color: "#22c55e",
          transform: "translateX(6px)"
        }
      }}
    >
      {text}
    </Typography>
  );
}

function SocialIcon({ icon }) {
  return (
    <IconButton
      sx={{
        width: 42,
        height: 42,
        borderRadius: "14px",
        color: "#e5e7eb",
        background:
          "linear-gradient(135deg,#1e293b,#020617)",
        transition: "0.35s",
        "&:hover": {
          background:
            "linear-gradient(135deg,#22c55e,#16a34a)",
          transform: "translateY(-5px)",
          boxShadow:
            "0 16px 40px rgba(34,197,94,0.5)"
        }
      }}
    >
      {icon}
    </IconButton>
  );
}
