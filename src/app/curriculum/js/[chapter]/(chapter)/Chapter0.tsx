"use client";

import styles from "./ChapterJS.module.scss";
import Chap0Act1 from "./(act)/Chap0Act1";
import Chap0Act2 from "./(act)/Chap0Act2";
import { useState } from "react";
import CustomButton from "@/app/_component/_common/CustomButton";

const code = `console.log("안녕")
a = b`;

export default function JSChapter0() {
  const [activeAct, setActiveAct] = useState("act1");
  let ActiveAct = Chap0Act1;

  switch (activeAct) {
    case "act1":
      ActiveAct = Chap0Act1;
      break;
    case "act2":
      ActiveAct = Chap0Act2;
      break;
    default:
      ActiveAct = Chap0Act1;
  }

  const changeAct1 = () => {
    setActiveAct("act1");
  };
  const changeAct2 = () => {
    setActiveAct("act2");
  };

  return (
    <section className={styles.chapter_section_container}>
      <CustomButton
        propStyle={styles.custom_act_change_button}
        onClickHandler={changeAct1}
      >
        <p>Act1 : 놀아보기!</p>
      </CustomButton>
      <CustomButton
        propStyle={styles.custom_act_change_button}
        onClickHandler={changeAct2}
      >
        <p>Act2 : 필수적인 연산자(Operator)</p>
      </CustomButton>
      <ActiveAct />
    </section>
  );
}
