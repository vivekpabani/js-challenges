####Solution1:

Iterate through the array and keep track of mimimum and maximum value so far.
The largest difference is the difference between maximum and minimum value.
So return the difference of the min and max value.

Time Complexity: O(n) (solves in one pass through the array)

Space Complexity: O(1)

####Solution2:

Sort the array.
The largest difference is the difference between maximum and minimum value.
So return the difference of the min and max value, which are the first and last element of the sorted array.

Time Complexity: O(nlogn) (time to sort the array)

Space Complexity: O(logn)

###Preference
Since solution1 takes O(n) time, and solves in one pass, it is better than the other approach, which takes O(nlogn).
