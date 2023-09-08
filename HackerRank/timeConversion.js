function timeConversion(s) {
  if (s.at(-2) === "A") {
    if (s.slice(0, 2) === "12") return `00${s.slice(2, -2)}`;
    else return s.slice(0, 8);
  } else {
    if (s.slice(0, 2) === "12") return s.slice(0, 8);
    else return `${parseInt(s.slice(0, 2)) + 12}${s.slice(2, -2)}`;
  }
}
