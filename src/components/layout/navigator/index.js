import Image from "next/image";
import styles from "./styles.module.scss";

export default function Navigation() {
  return (
    <div className={styles.layout__navitation}>
      <div className={styles.layout__navitation__left}>
        <Image
          src="assets/arrow-navigation.svg"
          alt="arrow-navigation"
          width={100}
          height={24}
          priority
        />
      </div>
      <div className={styles.layout__navitation__right}>
        <Image
          src="assets/arrow-navigation.svg"
          alt="arrow-navigation"
          width={100}
          height={24}
          priority
        />
      </div>
    </div>
  );
}
