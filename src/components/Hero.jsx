import React, { useEffect, useState } from "react";
import myImage from "../assets/myImage.png"; 
import { motion } from "framer-motion";

function Hero() {
  const [experienceDuration, setExperienceDuration] = useState("");

  useEffect(() => {
    const startDate = new Date(2024, 0); // January 2024
    const now = new Date();
    const duration = Math.floor((now - startDate) / (1000 * 60 * 60 * 24 * 30)); // Months

    const years = Math.floor(duration / 12);
    const months = duration % 12;

    setExperienceDuration(`${years ? years + " year" + (years > 1 ? "s" : "") + " and " : ""}${months} month${months !== 1 ? "s" : ""}`);
  }, []);

  return (
    <section className="flex flex-col justify-center items-center text-center h-screen w-screen px-6">
      <motion.img 
        src={myImage} 
        alt="Abdullah Ahmad" 
        className="w-40 h-40 rounded-full mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h2 
        className="text-4xl font-bold"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Full-Stack Developer
      </motion.h2>
      <motion.p 
        className="mt-4 text-gray-400"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        I build web and mobile applications that solve real-world problems.
      </motion.p>
      <motion.p 
        className="mt-4 text-gray-400"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Experience: {experienceDuration}
      </motion.p>
    </section>
  );
}

export default Hero;
