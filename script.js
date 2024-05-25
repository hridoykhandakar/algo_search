const linearSearchBtn = document.getElementById("linear-search-btn");
const binarySearchBtn = document.getElementById("binary-search-btn");
const linearSearchForm = document.getElementById("linear-search-form");
const binarySearchForm = document.getElementById("binary-search-form");
const resultDiv = document.getElementById("result");

linearSearchBtn.addEventListener("click", () => {
  linearSearchForm.style.display = "block";
  binarySearchForm.style.display = "none";
  resultDiv.textContent = "";
});

binarySearchBtn.addEventListener("click", () => {
  linearSearchForm.style.display = "none";
  binarySearchForm.style.display = "block";
  resultDiv.textContent = "";
});

document
  .getElementById("linear-search-submit")
  .addEventListener("click", () => {
    const a = document
      .getElementById("linear-input-array").value;
    const array = a.split(",");
    const value = document.getElementById("linear-input-value").value;
    console.log("array is: "+ array)
    console.log("value is: "+ value)
    const index = linearSearch(array, value);
    resultDiv.textContent = `Value found at index ${index}`;
  });

document
  .getElementById("binary-search-submit")
  .addEventListener("click", () => {
    const a = document.getElementById("binary-input-array").value;
    const array = a.split(",")
    const value = document.getElementById("binary-input-value").value;
    const sortOrder = document.getElementById("sort-order").value;
    console.log("array is: "+ array)
    console.log("value is: "+ value)
    console.log("short is: "+ sortOrder)
    const index = binarySearch(array, value, sortOrder);
    resultDiv.textContent = `Value found at index ${index}`;
  });

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

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



