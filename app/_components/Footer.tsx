import styles from "./footer.module.css";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="w-full bg-[#1F2937] py-8" id="footer">
      <footer className={styles.container}>
        {/* social media wrapper */}
        <div className={styles.top}>
          <Link
            href="https://www.facebook.com/profile.php?id=100075831671661"
            target="_blank"
          >
            <BsTwitter
              size={30}
              color="#fff"
              style={{ cursor: "pointer", marginRight: ".5em" }}
            />
          </Link>

          <Link
            href="https://www.facebook.com/profile.php?id=100075831671661"
            target="_blank"
          >
            <FaFacebookF
              size={30}
              color="#fff"
              style={{ cursor: "pointer", marginRight: ".5em" }}
            />
          </Link>

          <Link
            href="https://wa.me/message/VPY42GHRUKNZC1"
            target="_blank"
          >
            <RiInstagramFill
              size={30}
              color="#fff"
              style={{ cursor: "pointer", marginRight: ".5em" }}
            />
          </Link>

          <Link
            href="https://wa.me/message/VPY42GHRUKNZC1"
            target="_blank"
          >
            <IoLogoWhatsapp
              size={30}
              color="#fff"
              style={{ cursor: "pointer", marginRight: ".5em" }}
            />
          </Link>
        </div>

        {/* get in touch */}
        <div className={styles.mid}>
          {/* Get in touch */}
          <div className={styles.contactInfo}>
            <h4 className={styles.getInTouch}>Get in touch</h4>
            <p className={styles.address}>
              No. 4 Aliade Street Highlevel, Makurdi
            </p>
            <p className={styles.phone}>08069371264</p>
            <p className={styles.email}>
              st.michaelthearchangelacademy@gmail.com
            </p>
          </div>

          <h4 className={styles.getInTouch}>Site Navigation</h4>
          <div className={styles.siteNavWrapper}>
            <div className={styles.info}>
              <p className={styles.linkHeader}>
                <Link href="/">Home</Link>
              </p>
              <p className={styles.linkHeader}>
                <Link href="/#calendar">calendar</Link>
              </p>
            </div>

            <div className={styles.info}>
              <p className={styles.linkHeader}>
                <Link href="/the-school">the school</Link>
              </p>
              <p className={styles.linkHeader}>
                <Link href="/welcome">founder&apos;s note</Link>
              </p>
            </div>

            <div className={styles.info}>
              <p className={styles.linkHeader}>
                <Link href="/blog">news</Link>
              </p>
              <p className={styles.linkHeader}>
                <Link href="/#testimonial">testimonials</Link>
              </p>
            </div>

            <div className={styles.info}>
              <p className={styles.linkHeader}>
                <Link href="/contact">contact us</Link>
              </p>
              <p className={styles.linkHeader}>
                <Link href="/contact#map">map</Link>
              </p>
            </div>

            <div className={styles.info}>
              <p className={styles.linkHeader}>
                <Link href="/admission-process">admissions</Link>
              </p>
              <p className={styles.linkHeader}>
                <Link href="/#glance">at a glance</Link>
              </p>
            </div>
          </div>
        </div>

        {/* copyright wrapper */}
        <div className={styles.bottom}>
          <p className={styles.copyRight}>
            Copyright © 2023 St.Michael the Archangel Academy, Makurdi
          </p>
          <div className={styles.devWrapper}>
            <p>Designer: Ezenwaka Amarachi</p>
            <p>Developer : Kalu Stephen </p>
          </div>
        </div>
      </footer>
    </section>

  );
}
