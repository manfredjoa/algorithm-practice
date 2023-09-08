// Problem
// Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyInteger(a) {
  for (let i = 0; i < a.length; i++) {
    let newArray = [...a];
    newArray.splice(i, 1);

    if (!newArray.some((int) => int === a[i])) return a[i];
  }
}
