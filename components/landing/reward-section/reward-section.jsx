import { DeviceFrame } from "../device-frame/device-frame";
import styles from "./reward-section.module.scss";
import resultShot from "@/pictures/skillduel-result.png";

export function RewardSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Copy first in DOM so mobile stacks copy-above-phone (§10) */}
        <div className={styles.copy}>
          <p className={styles.overline}>The reward</p>
          <h2 className={styles.title}>
            Rank up. Or don&rsquo;t.
            <br />
            Either way — rematch.
          </h2>
          <p className={styles.lead}>
            XP is earned, never given. Climb from Rookie to Master, unlock topical badges, and
            defend your place on a leaderboard that only counts real duels.
          </p>
        </div>

        <div className={styles.phone}>
          <DeviceFrame
            src={resultShot}
            alt="Duel result screen with trophy, score card and XP gains"
            sizes="320px"
          />
        </div>
      </div>
    </section>
  );
}
