//First Function that takes in two arrays as a parameter
function merge(array1, array2) {
  //Make an empty array to store the lowest number within
  let results = [];
  let i = 0;
  let j = 0;
  // A while function that while true, iterates through each index of both arrays
  while (i < array1.length && j < array2.length) {
    // if the number within the first index of the first array is lesser than the number within the
    //second array then store the first index within the first array into the array called results
    if (array1[i] < array2[j]) {
      results.push(array1[i]);
      //Now interate to the next index within the first array and compare that new index with the old one in the
      //second array
      i++;
    } else {
      //if the second index's number is lesser than the firsts number index than store the second indexes
      //number instead and iterate to the next index to compare.
      results.push(array2[j]);
      j++;
    }
  }
  // If theres no more indexes to compare the first arrays with the second array then push all remaining indexes
  // into results array
  while (i < array1.length) {
    results.push(array1[i]);
    i++;
  }
  // If theres no more indexes to compare the second arrays with the first array then push all remaining indexes
  // into results array
  while (j < array2.length) {
    results.push(array2[j]);
    j++;
  }
  //return the array in results all sorted
  return results;
}
merge([1, 10, 50], [2, 14, 99, 100]);

//function that splits an array into two, prepping it for merge function
function mergeSort(arr) {
  // if the length of the array is less then 1 or equal to one
  //then don't do anything, just return the array as it is , this is our base case
  if (arr.length <= 1) return arr;
  // we divide the length of the array by two and then round it so we can split the array right in the middle
  let mid = Math.floor(arr.length / 2);
  // we  slice one array to the variable that we got from top and have that as our first array
  let left = mergeSort(arr.slice(0, mid));
  // we slice the other half of the array to the variable that we got from top and have that as our second array
  let right = mergeSort(arr.slice(mid));
  console.log(merge(left, right));
  //we now have our one array, that got splitted into two and insert both of those
  //into to our merge function on line 1 in order to get our new Merge Sorted list
  return merge(left, right);
}

mergeSort([10, 25, 76, 73, 73, 1, 9]);
