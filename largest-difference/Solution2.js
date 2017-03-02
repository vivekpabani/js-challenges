
/*
  Logic:
  Sort the array.
  The largest difference is the difference between maximum and minimum value.
  So return the difference of the min and max value,
  which are the first and last element of the sorted array.

  Since this algorithm takes O(nlogn) because of sorting, the other approach is better than this
  which takes O(n) time and one pass through the array.
*/

function findLargestDiff(arr){

    if (arr.length < 2) {

        return -1;
    }

    // sort the array with quickSort.
    // can also use Array sort() method.

    quickSort(arr, 0, arr.length-1);

    difference = arr[arr.length-1] - arr[0];

    return difference;
}

function quickSort(arr, start, end){

   var len = arr.length,
       partIndex;

   if(start < end){
       partIndex = partition(arr, start, end);

       //sort both halves
       quickSort(arr, start, partIndex-1);
       quickSort(arr, partIndex+1, end);
   }

   return arr;
}

function partition(arr, start, end){

   var pivot = arr[end],
       i;

   for(i = start; i < end; ++i){

    if(arr[i] < pivot) {

      swap(arr, i, start);
      start = start + 1;

    }
  }

  swap(arr, end, start);
  return start;
}

function swap(arr, i, j){

   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}
