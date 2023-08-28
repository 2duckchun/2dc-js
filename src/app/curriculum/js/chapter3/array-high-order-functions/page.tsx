// import ExerciseCard from '@/app/_component/_curriculum/ExcerciseCard';
// import CustomImageWithCaption from '@/components/_common/CustomImageWithCaption';
import ActNavigator from '@/components/curriculum/ActNavigator';
import { chaptersInfo } from '@/constants/js_curriculum/js_chapters_info';
// import CodeBox from '@/containers/curriculum/CodeBox';
import styles from '@/styles/curriculum/Lecture.module.scss';

// const lessonCode = {};

export default function Lecture() {
  return (
    <div className={styles.act_container}>
      <ActNavigator
        curriculum='js'
        highlightActNum={3}
        chapterInfo={chaptersInfo.chapter3}
      ></ActNavigator>
      <h1>배열 고차 함수</h1>
      <h2>고차함수는 무엇인가?</h2>
      <h2>콜백함수란?</h2>
      <h2>배열 고차함수</h2>
      <h3>map</h3>
      <h3>forEach</h3>
      <h4>Exercise</h4>
      <h3>find</h3>
      <h4>Exercise</h4>
      <h3>filter</h3>
      <h4>Exercise</h4>
      <h3>reduce</h3>
      <h4>Exercise</h4>
      <h2>Excercise</h2>
      <p>array.prototype.map 카피하기</p>
      <p>array.prototype.forEach 카피하기</p>
      <p>array.prototype.find 카피하기</p>
      <p>array.prototype.filter 카피하기</p>
      <p>array.prototype.reduce 카피하기</p>
    </div>
  );
}
