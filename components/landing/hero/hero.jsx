"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Zap } from "lucide-react";
import { PrimaryCta, SecondaryCta } from "../cta/cta";
import { DeviceFrame } from "../device-frame/device-frame";
import styles from "./hero.module.scss";
import dashboardShot from "@/pictures/skillduel-dashboard.png";
import leaderboardShot from "@/pictures/skillduel-leaderboard.png";
import playShot from "@/pictures/skillduel-play.png";

const entrance = (delay) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: "easeOut" },
});

export function Hero() {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.inner}>
        {/* Copy block — parallaxes on scroll; mockups stay put */}
        <motion.div style={reducedMotion ? undefined : { y, opacity }} className={styles.copy}>
          <motion.div {...entrance(0)} className={styles.eyebrow}>
            <span aria-hidden className={styles.pulseDot} />
            Now in open beta
          </motion.div>

          <motion.h1 {...entrance(0.05)} className={styles.title}>
            Prove you know it.
            <span className={styles.titleMuted}>In under two minutes.</span>
          </motion.h1>

          <motion.p {...entrance(0.15)} className={styles.lead}>
            SkillDuel turns curiosity into a game. Challenge anyone to a five-question duel on
            any topic in the world — chess-clock tight, Duolingo satisfying.
          </motion.p>

          <motion.div {...entrance(0.25)} className={styles.ctaRow}>
            <PrimaryCta>Create your account</PrimaryCta>
            <SecondaryCta icon={<Zap size={16} strokeWidth={2} />}>Start a duel</SecondaryCta>
          </motion.div>
        </motion.div>

        {/* Device cluster — three phones fanned */}
        <div className={styles.stage}>
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{ duration: 0.9, delay: 0.05, ease: "easeOut" }}
            className={styles.phoneLeft}
          >
            <DeviceFrame
              src={leaderboardShot}
              alt="SkillDuel leaderboard with podium and ranked player list"
              sizes="(min-width: 768px) 300px, 52vw"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 56, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            transition={{ duration: 0.9, delay: 0.125, ease: "easeOut" }}
            className={styles.phoneCenter}
          >
            <DeviceFrame
              src={dashboardShot}
              alt="SkillDuel dashboard with rank, XP and active duels"
              sizes="(min-width: 768px) 346px, 62vw"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 6 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className={styles.phoneRight}
          >
            <DeviceFrame
              src={playShot}
              alt="Live duel question screen with timer and four options"
              sizes="(min-width: 768px) 300px, 52vw"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
