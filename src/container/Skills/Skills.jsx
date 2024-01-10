import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import images from "../../constants/images";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";

const data = [
  { name: "React", bgColor: "#edf2f8", icon: images.react },
  { name: "Flutter", bgColor: "#edf2f8", icon: images.flutter },
  { name: "Git", bgColor: "#edf2f8", icon: images.git },
  { name: "Node JS", bgColor: "#edf2f8", icon: images.node },
];

const WorkData = [
  {
    year: 2022,
    works: [
      {
        name: "frontent Developer",
        company: "Google",
        desc: "I worked as a frontend developer at Google ",
      },
      {
        name: "frontent Developer",
        company: "Meta",
        desc: "I worked as a frontend developer at Meta ",
      },
    ],
  },
  {
    year: 2023,
    works: [
      {
        name: "frontent Developer",
        company: "Netflix",
        desc: "I worked as a frontend developer at Netflix ",
      },
      {
        name: "frontent Developer",
        company: "amazon",
        desc: "I worked as a frontend developer at amazon ",
      },
    ],
  },
];

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setExperiences(WorkData);
    setSkills(data);
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
