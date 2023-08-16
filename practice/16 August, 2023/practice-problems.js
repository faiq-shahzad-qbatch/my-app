// JavaScript programs with solutions:

// Question 1: Find the largest number in an array.

function findLargestNumber(arr) {
  return Math.max(...arr);
}

// Example usage:
var numbers = [10, 5, 20, 8];
console.log(findLargestNumber(numbers)); // Output: 20

// Question 2: Reverse a string.

function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example usage:
var text = "hello";
console.log(reverseString(text)); // Output: "olleh"

// Question 3: Check if a string is a palindrome.

function isPalindrome(str) {
  var reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// Example usage:
var palindromeStr = "level";
console.log(isPalindrome(palindromeStr)); // Output: true

// Question 4: Remove duplicates from an array.

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

// Example usage:
var numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbersWithDuplicates)); // Output: [1, 2, 3, 4, 5]

// Question 5: Find the first non-repeating character in a string.

function findFirstNonRepeatingChar(str) {
  var charMap = new Map();
  for (let char of str) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }
  for (let char of str) {
    if (charMap.get(char) === 1) {
      return char;
    }
  }
  return null;
}

// Example usage:
var textWithNonRepeatingChar = "stress";
console.log(findFirstNonRepeatingChar(textWithNonRepeatingChar)); // Output: "t"

// Question 6: Find the sum of all numbers in an array.

function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Example usage:
var numbersToSum = [1, 2, 3, 4, 5];
console.log(sumArray(numbersToSum)); // Output: 15

// Question 7: Check if a number is prime.

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Example usage:
var numberToCheck = 17;
console.log(isPrime(numberToCheck)); // Output: true

// Question 8: Find the intersection of two arrays.

function findIntersection(arr1, arr2) {
  return arr1.filter((element) => arr2.includes(element));
}

// Example usage:
var array1 = [1, 2, 3, 4, 5];
var array2 = [3, 4, 5, 6, 7];
console.log(findIntersection(array1, array2)); // Output: [3, 4, 5]

// Question 9: Capitalize the first letter of each word in a sentence.

function capitalizeWords(sentence) {
  return sentence.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Example usage:
var sentenceToCapitalize = "hello world";
console.log(capitalizeWords(sentenceToCapitalize)); // Output: "Hello World"

// Question 10: Check if a string contains only digits (numbers).

function containsOnlyDigits(str) {
  return /^\d+$/.test(str);
}

// Example usage:
var digitString = "12345";
console.log(containsOnlyDigits(digitString)); // Output: true

// These solutions should help you prepare for JavaScript coding interviews. Make sure to understand the concepts behind the solutions and practice writing the code on your own. Good luck!Sure! Here are 10 more JavaScript coding interview // Questions along with their solutions:

// Question 1: Find the second smallest number in an array.

function findSecondSmallestNumber(arr) {
  arr = arr.sort((a, b) => a - b);
  return arr[1];
}

// Example usage:
var numbers = [10, 5, 20, 8];
console.log(findSecondSmallestNumber(numbers)); // Output: 8

// Question 2: Remove a specific element from an array.

function removeElementFromArray(arr, element) {
  return arr.filter((item) => item !== element);
}

// Example usage:
var arr = [1, 2, 3, 4, 5];
var elementToRemove = 3;
console.log(removeElementFromArray(arr, elementToRemove)); // Output: [1, 2, 4, 5]

// Question 3: Find the longest word in a sentence.

function findLongestWord(sentence) {
  var words = sentence.split(" ");
  return words.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    "",
  );
}

// Example usage:
var sentence = "The quick brown fox jumps over the lazy dog";
console.log(findLongestWord(sentence)); // Output: "jumps"

// Question 4: Reverse words in a sentence without changing the order of words.

function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

// Example usage:
var sentenceToReverse = "Hello world, how are you?";
console.log(reverseWords(sentenceToReverse)); // Output: "you? are how world, Hello"

// Question 5: Find the factorial of a given number.

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Example usage:
var numberToFactorial = 5;
console.log(factorial(numberToFactorial)); // Output: 120

// Question 6: Check if two strings are anagrams.

function areAnagrams(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

// Example usage:
var firstString = "listen";
var secondString = "silent";
console.log(areAnagrams(firstString, secondString)); // Output: true

// Question 7: Find the maximum sum of a contiguous subarray in an array (Kadane's algorithm).

function maxSubarraySum(arr) {
  let maxEndingHere = 0;
  let maxSoFar = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Example usage:
var numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraySum(numbers)); // Output: 6 (the subarray [4, -1, 2, 1] has the maximum sum)

// Question 8: Find the missing number in an array containing numbers from 1 to n.

function findMissingNumber(arr) {
  var n = arr.length + 1;
  var totalSum = (n * (n + 1)) / 2;
  var actualSum = arr.reduce((acc, curr) => acc + curr, 0);
  return totalSum - actualSum;
}

// Example usage:
var numbers = [1, 2, 4, 6, 3, 7, 8];
console.log(findMissingNumber(numbers)); // Output: 5

// Question 9: Convert a string to title case (capitalize the first letter of each word).

function toTitleCase(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Example usage:
var sentence = "hello world, how are you?";
console.log(toTitleCase(sentence)); // Output: "Hello World, How Are You?"

// Question 10: Implement a function to calculate the power (x^y) of two numbers.

function power(x, y) {
  return Math.pow(x, y);
}

// Example usage:
var base = 2;
var exponent = 3;
console.log(power(base, exponent)); // Output: 8 (2^3)

// These additional coding interview // Questions should help you further enhance your JavaScript skills. As always, understanding the concepts and practicing coding is key to mastering these problems. Happy coding!Sure! Here are 10 more JavaScript coding interview // Questions along with their solutions:

// Question 1: Find the common elements between two arrays.

function findCommonElements(arr1, arr2) {
  return arr1.filter((element) => arr2.includes(element));
}

// Example usage:
var array1 = [1, 2, 3, 4, 5];
var array2 = [3, 4, 5, 6, 7];
console.log(findCommonElements(array1, array2)); // Output: [3, 4, 5]

// Question 2: Check if a string is a valid palindrome considering only alphanumeric characters and ignoring cases.

function isPalindrome2(str) {
  var alphanumericStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  var reversedStr = alphanumericStr.split("").reverse().join("");
  return alphanumericStr === reversedStr;
}

// Example usage:
var palindromeStr = "A man, a plan, a canal, Panama!";
console.log(isPalindrome2(palindromeStr)); // Output: true

// Question 3: Flatten a nested array.

function flattenArray(arr) {
  return arr.flat(Infinity);
}

// Example usage:
var nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]

// Question 4: Find the first n Fibonacci numbers.

function fibonacci(n) {
  var result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}

// Example usage:
var count = 7;
console.log(fibonacci(count)); // Output: [0, 1, 1, 2, 3, 5, 8]

// Question 5: Reverse a linked list (singly linked list).

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  while (head) {
    var next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

// Example usage:
var head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
console.log(reverseLinkedList(head)); // Output: ListNode { val: 4, next: ListNode { val: 3, next: ListNode { val: 2, next: ListNode { val: 1, next: null } } } }

// Question 6: Implement a stack data structure using an array.

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// Example usage:
var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false

// Question 7: Find the longest common prefix among an array of strings.

function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }
  return prefix;
}

// Example usage:
var strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings)); // Output: "fl"

// Question 8: Implement a queue data structure using an array.

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// Example usage:
var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2
console.log(queue.size()); // Output: 2
console.log(queue.isEmpty()); // Output: false

// Question 9: Find the largest sum of non-adjacent numbers in an array.

function maxNonAdjacentSum(arr) {
  let prevMax = 0;
  let currentMax = 0;

  for (var num of arr) {
    var newMax = Math.max(currentMax, prevMax + num);
    prevMax = currentMax;
    currentMax = newMax;
  }

  return currentMax;
}

// Example usage:
var numbers = [1, 2, 3, 4, 5];
console.log(maxNonAdjacentSum(numbers)); // Output: 9 (choosing 2 and 5, which are non-adjacent)

// Question 10: Find the number of occurrences of a given element in an array.

function countOccurrences(arr, target) {
  return arr.reduce((count, num) => (num === target ? count + 1 : count), 0);
}

// Example usage:
var numbers = [1, 2, 3, 4, 2, 2];
var targetNumber = 2;
console.log(countOccurrences(numbers, targetNumber)); // Output: 3

// These additional JavaScript coding interview // Questions should provide you with more practice and a deeper understanding of the language. Remember to solve them on your own and thoroughly test your solutions. Happy coding!Of course! Here are 10 more JavaScript coding interview // Questions along with their solutions:

// Question 1: Check if a number is a power of two.

function isPowerOfTwo(num) {
  return num > 0 && (num & (num - 1)) === 0;
}

// Example usage:
var numberToCheck = 16;
console.log(isPowerOfTwo(numberToCheck)); // Output: true

// Question 2: Remove all falsy values from an array.

function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

// Example usage:
var values = [0, 1, "", "hello", false, NaN, undefined, null];
console.log(removeFalsyValues(values)); // Output: [1, 'hello']

// Question 3: Implement a debounce function to limit the rate of function calls.

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Example usage:
function saveToServer(data) {
  console.log("Saving data:", data);
}

var debouncedSave = debounce(saveToServer, 1000);
debouncedSave("Data 1"); // This call will be delayed by 1000ms
debouncedSave("Data 2"); // This call will replace the previous one and be delayed by 1000ms again

// Question 4: Find the median of two sorted arrays.

function findMedianSortedArrays(nums1, nums2) {
  var mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  var mid = Math.floor(mergedArray.length / 2);
  return mergedArray.length % 2 === 0
    ? (mergedArray[mid - 1] + mergedArray[mid]) / 2
    : mergedArray[mid];
}

// Example usage:
var arr1 = [1, 3];
var arr2 = [2];
console.log(findMedianSortedArrays(arr1, arr2)); // Output: 2.0

// Question 5: Calculate the sum of squares of numbers in an array.

function sumOfSquares(arr) {
  return arr.reduce((sum, num) => sum + num ** 2, 0);
}

// Example usage:
var numbers = [1, 2, 3, 4, 5];
console.log(sumOfSquares(numbers)); // Output: 55 (1^2 + 2^2 + 3^2 + 4^2 + 5^2)

// Question 6: Implement a function to check if a number is a prime number.

function isPrime2(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Example usage:
var numberToCheck = 17;
console.log(isPrime2(numberToCheck)); // Output: true

// Question 7: Implement a function to find the maximum difference between two elements in an array, where the larger element appears after the smaller element.

function maxProfit(prices) {
  let maxDiff = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    maxDiff = Math.max(maxDiff, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }

  return maxDiff;
}

// Example usage:
var stockPrices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(stockPrices)); // Output: 5 (Buy at 1, sell at 6)

// Question 8: Check if a given string is a valid IPv4 address.

function isValidIPv4Address(ip) {
  var parts = ip.split(".");
  if (parts.length !== 4) return false;
  for (var part of parts) {
    var num = parseInt(part, 10);
    if (isNaN(num) || num < 0 || num > 255 || num.toString() !== part)
      return false;
  }
  return true;
}

// Example usage:
var ip = "192.168.0.1";
console.log(isValidIPv4Address(ip)); // Output: true

// Question 9: Implement a function to find the first non-repeated character in a string.

function firstNonRepeatedCharacter(str) {
  var charMap = new Map();
  for (var char of str) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }
  for (var char of str) {
    if (charMap.get(char) === 1) {
      return char;
    }
  }
  return null;
}

// Example usage:
var text = "stress";
console.log(firstNonRepeatedCharacter(text)); // Output: 't'

// Question 10: Implement a function to perform a binary search on a sorted array.

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

// Example usage:
var numbers = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(numbers, 7)); // Output: 3 (index of 7 in the array)

// These additional JavaScript coding interview // Questions should help you further improve your problem-solving skills and familiarity with the language. Remember to practice and understand the concepts behind the solutions. Good luck with your interviews!
