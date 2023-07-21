"use client";

import { CurriculumCartPropsType } from "@/types/common";
import styles from "./CurriculumCard.module.scss";
import Image from "next/image";
import CustomLink from "../_common/CustomLink";

export default function CurriculumCard({
  imageFile,
  chapter,
  firstLesson,
  subject,
  explain,
  curriculum,
}: CurriculumCartPropsType) {
  return (
    <div className={styles.card_container}>
      <div className={styles.image_container}>
        <Image
          className={styles.next_card_image}
          src={imageFile}
          alt={`${chapter}의 타이틀 명화`}
        />
      </div>
      <div className={styles.card_info}>
        <p className={styles.card_chapter}>{chapter}</p>
        <h3 className={styles.card_title}>{subject}</h3>
        <p>{explain}</p>
        <div className={styles.card_button_container}>
          <CustomLink
            href={{
              pathname: `/curriculum/${curriculum}/${chapter}/${firstLesson}`,
            }}
          >
            <button className={styles.card_button}>공부하러 가기!</button>
          </CustomLink>
        </div>
      </div>
    </div>
  );
}
