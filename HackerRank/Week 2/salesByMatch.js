// Problem

function sockMerchant(n, ar) {
  let pairs = 0;

  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[i] === ar[j]) {
        ar.splice(j, 1);
        ar.splice(i, 1);
        pairs++;
        i--;
        break;
      }
    }
  }
  return pairs;
}
