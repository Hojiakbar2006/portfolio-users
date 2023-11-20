import React from 'react'
import "./Feedback.css"
import { motion } from 'framer-motion';

export function Feedback() {
  return (
    <div id="feedback">
      <motion.div
        className="head"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
      >
        <h4>Send For me</h4>
        <h1>Feedback</h1>
      </motion.div>
      <div className="form">
        <div>
          <motion.input
            initial={{ y: -400, x: -400, opacity: 0 }}
            animate={{ y: 0, x: 0, opacity: 1, transition: { duration: 0.5 } }}
            type="text"
            name="name"
            placeholder="Name"
          />
          <motion.input
            initial={{ y: -400, x: 400, opacity: 0 }}
            animate={{
              y: 0,
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, },
            }}
            type="text"
            name="name"
            placeholder="Surname"
          />
          <motion.input
            initial={{ y: -400, x: -400, opacity: 0 }}
            animate={{
              y: 0,
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: 0.3 },
            }}
            type="email"
            name="name"
            placeholder="Email"
          />
          <motion.input
            initial={{ y: -400, x: 400, opacity: 0 }}
            animate={{
              y: 0,
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: 0.3 },
            }}
            type="text"
            name="name"
            placeholder="Phone number"
          />
        </div>
        <motion.textarea
          initial={{ y: 400, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: .6 },
          }}
          name="message"
          placeholder="Messages"
        ></motion.textarea>
        <motion.button
          initial={{ y: 400, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: .9 },
          }}
          name="message"
          className="btn"
          type="submit"
          style={{ transition: "none" }}
        >
          Send Feedback
        </motion.button>
      </div>
    </div>
  );
}
