import styles from "./Navlink.module.sass";

export default function Navlink({ url, text, toggleMenu = null }) {
  return (
    <li className={styles.item}>
      <a href={url} className="h6" onClick={toggleMenu}>
        {text}
      </a>
    </li>
  );
}
