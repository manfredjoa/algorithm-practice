const isIsomorphic = (s, t) => {
  const mapS = new Map();
  const mapT = new Map();

  for (const i in s) {
    if (!mapS.has(s[i]) && !mapT.has(t[i])) {
      mapS.set(s[i], t[i]);
      mapT.set(t[i], s[i]);
    } else if (mapS.get(s[i]) === t[i] && mapT.get(t[i]) === s[i]) continue;
    else return false;
  }

  return true;
};
