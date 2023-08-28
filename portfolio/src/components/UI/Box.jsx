import styles from "./Box.module.sass";

export default function Box({ text }) {
  return (
    <div className={styles.box}>
      <span className="h5">{text}</span>
    </div>
  );
}
