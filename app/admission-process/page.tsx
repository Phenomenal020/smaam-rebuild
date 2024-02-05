'use client';


import { motion } from "framer-motion";
import AdmissionProcess from "./Container";

function Page() {
  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0 
    },
    exit: {
      opacity: 0,
      scale: 1.2,
    }
  };

  const pageTransition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    duration: 1 
  };

  return (
    <motion.section
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      <AdmissionProcess />
    </motion.section>
  );
}

export default Page;

