import { DeviceFrame } from "../device-frame/device-frame";
import styles from "./duel-section.module.scss";
import playShot from "@/pictures/skillduel-play.png";

const CHECKLIST = [
  "30-second timer per question",
  "AI-generated on your topic",
  "Instant explanations",
  "Bonus XP for streaks",
];

export function DuelSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div>
          <p className={styles.overline}>The duel</p>
          <h2 className={styles.title}>
            Five questions.
            <br />
            One winner.
          </h2>
          <p className={styles.lead}>
            A 30-second timer, four options, one correct answer. Each question comes with a
            short explanation — so even when you lose, you leave a little smarter.
          </p>
          <ul className={styles.checklist}>
            {CHECKLIST.map((item) => (
              <li key={item} className={styles.checkItem}>
                <span className={styles.checkDot}>
                  <span />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.phone}>
          <DeviceFrame
            src={playShot}
            alt="Live duel question screen with topic banner, VS score header and timer bar"
            sizes="320px"
          />
        </div>
      </div>
    </section>
  );
}
