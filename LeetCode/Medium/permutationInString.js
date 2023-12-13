// Prompt
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

const checkInclusion = (s1, s2) => {
  if (s1.length > s2.length) return false;

  const map1 = new Map();
  let map2 = new Map();
  let requiredLength = s1.length;
  let left = 0;
  let right = 0;

  for (i in s1) map1.set(s1[i], (map1.get(s1[i]) ?? 0) + 1);

  map2 = new Map(map1);

  while (right < s2.length) {
    if (map2.has(s2[right])) {
      if (map2.get(s2[right]) > 0) {
        map2.set(s2[right], map2.get(s2[right]) - 1);
        requiredLength--;
      } else if (map2.get(s2[right]) === 0) {
        while (s2[left] !== s2[right]) {
          map2.set(s2[left], map2.get(s2[left]) + 1);
          left++;
          requiredLength++;
        }

        left++;
      }
    } else {
      map2 = new Map(map1);
      requiredLength = s1.length;
      left = right + 1;
    }

    if (requiredLength === 0) return true;

    right++;
  }

  return false;
};
