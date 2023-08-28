import client from "src/sanity";
import imageUrlBuilder from "@sanity/image-url";

const useSanityImage = () => {
  const builder = imageUrlBuilder(client);

  const urlfor = (source) => {
    return builder.image(source);
  };

  return urlfor;
};

export default useSanityImage;
