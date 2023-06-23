const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  // Step 1: Sort the array in ascending order
  const sortedArray = input.sort((a, b) => a - b);

  // Step 2: Check if the length of the array is odd or even
  const length = sortedArray.length;
  const isOddLength = length % 2 !== 0;

  // Step 3: Find the median
  if (isOddLength) {
    // For odd length, return the middle element
    return sortedArray[Math.floor(length / 2)];
  } else {
    // For even length, return the average of the two middle elements
    const middleIndex = length / 2;
    return (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
  }
}

console.log(result(input)); // Output: 7
