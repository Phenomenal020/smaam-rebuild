'use client'

import { motion } from 'framer-motion';
import ContactSection from './Container';
// import ContactSectionAlt from './ContainerAlt';

function Page() {
  // const pageVariants = {
  //   initial: {
  //     opacity: 0,
  //     scale: 0,
  //   },
  //   animate: {
  //     opacity: 1,
  //     scale: 1,
  //     x: 0 
  //   },
  //   exit: {
  //     opacity: 0,
  //     scale: 1.2,
  //   }
  // };

  // const pageTransition = {
  //   type: "tween", //
  //   duration: .4
  // };


  return (
    // <motion.section
    //   initial="initial"
    //   animate="animate"
    //   exit="exit"
    //   variants={pageVariants}
    //   transition={pageTransition}
    // >
      <ContactSection  />
      // <ContactSectionAlt  />
    // </motion.section>
  );
}

export default Page;