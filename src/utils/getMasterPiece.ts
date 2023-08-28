import { StaticImageData } from 'next/image';

import girlWhoReading from '#/images/masterpieces/la_liseuse.jpg';

export default function getMasterPiece(
  artIndex: number,
  masterPieceArr: StaticImageData[],
): StaticImageData {
  const sortedMasterpiece = masterPieceArr.find((el, i) => {
    return i === artIndex;
  });

  return sortedMasterpiece ? sortedMasterpiece : girlWhoReading;
}
