const isSubsequence = (s, t) => {
  const next = Array(t.length + 1).fill({});
  let nextIndex = 0;

  for (let i = next.length - 2; i >= 0; i--) {
    next[i] = { ...next[i + 1] };
    next[i][t[i]] = i + 1;
  }

  for (const char of s) {
    if (next[nextIndex].hasOwnProperty(char)) nextIndex = next[nextIndex][char];
    else return false;
  }

  return true;
};
