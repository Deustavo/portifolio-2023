import styles from "./styles.module.scss";

export default function Backgorund() {
  return (
    <div className={styles.layout__background}>
      <div className={styles.layout__background__clippath__1} />
      <div className={styles.layout__background__clippath__2} />
      <div className={styles.layout__background__blur} />

      <div className={styles.layout__cursor} />
    </div>
  );
}
