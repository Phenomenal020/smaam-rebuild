'use client'

import { motion } from 'framer-motion';
import FeaturedNewsSection from './Container';

type Props = {};

function page({ }: Props) {
  // const pageVariants = {
  //   initial: {
  //     opacity: 0,
  //     scale: 0,
  //   },
  //   animate: {
  //     opacity: 1,
  //     scale: 1,
  //   },
  //   exit: {
  //     opacity: 0,
  //     scale: 1.2,
  //   }
  // };

  // const pageTransition = {
  //   type: "tween",
  //   duration: .4
  // };

  return (
    // <motion.section
    //   initial="initial"
    //   animate="animate"
    //   exit="exit"
    //   variants={pageVariants}
    //   transition={pageTransition}>
      <FeaturedNewsSection />
    // </motion.section>
  );
}

export default page;