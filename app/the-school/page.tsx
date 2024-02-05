'use client'

import { motion } from 'framer-motion';
import Container from './Container';

function Page() {
  const pageVariants = {
    initial: {
      y: '-100vh',
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50, damping: 20 }
    },
    exit: {
      y: '100vh',
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const pageTransition = {
    type: "spring",
    stiffness: 150,
    damping: 10,
    duration: 0.5
  };

  return (
    <motion.section
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Container />
    </motion.section>
  );
}

export default Page;
