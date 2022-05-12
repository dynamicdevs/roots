export const lineBreaks = (text: string) => {
  if (text.includes('\n')) {
    const values = text
      .split('\n')
      .flatMap((innerText, index, array) => [
        innerText,
        index < array.length - 1 && <br key={index} />,
      ]);

    return values;
  }

  return text;
};
