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

function sortColors(arr) {
  var zeros = 0, ones = 0, twoes = 0;
  
  for(var i = 0; i <arr.length; i++) {
    if(arr[i] === 0) zeros++;
    if(arr[i] === 1) ones++;
    if(arr[i] === 2) twoes++;
  }
  
  for(var j = 0; j < arr.length; j++) {
    if(zeros) {
      arr[j] = 0;
      zeros--;
    }
    else if(!zeros && ones) {
      arr[j] = 1;
      ones--;
    }
    else if(!zeros && !ones && twoes) {
      arr[j] = 2;
      twoes--;
    }
  }
  return arr;
}
console.log('sortColors: ', sortColors([2,1,0,0,1,2]));
 
//====================================================================================================
/*
Number of Ones
Given a sorted bit array (values of 0, and 1) determine the number of 1’s in the array.

Input: Array of elements with values belong to the set S : { 0, 1 }
Output: Integer
Example
Input: [0, 0, 0, 1, 1, 1]	=>	Output: 3
Input: [0, 0, 0, 0]		=>	Output: 0
Constraints
Time Complexity: O(logN)
Auxiliary Space Complexity: O(1)

A linear search is not acceptable for runtime.
*/

function numOfOnes(arr) {
  //edge cases
  if(arr[arr.length-1] === 0) {
    return 0;
  }
  var start = 0, end = arr.length-1, target =1, mid;
  
  while(start <= end) {
    mid = Math.floor((start + end) /2);
    
    if(arr[mid] === 1 && (arr[mid-1] === 0 || mid === 0)) {
      return arr.length - mid;
    } else if(arr[mid] === 0 && arr[mid+1] === 1) {
      mid = mid+1;
      return arr.length - mid;
    } else if (arr[mid] === 0 && arr[mid+1] === 0) {
      start = mid + 1;
    } else if(arr[mid] === 1 && arr[mid-1] ===1) {
      end = mid - 1;
    }
  }
  
}

console.log('NumberOfOnes : ' + numOfOnes([0,0,0,1,1,1]));


//====================================================================================================
/*
Subarray Sort
Given an unsorted array, find the start and end index of a subarray where sorting this subarray would make the whole input array sorted.

Input: Array of Integers
Output: Two Integer Array
Example
Input: [3, 4, 8, 7, 10, 6, 17]   =>	Output: [2, 5]
Input: [3, 4, 8, 7, 20, 6, 17]	=>	Output: [2, 6]
Constraints
Time Complexity: O(N)
Auxiliary Space Complexity: O(1)

*/

function subarraySort(arr) {
  var start, end, minV, maxV, result = Array(2), len = arr.length;
  //find the start of the subarray
  for(var i = 0; i < len; i++) {
    if(arr[i] > arr[i+1]) {
      start = i;
      break;
    }
  }
  //find the end
  for(i = len; i >= 0; i--) {
    if(arr[i] < arr[i+1]) {
      end = i;
      break;
    }
  }
  //find min
  for(i = start; i <= end; i++) {
    if(minV === undefined || arr[i] < minV) {
      minV = arr[i];
    }
  }
  //find max
  for(i = end; i >= start; i--) {
    if(maxV === undefined || arr[i] > maxV) {
      maxV = arr[i];
    }
  }
  //check for <min and >max
  for(i = 0; i < len; i++) {
    if(arr[i] > minV) {
      result[0] = i;
      break;
    }
  }
  for(i = len; i >= 0; i--) {
    if(arr[i] < maxV) {
      result[1] = i;
      break;
    }
  }
  return result;
}
console.log('subarraySorted : ', subarraySort([3, 4, 8, 7, 20, 6, 17]));
//=======================================================================================================================
/*
Reverse a Singly Linked List
Given a singly linked list, return the linked list in reversed

Input: 	  Linked List
Output:  Linked List
Example
Input: 	{1} -> {2} -> {3} -> {4}
Output:	{4} -> {3} -> {2} -> {1}
Constraints
Time Complexity: O(N)
Auxiliary Space Complexity: O(1)
The linked list has the following properties
head : pointer to the head node
Each node in the linked list has the following properties
next: pointer to the next node in the linked list, the default would be null
value: integer value of the node
Values of the nodes will be integers

*/
function reverseLinkedList(linkedList) {
  var current = linkedList.head, temp;
  var nextNode;
  var temporaryHead = linkedList.head;
  linkedList.head = linkedList.tail;
  linkedList.tail = temporaryHead;
  
  while(current !== null) {

      nextNode = current.next;
    
    if(temp) {
      current.next = temp;
    } else {
      current.next = null;
    }
    
    temp = current;
    current = nextNode;
  }
  return linkedList;
}


//===============================================================================================================================
/*
Integer to Roman
Given an integer from 1 to 3999, return the roman numeral equivalent

Input:     Integer
Output:  String

M = 1000, D = 500, C = 100, L = 50, X = 10, V = 5, I = 1
Example
Input: 9     	=>	Output: ‘IX’
Input: 8     	=>	Output: ‘VIII’
Input: 49     	=>	Output: ‘XLIX’ 		
Constraints
Time Complexity: O(1)
Auxiliary Space Complexity: O(1) 
*/  