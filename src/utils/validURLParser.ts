export default function validURLParser(
  pathArray: string[],
  jsCurriculumRegex: RegExp,
  dsCurriculumRegex: RegExp,
) {
  let isValidURL = true;

  if (pathArray.length >= 2) {
    const curriculumName = pathArray[0];
    const curriculumPath = pathArray[1];

    if (curriculumName === 'js') {
      isValidURL = jsCurriculumRegex.test(curriculumPath);
    } else if (curriculumName === 'data-structure') {
      isValidURL = dsCurriculumRegex.test(curriculumPath);
    }
  }

  return isValidURL;
}
