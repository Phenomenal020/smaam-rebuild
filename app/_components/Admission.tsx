// import { ButtonBig } from "@/shared-components/Button";
import Link from "next/link";
import styles from "./admission.module.css";
import { newsReader } from "@/utils/fonts";

type Props = {};

export default function Admission({ }: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.card}>
        <h2 className={`${styles.header} ${newsReader.className}`}>Admission Process</h2>
        <p className={styles.paraText}>
          Interested in enrolling your child at St. Michael the Archangel Academy? Our straightforward admission process makes it simple. Click the link below to view the easy steps for enrolling your child/ward.
        </p>
        <button className='link-btn w-fit my-6 capitalize'><Link href="/admission-process">read more &rarr;</Link></button>
      </div>
    </section>
  );
}