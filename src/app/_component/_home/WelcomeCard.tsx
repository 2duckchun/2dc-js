import Image from "next/image";
import styles from "./WelcomeCard.module.scss";

// images
import block from "#/images/home/block.jpg";
import bubble from "#/images/home/bubble.jpg";
import questionMark from "#/images/home/question-mark.jpg";

export default function WelcomeCard({ isShowCard }: { isShowCard: boolean }) {
  return (
    <div
      className={`${styles.welcome_card_container} ${
        isShowCard ? "" : styles.no_show
      }`}
    >
      <div className={styles.welcome_card}>
        <div className={styles.welcome_card_image}>
          <Image
            src={block}
            className={styles.next_card_image}
            alt="기초 블록"
          />
        </div>

        <div>
          <p>
            <span>자바스크립트</span>의 <span>기초</span>를 잡습니다.
          </p>
          <p>어렵지만 확실하게 공부합니다!</p>
        </div>
      </div>
      <div className={styles.welcome_card}>
        <div className={styles.welcome_card_image}>
          <Image
            className={styles.next_card_image}
            src={bubble}
            alt="버블버블"
          />
        </div>
        <div>
          <p>
            <span>자료구조</span>를 공부하고
          </p>
          <p>효과적인 알고리즘을 배웁니다.</p>
        </div>
      </div>
      <div className={styles.welcome_card}>
        <div className={styles.welcome_card_image}>
          {" "}
          <Image
            className={styles.next_card_image}
            src={questionMark}
            alt="물음표"
          />
        </div>
        <div>
          <p>모르는 부분을 점차 채워나갑니다.</p>
          <p>
            관점을 나누고 <span>생각</span>을 <span>공유</span>합니다!
          </p>
        </div>
      </div>
    </div>
  );
}
