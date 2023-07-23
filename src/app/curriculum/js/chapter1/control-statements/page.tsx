import styles from "@/styles/Chapter.module.scss";
import { chaptersInfo } from "../../JS_CHAPTER_INFO";

import CustomImageWithCaption from "@/app/_component/_common/CustomImageWithCaption";
import CodeBox from "@/app/_component/_curriculum/CodeBox";
import ActNavigator from "@/app/_component/_curriculum/ActNavigator";
import CustomLink from "@/app/_component/_common/CustomLink";

const lessonCode = {};

export default function LessonPage() {
  return (
    <div className={styles.act_container}>
      <ActNavigator
        curriculum="js"
        highlightActNum={2}
        chapterInfo={chaptersInfo.chapter1}
      ></ActNavigator>
      <h1>제어문(control-statements)</h1>
      <h2>제어문의 기초 토대</h2>
      <h3>블록(block)</h3>
      <h4>continue</h4>
      <h4>break</h4>
      <h2>truthy, falsy</h2>
      <h2>조건문</h2>
      <h3>if</h3>
      <h3>switch(분기문)</h3>
      <h2>반복문</h2>
      <h3>for</h3>
      <h3>while</h3>
      <h2>Exercise</h2>
    </div>
  );
}
