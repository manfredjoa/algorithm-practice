// Prompt
// A teacher is writing a test with n true/false questions, with 'T' denoting true and 'F' denoting false.
// He wants to confuse the students by maximizing the number of consecutive questions with the same answer(multiple trues or multiple falses in a row).

// You are given a string answerKey, where answerKey[i] is the original answer to the ith question.
// In addition, you are given an integer k, the maximum number of times you may perform the following operation:

// - Change the answer key for any question to 'T' or 'F' (i.e., set answerKey[i] to 'T' or 'F').

// Return the maximum number of consecutive 'T's or 'F's in the answer key after performing the operation at most k times.

const maxConsecutiveAnswers = (answerKey, k) => {
  let left = 0;
  let t = 0;
  let f = 0;
  let max = 0;

  for (let right = 0; right < answerKey.length; right++) {
    if (answerKey[right] === "T") t++;
    else f++;

    if (t > k && f > k) {
      if (answerKey[left] === "T") t--;
      else f--;

      left++;
    } else max = Math.max(max, t + f);
  }

  return max;
};
