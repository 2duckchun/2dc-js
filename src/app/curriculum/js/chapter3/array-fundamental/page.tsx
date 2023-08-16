import styles from "@/styles/Chapter.module.scss";
import { chaptersInfo } from "../../JS_CHAPTER_INFO";
import recursiveCallStack from "#/chap2/recursiveCallStack.png";
import CustomImageWithCaption from "@/app/_component/_common/CustomImageWithCaption";
import CodeBox from "@/app/_component/_curriculum/CodeBox";
import ActNavigator from "@/app/_component/_curriculum/ActNavigator";
import CustomLink from "@/app/_component/_common/CustomLink";
import ExerciseCard from "@/app/_component/_curriculum/ExcerciseCard";

const lessonCode = {};

export default function Lecture() {
  return (
    <div className={styles.act_container}>
      <ActNavigator
        curriculum="js"
        highlightActNum={1}
        chapterInfo={chaptersInfo.chapter3}
      ></ActNavigator>
      <h1>배열 기초</h1>

      <h2>배열이란 무엇인가?</h2>

      <h2>원시형과 참조형</h2>
      <h3>원시값</h3>
      <h3>참조값</h3>
      <h3>Exercise</h3>
      <p>순환 참조 문제1</p>
      <p>순환 참조 문제2</p>

      <h2>배열의 구성요소</h2>

      <h3>엘리먼트</h3>
      <h3>인덱스</h3>

      <h2>Exercise</h2>
      <p>배열의 length, 배열의 최대 인덱스</p>
      <p>배열 내 모든 데이터 console.log</p>
    </div>
  );
}
