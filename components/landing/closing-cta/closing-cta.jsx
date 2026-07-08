"use client";

import { motion } from "framer-motion";
import { Swords } from "lucide-react";
import { PrimaryCta, SecondaryCta } from "../cta/cta";
import styles from "./closing-cta.module.scss";

export function ClosingCta() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={styles.title}
        >
          Your first duel
          <span className={styles.titleAccent}>is thirty seconds away.</span>
        </motion.h2>

        <div className={styles.ctaRow}>
          <PrimaryCta>Create your account</PrimaryCta>
          <SecondaryCta icon={<Swords size={16} strokeWidth={2} />}>Start a duel</SecondaryCta>
        </div>

        <p className={styles.finePrint}>Free. No credit card. Bring your own curiosity.</p>
      </div>
    </section>
  );
}
