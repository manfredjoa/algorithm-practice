// Prompt
// Given an array arr of 4 digits, find the latest 24-hour time that can be made using each digit exactly once.

// 24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59.
// The earliest 24 - hour time is 00:00, and the latest is 23: 59.

// Return the latest 24-hour time in "HH:MM" format.
// If no valid time can be made, return an empty string.

const largestTimeFromDigits = (arr) => {
  let hours = [];
  let combinations = [];
  let num = "";

  arr.sort();

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i === j) continue;

      num += arr[i];
      num += arr[j];

      if (parseInt(num) < 24 && !hours.includes(num)) hours.push(num);

      num = "";
    }
  }

  for (let i = 0; i < hours.length; i++) {
    let arrCopy = [...arr];

    for (let j = 0; j < 2; j++) {
      let index = arrCopy.indexOf(parseInt(hours[i][j]));
      arrCopy.splice(index, 1);
    }

    let min = arrCopy.join("");
    let reversedMin = arrCopy.reverse().join("");

    if (parseInt(min) < 60) combinations.push(`${hours[i]}:${min}`);
    if (parseInt(reversedMin) < 60)
      combinations.push(`${hours[i]}:${reversedMin}`);
  }

  return combinations.length > 0 ? combinations[combinations.length - 1] : "";
};
