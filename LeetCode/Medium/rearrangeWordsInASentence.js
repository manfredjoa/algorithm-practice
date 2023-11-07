// Prompt
// Given a sentence text (A sentence is a string of space-separated words) in the following format:

// - First letter is in upper case.
// - Each word in text are separated by a single space.

// Your task is to rearrange the words in text such that all words are rearranged in an increasing order of their lengths.
// If two words have the same length, arrange them in their original order.

// Return the new text following the format shown above.

const arrangeWords = (text) => {
  text = text.split(" ");
  text[0] = text[0].toLowerCase();

  text.sort((a, b) => a.length - b.length);

  text[0] = text[0].split("");
  text[0][0] = text[0][0].toUpperCase();
  text[0] = text[0].join("");

  return text.join(" ");
};
