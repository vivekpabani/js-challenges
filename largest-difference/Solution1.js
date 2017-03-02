
/*
  Logic:
  Iterate through the array and keep track of mimimum and maximum value so far.
  The largest difference is the difference between maximum and minimum value.
  So return the difference of the min and max value.
*/

function findLargestDiff(arr){

    // at least two elements are required.
    if (arr.length < 2) {

        return -1;
    }

    var i = 0,
        minVal = arr[0],
        maxVal = arr[0];

    for(i = 0; i < arr.length; ++i) {

        // swap min with curr value if curr value is lower than min.
        if (arr[i] < minVal) {
            minVal = arr[i];
        }

        // swap max with curr value if curr value is higher than max.
        else if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }

    difference = maxVal - minVal;

    return difference;
}

function testFindLargestDiff(arr, expected, testName) {

    var actual;

    actual = findLargestDiff(arr);

    console.log("\n" + testName + "\n");
    console.log("Array: " + arr);
    console.log("Expected: " + expected);
    console.log("Actual: " + actual);
    console.log(expected==actual?"Passed":"Failed");

}

function test() {

    testFindLargestDiff([3, 6, 4, 10, 9, 5], 7, "Random Array"); // 10 - 3
    testFindLargestDiff([3, 5, 7, 11, 15, 17], 14, "Sorted Increasing Array"); // 17 - 3
    testFindLargestDiff([17, 15, 11, 7, 5, 3], 14, "Sorted Decreasing Array"); // 17 - 3
    testFindLargestDiff([3, -6, 4, 10, 9, -5], 16, "Random Array With Negative Values"); // 10 - (-6)
    testFindLargestDiff([], -1, "Empty Array");
    testFindLargestDiff([5], -1, "Single Item Array");
}

test();
