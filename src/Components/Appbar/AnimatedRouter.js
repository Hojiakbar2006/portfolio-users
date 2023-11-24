import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../../Pages/Home/Home";
import {About} from "../../Pages/About/About";
import { AnimatePresence } from "framer-motion";
import Skills from "../../Pages/Skills/Skills";
import { Project } from "../../Pages/Project/Project";
import Team from "../../Pages/Team/Team";
import { LearnMore } from "../../Pages/LearnMore/LearnMore";
import { Feedback } from "../../Pages/Feedback/Feedback";

export default function AnimatedRouter() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skils" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/team" element={<Team />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/learn-more" element={<LearnMore />} />
      </Routes>
    </AnimatePresence>
  );
}
