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

function intToRoman(num) {
  // edge cases
  if(num < 1 || num > 3999) {
    return "";
  }
  var roman = ["M","CM", "D", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var values = [1000, 900, 500, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var i = 0;
  var result = "";
  
  while(num > 0) {
    while(num >= values[i]) {
      num = num - values[i];
      result += roman[i];
    }
    i++;
  }
  return result;
}
  
console.log('Int To Roman : ' + intToRoman(49));

//===============================================================================================================================

/*
Toeplitz Matrix
Given a square matrix, find if it is a Toeplitz matrix or not.
A Toeplitz (or diagonal-constant) matrix is a matrix where each descending diagonal from left to right is constant (i.e., all elements in a diagonal are same).

Input: An N x N matrix
Output: Boolean
Example
Input:    [[3, 4, 5, 6],
		[2, 3, 4, 5],
		[1, 2, 3, 4],
		[0, 1, 2, 3]]
=>	Output: True
Constraints
Time Complexity: O(N^2)
Auxiliary Space Complexity: O(1)

Remember, for a matrix to be considered a toeplitz, the elements in each descending diagonal must be the same.
*/

var matrix = [[3, 4, 5, 6],
        		  [2, 3, 4, 5],
        		  [1, 2, 3, 4],
        		  [0, 1, 2, 3]
        		];
        		
function isToeplitz(arr) {
  if(arr.length <= 1) { return null; }
  var i = 0, j = 0;
  
  while( i <= arr.length-2) {
    if(arr[i][j] !== arr[i+1][j+1]) { return false; }
    if(j === arr.length -2) {
      i++;
      j = 0;
    } else {
      j++;
    }
  }
  return true;
}

console.log('isToeplitz: ' + isToeplitz(matrix))

//===============================================================================================================================
/*
Longest Path of a Binary Tree
Given a binary tree root node, return the number of nodes in the longest path between the root and a leaf node

Input: 	  Node in a Binary Tree
Output:  Integer
Example
Input: 	     Output:	 3 (from path 1 -> 3 -> 4)

Constraints
Time Complexity: O(N)
Auxiliary Space Complexity: O(N)
The binary tree node has the following properties:
value : an integer
leftChild : default null
rightChild : default null
*/

/*


-------------------------------------------------------------------------------
---- Building BST ----
-------------------------------------------------------------------------------
*/

function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
BST.prototype.insert = function(value) {
  var newNode = new BST(value);
  
  if(value <= this.value) {
    if(!this.left) {
      this.left = newNode;
    }else {
      this.left.insert(value);
    }
  } else if(value > this.value) {
    if(!this.right) {
      this.right = newNode;
    } else {
      this.right.insert(value);
    }
  }
};
var bst = new BST(4);
bst.insert(3);
bst.insert(5)
bst.insert(6)

//console.log(bst)

/*
-------------------------------------------------------------------------------
---- End BST ----
-------------------------------------------------------------------------------
*/


function longestPath(root) {
  var max = 0;
  function search(node, length) {
    if(!node) {  return;}
    max = Math.max(max, length);
    
    search(node.left, length+1);
    search(node.right, length+1);
  }
  search(root, 1);
  return max;
}

console.log('longestPath : ' + longestPath(bst));
//===============================================================================================================================
/*
Invert a Binary Tree
Given a binary tree root node, invert the binary tree (mirror) and return back the root node.

Input: 	  Node in a Binary Tree
Output:  Node in a Binary Tree
Example
Input: 	     Output:	 

Constraints
Time Complexity: O(N)
Auxiliary Space Complexity: O(N)
The binary tree node has the following properties:
value : an integer
leftChild : default null
rightChild : default null
Must swap the entire node instances, not just the value
*/

function invertTree(root) {
  
  function invert(node) {
    if(!node) { return; }
    
    if(node.left && !node.right) {
      node.right = node.left;
      node.left = null;
      invert(node.left);
    }
    if(node.right && !node.left) {
      node.left = node.right;
      node.right = null;
      invert(node.right);
    }
    if(node.left && node.right) {
      var temp = node.left;
      node.left = node.right;
      node.right = temp;
      invert(node.left);
      invert(node.right);
    }
  }
  invert(root)
  return root;
}
console.log(bst)
//invertTree(bst)
//===============================================================================================================================


//Is Valid Tree


function isValidTree(root) {
  var values = [];
  function traverse(node) {
    if(node.left) {
      traverse(node.left);
    }
    values.push(node.value);
    if(node.right) {
      traverse(node.right);
    }
  }
  traverse(root);
  
  for(var i = 0; i < values.length; i++) {
    if(values[i] > values[i+1]) {
      return false;
    }
  }
  return true;
}

console.log('isValidTree : ' + isValidTree(bst))
//===============================================================================================================================


/*
Lowest Common Ancestor
Given the root node of a binary tree and two distinct values, find the lowest common ancestor.

Input:     Root Node, Two Integer Values 
Output:  Integer Value of Lowest Common Ancestor
Example
Input: root, 4, 9      	=>	Output: 7
	
Constraints
Time Complexity: O(N)
Auxiliary Space Complexity: O(N)

Integer values of nodes are all distinct.
*/

var bst2 = new BST(5);
bst2.left = new BST(2);
bst2.right = new BST(7);
bst2.right.left = new BST(4);
bst2.right.right = new BST(8);
bst2.right.right.right = new BST(9);


function lowestCommonAncestor(root, node1, node2) {
  var LCA, i = 0, path1 = [], path2 = [];
  
  function traverse(n1, n2, path) {
    if(!n1) { return false; }
    path.push(n1.value);
    if(n1.value === n2) { return true; }
    if(n1.left && traverse(n1.left, n2, path) || n1.right && traverse(n1.right, n2, path)) {
      return true;
    }
    path.pop();
    return false;
  }
  traverse(root, node1, path1);
  traverse(root, node2, path2);
  
  //compare
  while( i < Math.min(path1.length, path2.length)) {
    if(path1[i] === path2[i]) {
      LCA = path1[i];
    }
    i++;
  }
  return LCA;
}
console.log('lowestCommonAncestor : ' + lowestCommonAncestor(bst2, 4,9));

//===============================================================================================================================

/*
Kth Largest in a BST
Given a binary search tree root node and an integer K, return the Kth largest value

Input: 	  Node in a Binary Search Tree, Positive integer K
Output:  Integer
Example
Input: root node, 3	  => 	Output:	6
Input: root node, 5	  => 	Output:	4
Constraints
Time Complexity: O(N)
Auxiliary Space Complexity: O(N)
The binary tree node has the following properties:
value : an integer
leftChild : default null
rightChild : default null
Not allowed to modify the binary search tree
*/


var bst3 = new BST(5)
bst3.insert(4)
bst3.insert(2)
bst3.insert(7)
bst3.insert(6)
bst3.insert(9)