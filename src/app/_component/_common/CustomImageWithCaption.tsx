import Image, { StaticImageData } from "next/image";

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
        margin: "20px 0px",
        width: width,
        minHeight: height,
        padding: paddingValue,
        backgroundColor: "#e5e8eb",
        borderRadius: borderRadiusValue,
      }}
    >
      <div
        style={{
          margin: "0px auto",
          width: "100%",
          height: "100%",
          position: "relative",
          border: "1px solid #000",
        }}
      >
        <Image
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={imageSrc}
          alt={alt}
        />
      </div>
      <p style={{ margin: "5px auto 5px", textAlign: "center", color: "#000" }}>
        {caption}
      </p>
    </div>
  );
}
