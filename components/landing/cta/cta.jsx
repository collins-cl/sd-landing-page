import { ArrowRight } from "lucide-react";
import Link from "next/link";
import styles from "./cta.module.scss";

export function PrimaryCta({ children }) {
  return (
    <Link
      href="https://skill-duel-tau.vercel.app/auth"
      className={styles.primary}
    >
      {children}
      <ArrowRight className={styles.arrow} size={16} strokeWidth={2} />
    </Link>
  );
}

export function SecondaryCta({ children, icon }) {
  return (
    <Link
      href="https://skill-duel-tau.vercel.app/duel/topic"
      className={styles.secondary}
    >
      {icon}
      {children}
    </Link>
  );
}
