import { ArrowRight, Swords } from "lucide-react";
import Link from "next/link";
import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.wordmark}>
          <span className={styles.tile}>
            <Swords size={14} strokeWidth={2.5} />
          </span>
          <span className={styles.name}>SkillDuel</span>
        </div>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://app.skillduel.app/auth?next=%2F"
          className={styles.signup}
        >
          Sign up
          <ArrowRight className={styles.arrow} size={14} strokeWidth={2} />
        </Link>
      </div>
    </header>
  );
}
