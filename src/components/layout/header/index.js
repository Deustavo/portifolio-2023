import styles from "./styles.module.scss";

export default function Header() {
  return (
    <div className={styles.layout__header}>
      <div className={styles.layout__header__left}>
        <span>Gustavo Andrade</span>
      </div>
      <div className={styles.layout__header__right}>
        <span>Menu</span>
      </div>
    </div>
  );
}
