import { ChapterInfo } from "@/types/common";
import CustomLink from "../_common/CustomLink";
import styles from "./ActNavigator.module.scss";

export default function ActNavigator({
  curriculum,
  highlightActNum,
  chapterInfo,
}: {
  curriculum: string;
  highlightActNum: number;
  chapterInfo: ChapterInfo;
}) {
  return (
    <section className={styles.act_navigator_session}>
      {chapterInfo.actInfo.map((act) => (
        <CustomLink
          key={act.name}
          href={{
            pathname: `/curriculum/${curriculum}/${chapterInfo.chapterName}/${act.name}`,
          }}
        >
          <button
            className={`${styles.link_color} ${
              highlightActNum === act.act ? styles.link_hightlight : ""
            }`}
          >
            {act.banner}
          </button>
        </CustomLink>
      ))}
    </section>
  );
}
