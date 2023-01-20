import styles from "./styles.module.scss";

export default function Cover() {
  return (
    <div className={styles.cover}>
      <div className={styles.cover__name}>
        <b>Gustavo Andrade</b>
        <span>, desenvolvedor de</span>
      </div>
      <div className={styles.cover__apresentation}>
        <span>UI & UX</span>
      </div>
    </div>
  );
}
