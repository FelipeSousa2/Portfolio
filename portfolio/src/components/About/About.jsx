import { use } from "react";
import styles from "./About.module.sass";
import useSanityImage from "src/hooks/useSanityimage";
import Image from "next/image";
import Box from "../UI/Box";

export default function About({ about }) {
  const { image, title, text, button, url } = about;

  const renderBiography = text.map((text) => (
    <p key={text._key}>{text.paragraph}</p>
  ));

  const imageUrl = useSanityImage();

  return (
    <section className={styles.about} id="about">
      <div className={styles.image}>
        <Image src={imageUrl(image).url()} layout="fill" />
        <div className={styles.box}>
          <Box text="sobre" />
        </div>
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        {renderBiography}
        <a href={url} className="btn btn-primary">
          {button}
        </a>
      </div>
    </section>
  );
}
