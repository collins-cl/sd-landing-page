"use client";

import { motion } from "framer-motion";
import styles from "./topic-marquee.module.scss";

const TOPICS = [
  "Coding",
  "History",
  "Finance",
  "Astrophysics",
  "Design",
  "Chess Openings",
  "Machine Learning",
  "Roman Empire",
  "Product",
  "World Cinema",
  "Poker Theory",
  "Neuroscience",
  "Music Theory",
];

function PillBlock() {
  return (
    <div className={styles.block}>
      {[...TOPICS, ...TOPICS].map((topic, i) => (
        <span key={i} className={styles.pill}>
          <span className={styles.dot} />
          {topic}
        </span>
      ))}
    </div>
  );
}

export function TopicMarquee() {
  return (
    <section className={styles.section}>
      <p className={styles.overline}>Duel on anything</p>
      <div className={styles.viewport}>
        {/* Track holds two identical blocks; -50% lands exactly on the seam */}
        <motion.div
          aria-hidden
          className={styles.track}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          <PillBlock />
          <PillBlock />
        </motion.div>
      </div>
    </section>
  );
}
