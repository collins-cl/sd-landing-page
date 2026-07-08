import { Swords } from "lucide-react";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.tile}>
            <Swords size={12} strokeWidth={2.5} />
          </span>
          SkillDuel © {new Date().getFullYear()}
        </div>
        <p className={styles.made}>Made for curious minds.</p>
      </div>
    </footer>
  );
}
