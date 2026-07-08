import Image from "next/image";
import styles from "./device-frame.module.scss";

export function DeviceFrame({ src, alt, className = "", sizes, priority = false }) {
  return (
    <div className={`${styles.wrap} ${className}`}>
      <div aria-hidden className={styles.glow} />
      <div className={styles.frame}>
        <div className={styles.screen}>
          <Image
            src={src}
            alt={alt}
            sizes={sizes}
            priority={priority}
            placeholder="blur"
            className={styles.shot}
          />
        </div>
      </div>
    </div>
  );
}
