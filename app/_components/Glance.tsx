import React, { useState, useEffect, useRef } from 'react';
import { FiHome } from 'react-icons/fi';
import styles from './glance.module.css';

const GlanceComponent = () => {
  const [glance, setGlance] = useState({
    campuses: 0,
    foundingYear: 0,
    classrooms: 0,
    parents: 0,
    passRate: 0,
  });

  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const campusesTimer = setInterval(() => {
            setGlance((prevGlance) => {
              if (prevGlance.campuses < 2) {
                return { ...prevGlance, campuses: prevGlance.campuses + 0.02 };
              } else {
                clearInterval(campusesTimer);
                return prevGlance;
              }
            });
          }, 100);

          const foundingYearTimer = setInterval(() => {
            setGlance((prevGlance) => {
              if (prevGlance.foundingYear < 2017) {
                return { ...prevGlance, foundingYear: prevGlance.foundingYear + 20.17 };
              } else {
                clearInterval(foundingYearTimer);
                return prevGlance;
              }
            });
          }, 100);

          const classroomsTimer = setInterval(() => {
            setGlance((prevGlance) => {
              if (prevGlance.classrooms < 40) {
                return { ...prevGlance, classrooms: prevGlance.classrooms + 0.4 };
              } else {
                clearInterval(classroomsTimer);
                return prevGlance;
              }
            });
          }, 100);

          const parentsTimer = setInterval(() => {
            setGlance((prevGlance) => {
              if (prevGlance.parents < 100) {
                return { ...prevGlance, parents: prevGlance.parents + 1 };
              } else {
                clearInterval(parentsTimer);
                return prevGlance;
              }
            });
          }, 100);

          const passRateTimer = setInterval(() => {
            setGlance((prevGlance) => {
              if (prevGlance.passRate < 100) {
                return { ...prevGlance, passRate: prevGlance.passRate + 10 };
              } else {
                clearInterval(passRateTimer);
                return prevGlance;
              }
            });
          }, 100);

          // Disconnect observer after starting the timers
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.9,
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      // Proper cleanup to clear all intervals
      observer.disconnect();
    };
  }, []);

  return (
    <section  className={styles.container} style={{ background: `url("/images/admission-process.png")`, backgroundSize: "cover" }} id="glance">
      <div className={styles.backgroundImg}></div>
      <div className={styles.wrapper}>
        <h4 className={`${styles.header}`}>At a glance</h4>
        <div className={styles.row}>
          {/* Example content */}
          <p className={styles.para}>
            <span className={styles.iconHeader}>
              <FiHome size={48} color="#fff" />
            </span>
            <span className={styles.textBody} ref={elementRef}>No.4 Aliade street High level Makurdi.</span>
          </p>
          {/* Displaying countdown values */}
          <p className={styles.para}>
            <span className={styles.iconHeader}>{Math.floor(glance.campuses)}</span>
            <span className={styles.textBody}>Campuses</span>
          </p>
          <p className={styles.para}>
            <span className={styles.iconHeader}>{Math.floor(glance.foundingYear)}</span>
            <span className={styles.textBody}>Founding Year</span>
          </p>
          <p className={styles.para}>
            <span className={styles.iconHeader}>{Math.floor(glance.classrooms)}</span>
            <span className={styles.textBody}>Classrooms</span>
          </p>
          <p className={styles.para}>
            <span className={styles.iconHeader}>{Math.floor(glance.parents)}%</span>
            <span className={styles.textBody}>Satisfied Parents</span>
          </p>
          <p className={styles.para}>
            <span className={styles.iconHeader}>{Math.floor(glance.passRate)}%</span>
            <span className={styles.textBody}>Pass Rate</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlanceComponent;