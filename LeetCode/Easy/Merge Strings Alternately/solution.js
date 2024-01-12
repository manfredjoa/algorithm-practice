const mergeAlternately = (word1, word2) => {
  const minLength = Math.min(word1.length, word2.length);
  let mergedStr = "";
  let i = 0;

  while (i < minLength) {
    mergedStr += word1[i] + word2[i];
    i++;
  }

  if (word1.length > minLength) mergedStr += word1.slice(minLength);
  else if (word2.length > minLength) mergedStr += word2.slice(minLength);

  return mergedStr;
};
