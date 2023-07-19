"use client";

import styles from "./ChapterJS.module.scss";
import Chap0Act1 from "./(act)/Chap0Act1";
import Chap0Act2 from "./(act)/Chap0Act2";

const code = `console.log("안녕")
a = b`;

export default function JSChapter0() {
  return (
    <section className={styles.chapter_section_container}>
      <Chap0Act1 />
      {/* <Chap0Act2 /> */}
    </section>
  );
}
