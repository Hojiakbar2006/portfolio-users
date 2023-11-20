import React from "react";
import "./Project.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";


export function Project() {
const data = useSelector((state) => state.project);


  const project = [];

  data.map((item, index) => {
    project.push({
      id: item.id,
      name: item.name,
      text: item.text,
      img: item.img,
      delay: index / 4,
    });
    return null;
  });

  return (
    <div id="project">
      <motion.div
        className="head"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
      >
        <h3>Get to know</h3>
        <h1>My Portfolio</h1>
      </motion.div>

      <div className="main">
        {project.map((item, i) => {
          return (
            <motion.div
              className="box"
              key={i}
              initial={{ x: 300, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.4, delay: item.delay },
              }}
            >
              <figure className="img-box">
                <img src={item.img} alt="img" />
              </figure>
              <div className="content">
                <h4>{item.name}</h4>
                <p>{item.text}</p>
                <div className="btns">
                  <a className="btn" href="http://" >
                    Demo
                  </a>
                  <a className="btn" href="http://" >
                    Github
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
