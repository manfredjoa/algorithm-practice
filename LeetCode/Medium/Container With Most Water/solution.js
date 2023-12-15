const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const containerWidth = right - left;
    let containerHeight;
    let area;

    if (height[left] < height[right]) {
      containerHeight = height[left];
      left++;
    } else {
      containerHeight = height[right];
      right--;
    }

    area = containerHeight * containerWidth;
    max = Math.max(max, area);
  }

  return max;
};
