// import CustomImageWithCaption from '@/components/_common/CustomImageWithCaption';
// import CustomLink from '@/components/_common/CustomLink';
import ActNavigator from '@/components/curriculum/ActNavigator';
// import CodeBox from '@/components/curriculum/CodeBox';
// import ExerciseCard from '@/components/curriculum/ExcerciseCard';
import { chaptersInfo } from '@/constants/js_curriculum/js_chapters_info';
import styles from '@/styles/curriculum/Lecture.module.scss';

// const lessonCode = {};

export default function Lecture() {
  return (
    <div className={styles.act_container}>
      <ActNavigator
        curriculum='js'
        highlightActNum={2}
        chapterInfo={chaptersInfo.chapter3}
      ></ActNavigator>
      <h1>프로토타입</h1>
      <h2>내장된 기능(?)</h2>
      <h2>프로토타입 상속</h2>
      <h2>배열 프로토타입</h2>
      <h2>배열 기초 메서드</h2>
      <h3>POP</h3>
      <h4>Exercise</h4>
      <h3>PUSH</h3>
      <h4>Exercise</h4>
      <h3>SHIFT</h3>
      <h4>Exercise</h4>
      <h3>UNSHIFT</h3>
      <h4>Exercise</h4>
      <h3>SLICE</h3>
      <h4>Exercise</h4>
      <h3>SPLICE</h3>
      <h4>Exercise</h4>
      <h2>Excercise</h2>
      <p>array.prototype.pop 카피하기</p>
      <p>array.prototype.push 카피하기</p>
      <p>array.prototype.shift 카피하기</p>
      <p>array.prototype.unshift 카피하기</p>
      <p>array.prototype.slice 카피하기</p>
      <p>array.prototype.splice 카피하기</p>
    </div>
  );
}
