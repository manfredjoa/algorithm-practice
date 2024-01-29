const flipAndInvertImage = (image) => {
  for (let row of image) {
    row = row.reverse();

    for (i in row) {
      if (row[i] === 1) row[i]--;
      else row[i]++;
    }
  }

  return image;
};
