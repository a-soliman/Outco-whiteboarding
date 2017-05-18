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


function kthLargestInBST(root, k) {
  var values = [];
  var pointer = 0;
  //traverse depth in order;
  function traverse(node, arr) {
    if(node.left) {
      traverse(node.left, arr);
    }
    arr.push(node.value)
    if(node.right) {
      traverse(node.right, arr);
    }
  }
  traverse(root, values);
  
  for(var i = values.length-1; i >=0; i--) {
    pointer++;
    if(pointer === k) {
      return values[i];
    }
  }
}

console.log('kthLargestInBST : ' + kthLargestInBST(bst3, 3));
//===============================================================================================================================

function kthLargestInBST2(root, k) {
  var pointer = 0;
  var value;
  
  //traverse depth in order;
  function traverse(node) {
    if(!node) {return false}
    if(node.right) {
      traverse(node.right);
    }
    pointer++;
    if(pointer === k) {
      value = node.value;
      return;
    }
    if(node.left) {
      traverse(node.left);
    }
  }
  traverse(root);
  return value
}

console.log('kthLargestInBSTWo : ' + kthLargestInBST2(bst3, 3));
//===============================================================================================================================

//===============================================================================================================================
/*
Sorted & Rotated Array Search
Given a rotated, sorted array and a target value, return the index of the target value. If the target value does not exist inside of the collection, return -1. 
A rotated, sorted array means that some number of elements have been taken from one end of the array and moved to the other end while maintaining the sorted status of the moved elements. 
[1,2,3,4,5,6,7] → [3,4,5,6,7,1,2]

Input: Array of integers, target value
Output: Integer index of target value (-1 if not found)
Example
Input: [6,8,11,15,17,3,5], 3      	=>	Output: 5
Input: [6,8,11,15,17,3,5], 10		=>	Output: -1
Constraints
Time Complexity: O(log(N))
Auxiliary Space Complexity: O(log(N))

All elements of the array are unique
*/

function sortedRotatedArraySearch(arr, target) {
  var start = 0, end = arr.length-1;
  var pivot, mid;
  
  //find a pivot
  while(start < end) {
    mid = Math.floor((start + end) /2);
    
    if(arr[mid] > arr[mid+1]) {
      pivot = mid;
      break;
    }
    else if(arr[mid] < arr[mid-1]) {
      pivot = mid-1;
      break;
    }
    else if(arr[start] < arr[mid]) {
      start = mid+1;
    }
    else if(arr[start] > arr[mid]) {
      end = mid-1
    }
  }
  //serach arr 1
  start = 0, end = pivot+1;
  
  while(start < end) {
    mid = Math.floor((start + end) /2);
    
    if(target === arr[mid]) {
      return mid;
    }
    else if(arr[mid] < target){
      start = mid+1;
    }
    else if(arr[mid] > target) {
      end = mid;
    }
  }
  
  //search arr2
  start = pivot+1, end = arr.length;
  
  while(start < end) {
    mid = Math.floor((start + end) /2);
    
    if(target === arr[mid]) {
      return mid;
    }
    else if(arr[mid] < target) {
      start = mid+1;
    }
    else if(arr[mid] > target) {
      end = mid;
    }
  }
  return -1;

}

console.log('sortedRotatedArraySearch : ' + sortedRotatedArraySearch([6,8,11,15,17,3,4,5],3))
//===============================================================================================================================

/*
Subarray Sum
Given an array of positive integers and a target value, return true if there is a subarray of consecutive elements that sum up to this target value. 

Input: Array of integers, target value
Output: Boolean
Example
Input: [6,12,1,7,5,2,3], 14      	=>	Output: true (7+5+2)
Input: [8,3,7,9,10,1,13], 50		=>	Output: false
Constraints
Time Complexity: O(N)
Auxiliary Space Complexity: O(1)
All elements are positive
*/
function subarraySum (arr, value) {
  var currentSum = arr[0];
  var i = 1;
  while(i < arr.length) {
    if(currentSum < value) {
      currentSum += arr[i];
    }
    if(currentSum > value) {
      currentSum = arr[i];
    }
    if(currentSum === value) {return true;}
    i++;
  }
  return false;
}
console.log('SubArraySum : ' + subarraySum([6,12,1,7,5,2,3], 13));

//===============================================================================================================================

/*
Remove Duplicates from Sorted Array
Given a sorted array, remove the duplicates such that each element appears only once. This function should modify the existing array and return the number of the unique elements.

Input: Array of sorted integers
Output: Integer (length of unique subarray)
Example
Input: [1,2,2,2,3,9,9]      	=>	Output: 4 → [1,2,3,9,...]
Input: [1,1,1,9,9]	           =>	Output: 2 → [1,9,...]
Constraints
Time Complexity: O(N)
Auxiliary Space Complexity: O(1)

What exists beyond the unique elements is unimportant. 
*/

function removeDublicates(arr) {
  var unique = 1;
  for(var i = 1; i < arr.length; i++) {
    if(arr[i] !== arr[i-1]) {
      unique++;
    }
  }
  return unique;
}
console.log('removeDublicates : ' + removeDublicates([1,2,2,2,3,9,9]))
//===============================================================================================================================


/*
Matrix Spiral
Given an (MxN) matrix of integers, return an array in spiral order.

Input: Array of integers
Output: Array of integers
Example
Input: [[1,2,3],		=>	Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
        [4,5,6],
        [7,8,9]]      	
Input: [[]]		=>	Output: []
Constraints
Time Complexity: O(MN)
Auxiliary Space Complexity: O(MN)


Values of the array will be digits 0-9.
*/

function matrixSpiral(matrix){
  if(!matrix.length) { return []; }
  
  var yMin = 0, xMin = 0;
  var yMax = matrix.length-1, xMax = matrix[0].length-1;
  var results = [];
  
  while(xMin <= xMax && yMin <= yMax) {
    for(var i = xMin; i <= xMax; i++) {
      results.push(matrix[yMin][i]);
    }
    yMin++;
    for(i = yMin; i <= yMax; i++) {
      results.push(matrix[i][xMax]);
    }
    xMax--;
    if(yMin <= yMax) {
      for(i = xMax; i >= xMin; i--) {
        results.push(matrix[yMax][i]);
      }
      yMax--;
    }
    if(xMin <= xMax) {
      for(i = yMax; i >= yMin; i--) {
        results.push(matrix[i][xMin]);
      }
      xMin++;
    }
  }
  return results;
}

console.log('matrixSpiral : ' + matrixSpiral([[1,2,3],[4,5,6],[7,8,9]]));

//===============================================================================================================================
/*
Rat Path
Given a matrix of bits (values 0 and 1), a rat must find a path from index [0][0] to [n-1][n-1]. The rat can only travel to the right or down, and can only travel on 0 values.

Input: 	Matrix of elements with values either 0 or 1
Output: Array of two-item arrays indicating the path.
Example
Input:     [[0, 0, 0, 1],
        		[0, 1, 0, 1],
        		[0, 1, 0, 0],
        		[0, 0, 1, 0]]
=> 		[[0, 0], [0, 1], [0, 2], [1, 2], [2, 2], [2, 3], [3, 3]]
Constraints
Time Complexity: O()
Auxiliary Space Complexity: O()
If not path found, return the following path: [[-1,-1]]
*/


function ratPath(matrix) {
  var results = [-1,-1];
  
  function findPath(i,j, path) {
    //base cases
    if(i >= matrix.length || j >= matrix[0].length || matrix[i][j] === 1) {
      return false;
    }
    if(i === matrix.length-1 && j === matrix[0].length-1) {
      results = path;
    }
    return findPath(i+1, j, path.concat([[i+1, j]])) || findPath(i, j+1, path.concat([[i, j+1]]))
  }
  findPath(0,0,[[0,0]]);
  return results;
}

console.log('ratPath : ' + ratPath([[0, 0, 0, 1],[0, 1, 0, 1],[0, 1, 0, 0],[0, 0, 1, 0]]));

//===============================================================================================================================


/*
Graph is a Tree
Given an undirected graph, determine whether or not said graph is a tree.

Input: Undirected Graph
Output: Boolean
Example
Input:

=>	Output: True
Input:
		
=>	Output: False
Constraints
Time Complexity: O(N)
Auxiliary Space Complexity: O(N)

The graph Vertex has the following properties:
value : an integer
	edges : a list which contains references to other vertices in the Graph

You may assume the values of the vertices will all be unique.
*/

/*
  === Crating a Graph  ===
*/
function Vertex(id) {
  this.id = {value: id, edges: {}}
  
  return this.id;
}

function Graph() {
  this.vertices = {};
  this.totalVertices = 0;
  this.totalEdges = 0;
}

Graph.prototype.addVertex = function(id) {
  if(!this.vertices[id]) {
    this.vertices[id] = new Vertex(id);
    this.totalVertices++;
  } else {
    return;
  }
}

Graph.prototype.addEdge = function(id1, id2) {
  if(!this.vertices[id1] || !this.vertices[id2]) {
    return null;
  } else {
    this.vertices[id1].edges[id2] = this.vertices[id2];
    this.vertices[id2].edges[id1] = this.vertices[id1];
    this.totalEdges++;
  }
}
Graph.prototype.getVertax = function (id){
  if(this.vertices[id]) {
    return this.vertices[id];
  } else {
    return null;
  }
};

var graph1 = new Graph();
graph1.addVertex(3);
graph1.addVertex(4);
graph1.addVertex(0);
graph1.addVertex(1);
graph1.addVertex(2);

graph1.addEdge(3,4);
graph1.addEdge(3,0);
graph1.addEdge(0,2);
graph1.addEdge(0,1);

// === ===
var graph2 = new Graph();
graph2.addVertex(4)
graph2.addVertex(3)
graph2.addVertex(0)
graph2.addVertex(2)
graph2.addVertex(1)

graph2.addEdge(4,3)
graph2.addEdge(3,0)
graph2.addEdge(0,2)
graph2.addEdge(0,1)
graph2.addEdge(1,2)


/*
  === End the graph ===
*/

function isNotCyrcle(graph) {
  var queue = [graph.vertices[4]];
  var currentArr = [];
  var parentArr = [null];
  var visited = {};
  var current, currentValue, parent;
  
  while(queue.length) {
    current = queue.shift();
    currentValue = current.value;
    currentArr.push(currentValue);
    visited[currentValue] = true;
    parent = parentArr[currentArr.length-1];
    
    for(var i in current.edges) {
      if(!visited[current.edges[i].value]) {
        queue.push(current.edges[i]);
        parentArr.push(currentValue)
      }
      if(visited[current.edges[i].value] && current.edges[i].value !== parent) {
        return false;
      }
    }
  }
  return true;
}
console.log(isNotCyrcle(graph1))
//===============================================================================================================================

/*
Find 0’s in Boolean Matrix
Given a matrix with N rows and N columns where elements in the matrix can be either 1 or 0 and each row and column are sorted in ascending order, find the number of 0’s.

Input: Matrix of elements with values either 0 or 1
Output: An integer which is the count of all 0’s in the matrix
Example
Input:    [[0, 0, 0, 1],
		[0, 0, 1, 1],
		[0, 1, 1, 1],
		[0, 1, 1, 1]]
=>	Output: 7
Constraints
Time Complexity: O(N)
Auxiliary Space Complexity: O(1)

Each row and column of the matrix is sorted in ascending order.

Values of the matrix will be either 0 or 1.
*/


var BooleanMatrix = [ [0, 0, 0, 1],
                  		[0, 0, 1, 1],
                  		[0, 1, 1, 1],
                  		[0, 1, 1, 1]
                  	]

function boolMat(matrix) {
  let count = 0, row = 0, col = matrix.length-1;
  
  while(row < matrix.length && col >= 0) {
    if(matrix[row][col] === 1) {
      col -= 1;
    }
    else {
      row += 1;
      count += (1 + col);
    }
  }
  
  return count;
}

console.log('BooleanMatrix : ' + boolMat(BooleanMatrix))

//===============================================================================================================================
/*
Shortest Route
Given an unweighted, undirected graph which represents a metro map as follows 
vertices are stations
edges are the path between two stations


Given a start station and ending station, determine the minimum number of stops that must be made to get to the destination.

Input: A Graph (unweighted/undirected), a starting Vertex, and an ending Vertex
Output: Integer
Example
Input: The graph represented below, Vertex A, Vertex F






Output: 2 Stops (From A stop at C, and then stop at F)
Constraints
Time Complexity: O(V + E) where V is the number of Vertices and E is the number of Edges
Auxiliary Space Complexity: O(V)

A graph Vertex instance has the following properties:
value : a string
	edges : a list which contains references to other vertices in the Graph
The graph has a list of all the vertices: Graph.vertices
The Vertex values are all unique
*/


// === Creating the graph ===
var metro = new Graph();
metro.addVertex('A');
metro.addVertex('B');
metro.addVertex('C');
metro.addVertex('D');
metro.addVertex('E');
metro.addVertex('F');
metro.addVertex('G');

metro.addEdge('A', 'B');
metro.addEdge('A', 'C');
metro.addEdge('A', 'D');
metro.addEdge('B', 'E');
metro.addEdge('C', 'F');
metro.addEdge('D', 'G');
metro.addEdge('E', 'G');
metro.addEdge('F', 'G');
 
//console.log(metro)
// === graph ended ===

function shortestPath(graph, start, end) {
  var distance = {};
  var visited = {};
  var queue = [graph.vertices[start]];
  var current;
  var currentValue;
  
  for(var i in graph.vertices) {
    if(graph.vertices[i].value === start) {
      distance[graph.vertices[i].value] = 0;    
    }
    else {
      distance[graph.vertices[i].value] = Number.POSITIVE_INFINITY;
    }
    visited[graph.vertices[i].value] = false;
  }
   
  while(queue.length) {
    current = queue.shift();
    currentValue = current.value;
    visited[current.value] = true;
    
    for(var j in current.edges) {
      if(!visited[current.edges[j].value]) {
        distance[current.edges[j].value] = Math.min(distance[current.edges[j].value], distance[currentValue] +1);
        queue.push(current.edges[j]);
      }
    }
  }
  //console.log(distance)
  return distance[end]
}

console.log('ShortestPath : ' + shortestPath(metro, 'A', 'F'));

//===============================================================================================================================


/*
  maxConsecutiveSum
*/


function maxConsecutiveSum(arr) {
  let localMax = arr[0];
  let ultimateMax = arr[0];
  
  for(var i = 1; i < arr.length; i++) {
    localMax = Math.max(localMax + arr[i], arr[i]);
    
    ultimateMax = Math.max(ultimateMax, localMax)
  }
  return ultimateMax;
}

console.log('maxConsecutiveSum : ' + maxConsecutiveSum([6, -1, 3, 5, -10]))

//===============================================================================================================================

/*
latticePath
*/


function latticePath(n) {
  var count =0;
  
  function traverse(xCoor, yCoor) {
    if(xCoor === n && yCoor=== n) {
      count++;
      return;
    } 
    else if(xCoor > n || yCoor > n ) {
      return;
    }
      traverse(xCoor+1, yCoor);
      traverse(xCoor, yCoor+1);
  }
  traverse(0,0)
  return count;
}
console.log('latticePath: ' + latticePath(2))
//===============================================================================================================================


/*
latticePathDynamic
*/

function latticePathDynamic(n) {
  var cache = {};
  
  function traverse(xCoor, yCoor) {
    if(cache[xCoor + ',' + yCoor]) {
      return cache[xCoor + ',' + yCoor];
    }
    else if(xCoor === n && yCoor === n) {
      return 1;
    }
    else if(xCoor > n || yCoor > n) {
      return 0;
    }
    else {
      cache[xCoor + ',' + yCoor] = traverse(xCoor+1, yCoor) + traverse(xCoor, yCoor+1);
      return cache[xCoor + ',' + yCoor];
    }
  }
  return traverse(0,0);
}

console.log('latticePathDynamic: ' + latticePathDynamic(2))
//===============================================================================================================================

/*
  === nth fibonacci with side efficts ===
*/

function nthFib(n, i , fibonacci) {
  fibonacci = fibonacci || [0,1];
  i = i || 2;
  
  if(n < 2) { return fibonacci[n]; }
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
  if(n === i) { return fibonacci[i];}
  
  return nthFib(n, i+1, fibonacci);
}
console.log('nthFib : ' + nthFib(6))

//===============================================================================================================================

/*
  === powerSet
*/
function powerSet(str) {
  let result = [];
  let library = {};
  
  function traverse(buildUp, depth) {
    if(depth === str.length){
      var key = buildUp.split('').sort().join('');
      if(!library[key]) {
        result.push(key);
        library[key] = true;
      }
      return;
    }
    traverse(buildUp, depth+1);
    traverse(buildUp+ str[depth], depth+1);
  }
  traverse('', 0);
  return result;
}
console.log('powerSet : ' + powerSet('abca'));


//===============================================================================================================================

//nthFibDynamic


function nthFibDynamic(n) {
  var fib = [0,1];
  
  function search(i) {
    if(i > n) {return }
    else {
      fib[i] = fib[i-1] + fib[i-2]
    }
    search(i+1)
  }
  search(2)
  return fib[n]
}
console.log(nthFibDynamic(6))

//===============================================================================================================================

/*
Three Sum
Given an array of integers, determine if there are three numbers that sum up to zero.

Input: Array of integers
Output: Boolean
Example
Input: [1, -1, 3 ,0, 2]		=>	Output: True
Input: [1, 3, 9, -2]		=>	Output: False
Constraints
Time Complexity: O(N2)
Auxiliary Space Complexity: Intermediate O(N), Advanced O(1).
An element may not be used more than once in a set of three that are summed.
If asked, assume an efficient in-place sorting method is provided.
Solution
Intermediate:
Loop through the array and create a hash table of all the elements as keys.
Performed a nested loop on the array with two pointers 
Sum the two values at the pointers and return true if the negative of that sum is in the hash table.
Outside the nested loop, return false if Step. 3 is never triggered

Advanced:
Sort the array using an efficient in-place sorting algorithm (e.g., in-place quicksort)
Loop through sorted array with an index i
For each value, set two pointers: j starting at i+1, k at the last element
Check to see if the sum of i, j, and k equals to zero
If the sum is less than zero, increment j. If the sum is greater than zero decrement k and if the sum equals zero, return true.
Continue to the next i if ever j and k are equal
Outside the for loop, return false if the return statement in Step 5. was never triggered.
Notes
Recommended to ask the intermediate version with O(N) auxiliary space allowed. Then ask the advanced version if the interviewee is able to solve it within the constraint.
Common first round technical screen question for Facebook.

*/

//===========================================
//      === BEGNINNER ===
function threeSumBeginner(arr, target) {
  var hash = {};
  var one, two;
  for(var i =0; i < arr.length; i++) {
    hash[arr[i]] = true;
    
    for(var j = 0; j < arr.length-1; j++) {
      var requred = target - (arr[j] + arr[j+1])
      if(hash[requred]) {
        return true;
      } 
    }
  }
  return false;
}

console.log('threeSum T=O(n2) BEGNINNER : ' + threeSumBeginner([1, -1, 3 ,0, 2], 0))

//===========================================

//      === INTERMEDIATE ===
function threeSumIntermediate(arr, target) {
  var hash = {};
  var required;
  
  for(var i = 0; i < arr.length; i++) {
    hash[arr[i]] = true;
  }
  for(i = 0; i < arr.length; i++) {
    required = target - (arr[i] + arr[i+1])
    
    if(hash[required]) {
      return true;
    }
  }
  return false;
}

console.log('threeSum T=O(n) ITERMEDIATE : ' + threeSumIntermediate([1, -1, 3 ,0, 2], 0))

//===========================================

//      === ADVANCED ===

function threeSumAdvanced(arr, target) {
  arr = sortInplace(arr)
  var m = 0, i = m+1, j = arr.length-1;
  
  while(m <= arr.length-3 && j > i && i <= arr.length-2) {
    if(m === arr.length-3 && i === arr.length-2 && j === arr.length-1 && arr[m] + arr[i] + arr[j] < target) {
      return false;
    }
    if(m === 0 && i === 1 && j ===2 && arr[m] + arr[i] + arr[j] > target) {
      return false;
    }
    if(arr[m] + arr[i] + arr[j] === target) {
      console.log('m ' + arr[m] + ', i ' + arr[i] +', j ' + arr[j])
      return true;
    }
    if(arr[m] + arr[i] + arr[j] > target) {
      j--;
    }
    if(arr[m] + arr[i] + arr[j] < target) {
      if(i === arr.length-2) {
        m++;
      } else {
        i++;  
      }
    }
  }
  return false;
  
  
}


function sortInplace(arr) {
  function devide(start, end) {
    if(start >= end) { return; }
    
    let mid = start;
    for(let i = start; i < end; i++) {
      if(arr[i] < arr[end]) {
        [arr[i], arr[mid]] = [arr[mid], arr[i]];
        mid++;
      }
    }
    [arr[end], arr[mid]] = [arr[mid], arr[end]];
    devide(start, mid -1);
    devide(mid +1, end);
  }
  devide(0, arr.length-1);
  return arr;
}
console.log('threeSum S=O(1) ADVANCED : ' + threeSumAdvanced([1, -1, 3 ,0, 2], 0))

//======================================================================================


/*
House Robber
A house robber has a map of houses and the amount of gold in each home.  The robber knows that if two adjacent homes are robbed, then the neighborhood security system will sound.  Determine the total amount of gold the robber can get without setting off the alarm.

Input: 		Array of Nonnegative Integers
Output: 	Integer
Example
Input: [1, 2, 3]				=>	Output: 4
Input: [1, 2, 4, 1, 5, 12, 5]	=>	Output: 17
Constraints
Time Complexity: O(N)
Auxiliary Space Complexity: O(N)

*/
function houseRobber(arr) {
  var result = 0;
  var a = 0;
  var b = 1;
  var c = 2;
  var d = 3;
  var teamA, teamB;
  
  while(a < arr.length) {
    if(b < arr.length-1 && d <= arr.length-1) {
      teamB = arr[b] + arr[d];
    }
    
    if(b <= arr.length-1 && d >= arr.length ) {
      teamB = arr[b];
    }
    if(b > arr.length-1) {
      teamB = 0;
    }
    
    
    if(a < arr.length-1 && c <= arr.length-1) {
      teamA = arr[a] + arr[c];
    }
    
    if(a <= arr.length-1 && c >= arr.length ) {
      teamA = arr[a];
    }
    if(a > arr.length-1) {
      teamA = 0;
    }
    
    
    
    
    result += Math.max(teamA, teamB);
    a += 4;
    b += 4;
    c += 4;
    d += 4;
    console.log('team A : ', teamA)
    console.log('team B : ', teamB)
    console.log(result)
    //break;
  }
  return result;
}

houseRobber([1, 2, 4, 1, 5, 12, 5])
//houseRobber([1, 2, 3])



//======================================================================================

/*
Knapsack Problem 0/1
Given a set of items where each item has a weight and a value. And given a knapsack with max weight capacity, determine the maximum value that can be placed into the knapsack without going over the capacity.

Input: An integer array of weights
           An integer array of values
           The ith item is weights[i] and values[i].	
Output: Integer of maximum total value
Example
Input: 
	value =  [60, 100, 120]
weight = [10, 20, 30]
capacity = 50





Output: 220

Constraints
                              Intermediate			Advanced	
Time Complexity:			            O(2N)				O(KN)
Auxiliary Space Complexity: 		  O(N)				O(K)

K is the capacity of the knapsack, N is the number of items
*/


function knapsack(values, weights, capacity) {
  var n = values.length
  console.log(n);
  var i ,w,ks = [];
  
  
  values.unshift(0)
  
  weights.unshift(0)
  
  //creat a matrix of values+1
  for( i = 0; i<=n; i++) {
    ks[i]= []
  }
  
  //fill the matrix
  for(i = 0; i <= n; i++) {
    for(w = 0; w <= capacity; w++) {
      //console.log([i,w] + ' v: ' + values[i] +',w : ' + weights[i] )
      if(i === 0 || w === 0) {
        ks[i][w] = 0;
      }
      else if(weights[i] <= w){
        ks[i][w] = Math.max(ks[i-1][w], values[i] + ks[i-1][w-weights[i]])
      }
      else{
        ks[i][w] = ks[i-1][w];
      }
    }
  }
  
  
  
  console.log(ks)
}
//knapsack([60, 100, 120], [10, 20, 30], 50)
knapsack([3, 4, 5], [2, 3, 4], 9)

//===========================================================================================

/*
Longest Palindrome
Given a string, determine the longest substring that is a palindrome 

Input: A string
Output: A string which is the longest palindrome
Example
Input: ”mydadlikestodriveracecars”
Output: “racecar”
Constraints
Time Complexity: O(N2)
Auxiliary Space Complexity: O(N).
Assume lowercase characters and no spaces.
*/


function longestPalindrom(str) {
  var result = {};
  var temp;
  var max = 0;
  var i, j;
  
  for(i = 0; i < str.length; i++) {
    for(j = i+1; j <str.length; j++) {
      if(str[i] === str[j]) {
        
        temp = str.slice(i ,j+1);
        if(temp === temp.split('').reverse().join('')) {
          result[temp.length] = temp;
          max = Math.max(max, temp.length)
        }
      }
    }
  }
  
  return result[max];
  //console.log(max)
  //console.log(result)
}



longestPalindrom('mydadlikestodriveracecars')

//====================================================================================================
/*
Median of Two Sorted Arrays
Given two sorted array of integers of the same length, determine the median of the combined sorted array.

Input: Two Arrays of Integers
Output: Float
Example
Input:    [1, 12, 15, 26, 38], [2, 13, 17, 30, 45]
Output:  16 
(because the median of [1, 2, 12, 13, 15, 17, 26, 30, 38, 45] equals 16)
Constraints
Time Complexity: (Intermediate) O(N), (Advanced) O(log(N))
Auxiliary Space Complexity: O(1).
*/

function findMedian(arr1, arr2) {
  
  var n = arr1.length;
  
  
  var newArray = merge(arr1, arr2);
  
  if(newArray[n] === newArray[n-1]) {
    return newArray[n];
  } else {
    return (newArray[n] + newArray[n-1]) /2;
  }
  
}

function merge(arr1, arr2) {
  var newArray= [];
  var i=0, j = 0;
  //merge the arrays
  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
      newArray.push(arr1[i]);
      i++;
    }
    else {
      newArray.push(arr2[j]);
      j++;
    }
  }
  while(i < arr1.length) {
    newArray.push(arr1[i]);
    i++;
  }
  while(j < arr2.length) {
    newArray.push(arr2[j]);
    j++;
  }
  
  return newArray;
}

console.log(findMedian([1, 12, 15, 26, 38], [2, 13, 17, 30, 45]))

//====================================================================================================

/*
Coin Change
Given a value N, and a set of different valued coins how many different ways can we make change from these coin values?  

Input:	 Integer and an Array
Output: Integer representing number of ways change can be made
Example
Input: 4, [1,2,3]		=>	Output: 4
(there four ways to make change [1,1,1,1],[1,1,2],[2,2],[1,3])
Input: 10, S = {2,3,5,6}	=>	Output: 5
(there are five ways [2,2,2,2,2],[2,2,3,3],[2,3,5],[5,5],[2,2,6])
Constraints
Time Complexity: 		Intermediate: O(∞), 	Advanced: O(MN) 
Auxiliary Space Complexity:	Intermediate: O(∞), 	Advanced: O(N)
The order of the coins does not matter. Duplicate sets of coins count only once.
*/


function coinChangen(coins, value) {
  var result = Array(value +1).fill(0);
  result[0] = 1;
  
  for(var i = 0; i < coins.length; i++) {
    var coin = coins[i];
    
    for(var j = 1; j < result.length; j++) {
      if(j >= coin) {
        result[j] += result[j - coin];
      }
    }
  }
  return result[value];
}
console.log('coinChange : ' + coinChangen([1,2,3], 4))

//====================================================================================================
/*
Trapping Rain Water
Given an array of integers representing the elevations of rocks, determine the total amount of water that can be trapped between rocks.

Input: 		Array of integers
Output: 	Integer
Example

Input: [3, 0, 2, 0, 4]      
Output: 7
Constraints
Advanced			Insane	
Time Complexity:			O(N)				O(N)
Auxiliary Space Complexity: 		O(N)				O(1)
*/


function trappingRain(arr) {
  var shortWall = Math.min(arr[0], arr[arr.length-1]);
  var rainAmount = 0;
  
  for(var i = 1; i < arr.length-1; i++) {
    if(arr[i] <= shortWall) {
      rainAmount += (shortWall - arr[i])
    }
  }
  return rainAmount
}

console.log('trappingRain : ' + trappingRain([3,0,2,0,4]))