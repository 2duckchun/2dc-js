import transfiguration from "#/masterpieces/the_transfiguration.jpg";
import girlWhoReading from "#/masterpieces/la_liseuse.jpg";
import napoleon from "#/masterpieces/napoleon.jpg";
import wanderer from "#/masterpieces/wanderer.jpg";
import girtWithPearl from "#/masterpieces/girl_with_pearl.jpg";
import styles from "./JavaScriptPage.module.scss";
import CURRICULUM from "./JS_CURRICULUM_LIST.json";
import CurriculumCard from "@/app/_component/_curriculum/CurriculumCard";
import getMasterPiece from "@/_utils/getMasterPiece";
import { StaticImageData } from "next/image";

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
            curriculum={"js"}
          />
        ))}
      </section>
      <section className={styles.curriculum_reference_container}></section>
    </div>
  );
}
