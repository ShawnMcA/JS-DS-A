const output = document.getElementById('output');

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
const target = 83;

const binarySearch = (arr, target) => {
  const results = 0;

  let low = 0;
  let high = arr.length - 1;

  while(low <= high) {
    const mid = Math.floor((low + high) / 2);

    if(arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return results;
}


output.innerHTML = `Answer: ${binarySearch(primes, target)}`;