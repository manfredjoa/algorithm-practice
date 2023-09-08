// Problem
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
  if (s.at(-2) === "A") {
    if (s.slice(0, 2) === "12") return `00${s.slice(2, -2)}`;
    else return s.slice(0, 8);
  } else {
    if (s.slice(0, 2) === "12") return s.slice(0, 8);
    else return `${parseInt(s.slice(0, 2)) + 12}${s.slice(2, -2)}`;
  }
}
