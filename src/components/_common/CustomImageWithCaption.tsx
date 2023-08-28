import Image, { StaticImageData } from 'next/image';

import styles from './CustomImageWithCaption.module.scss';

type CustomImageWithCaptionProps = {
  imageSrc: StaticImageData;
  width: number;
  height: number;
  alt: string;
  caption: string;
  paddingValue?: number;
  borderRadiusValue?: number;
};

export default function CustomImageWithCaption({
  imageSrc,
  width,
  height,
  alt,
  caption,
  paddingValue = 5,
  borderRadiusValue = 5,
}: CustomImageWithCaptionProps) {
  return (
    <div
      style={{
        width: width,
        padding: paddingValue,
        borderRadius: borderRadiusValue,
      }}
      className={styles.image_caption_container}
    >
      <div className={styles.image_box}>
        <Image
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          src={imageSrc}
          alt={alt}
        />
      </div>
      <p className={styles.caption}>{caption}</p>
    </div>
  );
}
