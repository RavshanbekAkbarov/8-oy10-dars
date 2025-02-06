import React from "react";
import Cardtitle from "../components/Cardtitle";
import { useNavigate } from "react-router-dom";

const jobList = [
  {
    id: 1,
    name: "Photosnap",
    kasb: "Senior Frontend Developer",
    vaqt: "1d ago • Full Time • USA only",
    tavsiya: "FEATURED",
    holat: "New!",
    textnalogiya: "",
  },
  {
    id: 2,
    name: "Manage",
    kasb: "Fullstack Developer",
    vaqt: "2d ago • Part Time • Remote",
    tavsiya: "FEATURED",
    holat: "New!",
    textnalogiya: "",
  },
  {
    id: 3,
    name: "Account",
    kasb: "Junior Frontend Developer",
    vaqt: "3d ago • Freelance • Canada",
    tavsiya: "",
    holat: "New!",
    textnalogiya: "",
  },
  {
    id: 4,
    name: "MyHome",
    kasb: "Software Engineer",
    vaqt: "5d ago • Contract • Canada",
    tavsiya: "",
    holat: "",
    textnalogiya: "",
  },
  {
    id: 5,
    name: "MyHome",
    kasb: "Junior Backend Developer",
    vaqt: "5d ago • Contract • Canada",
    tavsiya: "",
    holat: "",
    textnalogiya: "",
  },
  {
    id: 6,
    name: "MyHome",
    kasb: "Junior Developer",
    vaqt: "5d ago • Contract • Canada",
    tavsiya: "",
    holat: "",
    textnalogiya: "",
  },
  {
    id: 7,
    name: "MyHome",
    kasb: "Full Stack Engineer",
    vaqt: "5d ago • Contract • Canada",
    tavsiya: "FEATURED",
    holat: "",
    textnalogiya: "",
  },
  {
    id: 8,
    name: "MyHome",
    kasb: "Front-end Dev",
    vaqt: "5d ago • Contract • Canada",
    tavsiya: "FEATURED",
    holat: "New!",
    textnalogiya: "",
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {jobList.map((job) => (
        <Cardtitle
          key={job.id}
          name={job.name}
          kasb={job.kasb}
          vaqt={job.vaqt}
          tavsiya={job.tavsiya}
          holat={job.holat}
          onClick={() => navigate("/about")}
        />
      ))}
    </>
  );
}

export default Home;
