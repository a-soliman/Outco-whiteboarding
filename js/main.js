/*
Plus One
Given a positive integer represented by an array of digits, add one that number.

Input: Array of integers
Output: Array of integers
Example
Input: [1,2,3]      	=>	Output: [1,2,4]
Input: [1, 9]		=>	Output: [2,0]
*/

function addOne(arr) {
  var i = arr.length-1;
  
  var helper = function(arr, i) {
    if(arr[i] < 9) {
      arr[i] = arr[i]+1;
      return arr;
    }
    else if(arr[i] === 9 && arr[i-1] < 9) {
      arr[i] = 0;
      arr[i-1] = arr[i-1] +1;
    }
    else {
      arr[i] = 0;
      if(i === 0 ) {
        arr.unshift(1);
        return arr;
      }
      helper(arr, i-1);
    }
  };
  helper(arr, i);
  return arr;
}

console.log('PlusOne : ', addOne([9,9,9]))


//=====================================================================================================
/*
Sort Colors
Given an array of integers values of 0, 1, and 2 (representing Red, White, and Blue), sort them in linear time. 

Input: Array of Integers where elements values belong to the set S : { 0, 1, 2 }
Output: Sorted Array
Example
Input: [2, 0, 1, 2, 1, 0]	=>	Output: [0, 0, 1, 1, 2, 2]
Input: [1, 2, 2, 0]		=>	Output: [0, 1, 2, 2]
Constraints
Time Complexity: O(N)
Auxiliary Space Complexity: O(1)

Using a native sorting method is not allowed.
*/