const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const sMap = new Map();
  const tMap = new Map();

  for (i in s) {
    sMap.set(s[i], (sMap.get(s[i]) ?? 0) + 1);
    tMap.set(t[i], (tMap.get(t[i]) ?? 0) + 1);
  }

  for (const [key] of sMap) {
    if (sMap.get(key) !== tMap.get(key)) return false;
  }

  return true;
};
