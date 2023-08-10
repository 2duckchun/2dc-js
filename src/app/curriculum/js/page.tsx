import styles from "@/styles/CurriculumPage.module.scss";
import transfiguration from "#/masterpieces/the_transfiguration.jpg";
import girlWhoReading from "#/masterpieces/la_liseuse.jpg";
import napoleon from "#/masterpieces/napoleon.jpg";
import wanderer from "#/masterpieces/wanderer.jpg";
import girtWithPearl from "#/masterpieces/girl_with_pearl.jpg";
import CURRICULUM from "./JS_CURRICULUM_LIST.json";
import CurriculumCard from "@/app/_component/_curriculum/CurriculumCard";
import getMasterPiece from "@/_utils/getMasterPiece";
import { StaticImageData } from "next/image";
import CustomLink from "@/app/_component/_common/CustomLink";

const masterPieceArr: StaticImageData[] = [
  transfiguration,
  girlWhoReading,
  napoleon,
  wanderer,
  girtWithPearl,
];

export default function JavaScriptPage() {
  return (
    <div className={styles.curriculum_container}>
      <section className={styles.curriculum_card_container}>
        {CURRICULUM.map((cardInfo) => (
          <CurriculumCard
            key={cardInfo.chapter}
            imageFile={getMasterPiece(cardInfo.art_index, masterPieceArr)}
            chapter={cardInfo.chapter}
            subject={cardInfo.subject}
            explain={cardInfo.explain}
            firstLesson={cardInfo.first_lesson}
            curriculum={"js"}
          />
        ))}
      </section>
      <section className={styles.curriculum_reference_container}>
        <h2>Reference</h2>
        <CustomLink
          href={{ pathname: "https://ko.javascript.info/" }}
          isBlank={true}
        >
          <p>모던 JavaScript 튜토리얼</p>
        </CustomLink>
        <CustomLink
          href={{ pathname: "https://poiemaweb.com/" }}
          isBlank={true}
        >
          <p>poiemaweb</p>
        </CustomLink>
        <CustomLink
          href={{ pathname: "https://www.zerocho.com/" }}
          isBlank={true}
        >
          <p>제로초님 블로그</p>
        </CustomLink>
        <CustomLink href={{ pathname: "https://www.c0d3.com/" }} isBlank={true}>
          <p>C0D3</p>
        </CustomLink>
        <CustomLink
          href={{
            pathname: "https://developer.mozilla.org/ko/",
          }}
          isBlank={true}
        >
          <p>MDN Web Docs</p>
        </CustomLink>
        <CustomLink
          href={{
            pathname: "https://www.udemy.com/",
          }}
          isBlank={true}
        >
          <p>Udemy</p>
        </CustomLink>
      </section>
    </div>
  );
}
