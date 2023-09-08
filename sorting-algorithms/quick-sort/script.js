function pivot(arr, start, end) {
  const pivot = arr[start]; // 4
  let swapIndex = start; // 0

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
    }
  }
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // Left
    quickSort(arr, left, pivotIndex - 1);
    // Right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([10, 20, 5, 2, 15, 33, 7]));
