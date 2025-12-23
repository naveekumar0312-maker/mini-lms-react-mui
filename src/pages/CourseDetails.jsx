import {
  Container,
  Paper,
  Typography,
  Box,
  Divider,
  Grid,
  Button,
  List,
  ListItem,
  ListItemText,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField
} from "@mui/material";

import MenuBookIcon from "@mui/icons-material/MenuBook";
import BuildIcon from "@mui/icons-material/Build";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LinkIcon from "@mui/icons-material/Link";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import QuizIcon from "@mui/icons-material/Quiz";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import TimerIcon from "@mui/icons-material/Timer";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import coursesData from "../data/coursesData";

export default function CourseDetails() {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === Number(id));
  if (!course) return null;

  /* ================= STATES ================= */
  const [step, setStep] = useState("details");
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);
  const [name, setName] = useState("");

  /* ================= TIMER ================= */
  useEffect(() => {
    if (step !== "quiz") return;
    if (timeLeft === 0) {
      submitQuiz();
      return;
    }
    const t = setTimeout(() => setTimeLeft(p => p - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, step]);

  /* ================= QUIZ ================= */
  const quiz = [
    {
      q: `What is the main goal of ${course.title}?`,
      options: ["Entertainment", "Skill Development", "Gaming", "Marketing"],
      answer: "Skill Development"
    },
    {
      q: "What type of learning does this course follow?",
      options: ["Theory only", "Practical only", "Both", "None"],
      answer: "Both"
    },
    {
      q: "Who can enroll in this course?",
      options: ["Experts only", "Beginners", "Beginners & Professionals", "Kids"],
      answer: "Beginners & Professionals"
    },
    {
      q: "What do learners receive after completion?",
      options: ["Money", "Certificate", "Badge", "Nothing"],
      answer: "Certificate"
    },
    {
      q: "Is this course industry relevant?",
      options: ["Yes", "No", "Maybe", "Not sure"],
      answer: "Yes"
    }
  ];

  const handleAnswer = (i, val) =>
    setAnswers({ ...answers, [i]: val });

  const submitQuiz = () => {
    let marks = 0;
    quiz.forEach((q, i) => {
      if (answers[i] === q.answer) marks++;
    });
    setScore(marks);
    setStep("result");
  };

  /* ================= CERTIFICATE ================= */
  const downloadCertificate = () => {
    const date = new Date().toLocaleDateString();
    const history =
      JSON.parse(localStorage.getItem("certificates")) || [];
    history.push({ name, course: course.title, date });
    localStorage.setItem("certificates", JSON.stringify(history));

    const win = window.open("", "", "width=900,height=650");
    win.document.write(`
      <html>
        <head>
          <title>Certificate</title>
          <style>
            body { font-family: Arial; padding:40px; text-align:center; }
            .cert {
              border:10px solid transparent;
              border-image: linear-gradient(135deg,#4f46e5,#22c55e) 1;
              padding:40px;
            }
            h1 { color:#4f46e5 }
            .logo {
              font-size:30px;
              font-weight:bold;
              background:linear-gradient(90deg,#4f46e5,#22c55e);
              -webkit-background-clip:text;
              -webkit-text-fill-color:transparent;
            }
          </style>
        </head>
        <body>
          <div class="cert">
            <div class="logo">LMS Academy</div>
            <h1>Certificate of Completion</h1>
            <p>This certifies that</p>
            <h2>${name}</h2>
            <p>has successfully completed</p>
            <h3>${course.title}</h3>
            <p>Date: ${date}</p>
          </div>
        </body>
      </html>
    `);
    win.document.close();
    win.print();
  };

  return (
    <Container sx={{ mt: 8, mb: 14 }}>

      {/* ================= TITLE ================= */}
      <Paper
        sx={{
          p: 6,
          borderRadius: 6,
          mb: 7,
          background:
            "linear-gradient(135deg,#020617,#4f46e5,#22c55e)",
          color: "#fff",
          boxShadow: "0 40px 120px rgba(79,70,229,.6)"
        }}
      >
        <Typography
          variant="h4"
          fontWeight={900}
          sx={{
            background:
              "linear-gradient(90deg,#a5b4fc,#22c55e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          {course.title}
        </Typography>
        <Typography sx={{ opacity: 0.95, mt: 1 }}>
          {course.shortDesc}
        </Typography>
      </Paper>

      {/* ================= DETAILS ================= */}
      {step === "details" && (
        <>
          <Section
            icon={<MenuBookIcon />}
            title="Course Overview"
            content={[
              "Industry aligned curriculum with real-world focus.",
              "Hands-on exercises and mini project included.",
              "Structured learning from basics to advanced.",
              "Assessment based certification system.",
              "Job-ready skill development."
            ]}
          />

          <Paper sx={premiumPaper}>
            <SectionTitle icon={<MenuBookIcon />} title="Lessons" />
            <Grid container spacing={3}>
              {course.lessons.map((l, i) => (
                <Grid key={i} xs={12} md={6}>
                  <Paper
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      background:
                        "linear-gradient(135deg,#ffffff,#eef2ff)",
                      transition: ".4s",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow:
                          "0 30px 70px rgba(79,70,229,.35)"
                      }
                    }}
                  >
                    <Typography fontWeight={700}>{l.title}</Typography>
                    <Typography color="text.secondary">
                      {l.content}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>

          <Section icon={<BuildIcon />} title="Hands-on Exercises"
            list={[
              "Build real UI components",
              "Apply best coding practices",
              "Optimize performance",
              "Debug common issues",
              "Test your implementation"
            ]}
          />

          <Section icon={<AssignmentIcon />} title="Mini Project"
            content={[
              "Develop a complete mini project",
              "Apply learned concepts",
              "Focus on clean UI & logic",
              "Prepare for demo & viva",
              "Simulates real-world project"
            ]}
          />

          <Section icon={<LinkIcon />} title="References"
            list={[
              "Official documentation",
              "MDN Web Docs",
              "Industry blogs",
              "Open-source examples",
              "Best practice guides"
            ]}
          />

          <Section icon={<QuestionAnswerIcon />} title="Interview Questions"
            list={[
              "Explain core concepts",
              "Real-world use cases",
              "Optimization techniques",
              "Common mistakes",
              "Best practices"
            ]}
          />

          <Paper sx={premiumPaper}>
            <SectionTitle icon={<QuizIcon />} title="Assessment Quiz" />
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              Complete quiz to unlock certificate
            </Typography>
            <Button
              variant="contained"
              startIcon={<QuizIcon />}
              sx={premiumBtn}
              onClick={() => {
                setStep("quiz");
                setTimeLeft(120);
              }}
            >
              Start Quiz
            </Button>
          </Paper>
        </>
      )}

      {/* ================= QUIZ ================= */}
      {step === "quiz" && (
        <Paper sx={premiumPaper}>
          <Typography variant="h5" fontWeight={800}>
            Quiz <TimerIcon sx={{ ml: 1 }} /> {timeLeft}s
          </Typography>

          {quiz.map((q, i) => (
            <Box key={i} sx={{ mt: 3 }}>
              <Typography fontWeight={600}>
                {i + 1}. {q.q}
              </Typography>
              <RadioGroup
                value={answers[i] || ""}
                onChange={(e) => handleAnswer(i, e.target.value)}
              >
                {q.options.map(opt => (
                  <FormControlLabel
                    key={opt}
                    value={opt}
                    control={<Radio />}
                    label={opt}
                  />
                ))}
              </RadioGroup>
            </Box>
          ))}

          <Button
            sx={{ mt: 3 }}
            variant="contained"
            onClick={submitQuiz}
          >
            Submit Quiz
          </Button>
        </Paper>
      )}

      {/* ================= RESULT ================= */}
      {step === "result" && (
        <Paper sx={{ ...premiumPaper, textAlign: "center" }}>
          <Typography variant="h4" fontWeight={900}>
            Score: {score}/{quiz.length}
          </Typography>

          {score >= 3 ? (
            <Button
              sx={{ mt: 3 }}
              variant="contained"
              onClick={() => setStep("certificate")}
            >
              Generate Certificate
            </Button>
          ) : (
            <Button
              sx={{ mt: 3 }}
              variant="outlined"
              onClick={() => {
                setAnswers({});
                setStep("quiz");
                setTimeLeft(120);
              }}
            >
              Retry Quiz
            </Button>
          )}
        </Paper>
      )}

      {/* ================= CERTIFICATE ================= */}
      {step === "certificate" && (
        <Paper sx={{ ...premiumPaper, textAlign: "center" }}>
          <WorkspacePremiumIcon sx={{ fontSize: 70, color: "#22c55e" }} />
          <Typography variant="h5" fontWeight={900} sx={{ mt: 2 }}>
            Certificate Details
          </Typography>

          <TextField
            fullWidth
            label="Your Full Name"
            sx={{ my: 3 }}
            onChange={(e) => setName(e.target.value)}
          />

          <Button
            variant="contained"
            color="success"
            sx={premiumBtn}
            onClick={downloadCertificate}
          >
            Download Certificate (PDF)
          </Button>
        </Paper>
      )}
    </Container>
  );
}

/* ================= STYLES ================= */

const premiumPaper = {
  p: 5,
  borderRadius: 6,
  mb: 6,
  background:
    "linear-gradient(135deg,#ffffff,#eef2ff)",
  boxShadow: "0 30px 80px rgba(79,70,229,.25)"
};

const premiumBtn = {
  px: 4,
  py: 1.2,
  borderRadius: "999px",
  fontWeight: 800,
  background:
    "linear-gradient(135deg,#4f46e5,#22c55e)",
  boxShadow:
    "0 18px 45px rgba(79,70,229,.5)"
};

/* ================= REUSABLE ================= */

function Section({ icon, title, content, list }) {
  return (
    <Paper sx={premiumPaper}>
      <SectionTitle icon={icon} title={title} />
      {content && content.map((c, i) => (
        <Typography key={i} sx={{ mb: 2 }} color="text.secondary">
          {c}
        </Typography>
      ))}
      {list && (
        <List>
          {list.map((l, i) => (
            <ListItem key={i}>
              <ListItemText primary={l} />
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
}

function SectionTitle({ icon, title }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 3 }}>
      <Box
        sx={{
          width: 42,
          height: 42,
          borderRadius: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg,#4f46e5,#22c55e)",
          color: "#fff"
        }}
      >
        {icon}
      </Box>
      <Typography variant="h5" fontWeight={900}>
        {title}
      </Typography>
    </Box>
  );
}
