"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Image from "next/image";
import styles from "./testimonials.module.css";
import { FaQuoteLeft } from "react-icons/fa";

type Props = {};

interface testimonial {
  left: string;
  main: string;
  right: string;
  comment: string;
  role: string;
  name: string;
}

const Testimonials = (props: Props) => {
  const testimonials: testimonial[] = [
    {
      left: "/images/testimonial-004.jpg",
      main: "/images/testimonial-001.jpg",
      right: "/images/testimonial-002.jpg",
      comment:
        "I have great confidence in SMAA. My son started reading and writing in Nursery 2. I can recommend the School to whoever wants qualitative and excellent Education for their children any day.",
      role: "Parent",
      name: "Jude Nyagba",
    },
    {
      left: "/images/testimonial-001.jpg",
      main: "/images/testimonial-002.jpg",
      right: "/images/testimonial-003.jpg",
      comment:
        "I am super proud to be a staff of this great school. The curriculum is second to none and each child is treated with care. The management team is awesome, they make sure that the staff are given good training for the job by organising workshops and training sessions.",
      role: "Teacher",
      name: "Terwase Ngufan Jessica",
    },
    {
      left: "/images/testimonial-002.jpg",
      main: "/images/testimonial-003.jpg",
      right: "/images/testimonial-004.jpg",
      comment: "SMAAM offers you so many opportunities for growth. Workshops/Seminars by Certified teachers are organised at the beginning of every Session. Incentives are given to both staff and students at intervals as a form of encouragement. Overall, it is a fun place to work in",
      role: "Teacher",
      name: "Mrs. Mokwe Jeraldine",
    },
    {
      left: "/images/testimonial-003.jpg",
      main: "/images/testimonial-004.jpg",
      right: "/images/testimonial-001.jpg",
      comment:
        "I celebrate you great TEACHERS of ST MICHAEL THE ARCHANGEL.  Your impactful knowledge is highly recognized and appreciated. Remain blessed.",
      role: "Parent",
      name: "Okigbo James",
    },
  ];

  return (
    <>
      <section className={styles.container} id="testimonial">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          // pagination={{
          //   clickable: true,
          // }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className={styles.wrapper}
        >
          {testimonials.map((testimonial: testimonial) => {
            return (
              <SwiperSlide key={Math.random() * 1000000}>
                <div className={styles.wrapper}>
                  <div className={styles.topDiv}>
                    <FaQuoteLeft
                      className={styles.quoteIconLeft}
                      size={48}
                      color="#fff"
                    />
                    <div className={styles.quoteBox}>
                      <p className={styles.quotesPara}>{testimonial.comment}</p>
                    </div>
                    <p className={styles.quoteAuthor}>{testimonial.name}</p>
                    <p className={styles.quoteRole}>{testimonial.role}</p>
                  </div>

                  <div className={styles.commentWrapper}>
                    <div className={styles.left}>
                      <div className={styles.imgWrapper}>
                        <Image
                          src={testimonial.left}
                          alt="recommendation"
                          fill={true}
                          className={styles.image}
                        />
                      </div>
                    </div>
                    <div className={styles.mid}>
                      <div className={styles.midImgWrapper}>
                        <Image
                          src={testimonial.main}
                          alt="recommendation"
                          fill={true}
                          className={styles.image}
                        />
                      </div>
                    </div>
                    <div className={styles.right}>
                      <div className={styles.imgWrapper}>
                        <Image
                          src={testimonial.right}
                          alt="recommendation"
                          fill={true}
                          className={styles.image}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

    </>
  );
};

export default Testimonials;
