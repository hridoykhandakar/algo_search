function binarySearch(arr, val, short) {

  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      return mid;
    }
    if (short === "ascending") {
      if (arr[mid] < val) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    if (short === "descending") {
      if (arr[mid] > val) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
const a = [1, 2, 3, 4, 5];
const b = [5, 4, 3, 2, 1];
const c = 4;


console.log(binarySearch(a,3,"ascending"));
console.log(binarySearch(b,1,"descending"));
console.log(linearSearch(a,1));
console.log(linearSearch(b,1));
