export const AppPath = {
  home: () => '/',
  curriculum: () => '/curriculum',
  curriculumTo: (firstSegment: string, secondSegment?: string) => {
    if (!secondSegment) return `/curriculum/${firstSegment}`;
    return `/curriculum/${firstSegment}/${secondSegment}`;
  },

  post: () => '/post',
  knos: () => '/knos',
  knosNoteTo: (subject: string, lecture: string) =>
    `/knos/${subject}/${lecture}`,

  postTo: (id: string) => `/post/${id}`,
  myRepo: () => 'https://github.com/2duckchun',
  aboutMe: () => 'aboutme',
};
