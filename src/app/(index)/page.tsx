"use client";

import styles from "./page.module.scss";
import { useState } from "react";
import useMonitorElement from "../_clientHooks/useMonitorElement";
import WelcomeCard from "../_component/_index/WelcomeCard";

export default function Home() {
  const [isShowCard, setIsShowCard] = useState(false);
  const showCardCallback = () => {
    setIsShowCard(true);
  };
  const monitoredRef = useMonitorElement(showCardCallback);

  return (
    <>
      <div className={styles.welcome_message}>
        <p ref={monitoredRef}>
          이 곳은 <br />
          제가 배운 것들을 공유하는 <span>공간</span>입니다.
        </p>
        <p>효과적으로 자바스크립트를 배울 수 있는 방법을 연구합니다.</p>
      </div>
      <WelcomeCard isShowCard={isShowCard} />
    </>
  );
}
