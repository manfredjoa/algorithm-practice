// Prompt
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself.

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
