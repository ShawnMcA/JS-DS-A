const output = document.getElementById('output');
let results = [];
let testArr = [];

const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const quicksort = (array, left, right) => {
  left = left || 0;
  right = right || array.length - 1;

  let pivot = partition(array, left, right);

  if(left < pivot - 1) {
    quicksort(array, left, pivot - 1);
  }

  if(right > pivot) {
    quicksort(array, pivot, right);
  }

  return array;
}

const partition = (array, left, right) => {
  let pivot = Math.floor((left + right) / 2);

  while(left < right) { 
    while(array[left] < array[pivot]) {
      left++;
    }

    while(array[right] > array[pivot]) {
      right--;
    }

    if(left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }

  return left;
}


let getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(let i = 0; i < 10; i++) {
  testArr.push(getRandomNum(1, 100));
}

output.innerHTML = `Unsorted: ${testArr} <br> Sorted: ${quicksort(testArr)}`;