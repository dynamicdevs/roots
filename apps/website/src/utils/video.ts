export const getYouTuBeId = (url: string) => {

  const expression = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;

  const match = url.match(expression);

  return match && match[2].length === 11 ? match[2] : undefined;
}
