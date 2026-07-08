"use client";

import { motion } from "framer-motion";
import { DeviceFrame } from "../device-frame/device-frame";
import styles from "./stage-section.module.scss";
import topicsShot from "@/pictures/skillduel-topics.png";
import profileShot from "@/pictures/skillduel-profile.png";
import leaderboardShot from "@/pictures/skillduel-leaderboard.png";

const PHONES = [
  {
    src: topicsShot,
    alt: "Topic selection screen with search, topic grid and difficulty pills",
    caption: "Choose a topic",
    offset: false,
  },
  {
    src: profileShot,
    alt: "Player profile with avatar, rank, stats and badges",
    caption: "Your record",
    offset: true,
  },
  {
    src: leaderboardShot,
    alt: "Global leaderboard with podium and ranked list",
    caption: "Global ranks",
    offset: false,
  },
];

export function StageSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.overline}>The stage</p>
        <h2 className={styles.title}>A quiet arena for loud minds.</h2>

        <div className={styles.grid}>
          {PHONES.map(({ src, alt, caption, offset }, i) => (
            <div key={caption} className={offset ? styles.offset : undefined}>
              <motion.figure
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              >
                <DeviceFrame src={src} alt={alt} sizes="(min-width: 768px) 330px, 45vw" />
                <figcaption className={styles.caption}>{caption}</figcaption>
              </motion.figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
