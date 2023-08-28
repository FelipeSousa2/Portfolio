import styles from "./Header.module.sass";
import { RiLinkedinFill, RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram, AiOutlineArrowDown } from "react-icons/ai";
import useSanityImage from "src/hooks/useSanityimage";
import Image from "next/image";

export default function Header({ header, social }) {
  const { image, name, ocupation, summary } = header;
  const { linkedin, instagram, whatsapp } = social;

  const imageUrl = useSanityImage();

  return (
    <header className={styles["header-wrapper"]}>
      <div className={styles.header}>
        <div className={styles.image}>
          <Image src={imageUrl(image).url()} layout="fill" />
        </div>
        <div className={styles.content}>
          <span>Olá 👋 meu nome é {name}. Sou um...</span>
          <h1>{ocupation}</h1>
          <p>{summary}</p>
        </div>
        <div className={styles.social}>
          <a href={linkedin}>
            <RiLinkedinFill className={styles.icons} />
          </a>
          <a href={instagram}>
            <AiFillInstagram className={styles.icons} />
          </a>
          <a href={whatsapp}>
            <RiWhatsappFill className={styles.icons} />
          </a>
        </div>
        <a href="#" className={styles.arrow}>
          <AiOutlineArrowDown className={styles.icon} />
        </a>
      </div>
    </header>
  );
}
