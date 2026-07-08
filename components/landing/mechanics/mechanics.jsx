import { Sparkles, Timer, Trophy, Users } from "lucide-react";
import styles from "./mechanics.module.scss";

const FEATURES = [
  {
    icon: Sparkles,
    title: "Any topic. Instantly.",
    body: "Type anything from “18th-century opera” to “Rust lifetimes.” We generate five sharp multiple-choice questions on demand.",
  },
  {
    icon: Timer,
    title: "Thirty seconds a question.",
    body: "No time to Google. Just what you already know — versus what they do. Five rounds. Best mind wins.",
  },
  {
    icon: Trophy,
    title: "Rank, don’t grind.",
    body: "Rookie → Scholar → Expert → Master. XP earned in real duels, not tutorials. Every point is contested.",
  },
  {
    icon: Users,
    title: "Duel anyone, anywhere.",
    body: "Find an opponent in seconds, or send a private link. If they open it, the duel is on.",
  },
];

export function Mechanics() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.overline}>The mechanics</p>
        <h2 className={styles.title}>Built like a game. Sharp like a benchmark.</h2>

        <div className={styles.grid}>
          <div className={styles.cells}>
            {FEATURES.map(({ icon: Icon, title, body }) => (
              <div key={title} className={styles.cell}>
                <div className={styles.iconBox}>
                  <Icon size={20} strokeWidth={2.2} />
                </div>
                <h3 className={styles.cellTitle}>{title}</h3>
                <p className={styles.cellBody}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
