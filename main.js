const Stack = require("./stack");
const Queue = require("./queue");

const main = () => {
  // 1. Create a stack class
  const stack = new Stack();

  stack.push("starTrek");
  stack.push("Kirk");
  stack.push("Spock");
  stack.push("McCoy");
  stack.push("Scotty");
  console.log(stack);

  // 2. Useful methods for a stack

  // look at the t op of the stack without removing it
  const peek = (stack) => {
    let top = stack.top;
    console.log("top: " + top.data);
    return top.data;
  };

  peek(stack);

  // check if the stack is empty or not
  const isEmpty = (stack) => {
    let currNode = stack.top;
    if (currNode === null) {
      console.log("is the stack empty: " + true);
      return true;
    }
    console.log("is the stack empty: " + false);
    return false;
  };

  isEmpty(stack);

  // display the stack - what is the first item in the stack?
  const display = (stack) => {
    let currNode = stack.top;
    while (currNode !== null) {
      console.log(currNode.data);
      currNode = currNode.next;
    }
  };

  display(stack); //starTrek

  // 3. Check for palindromes using a stack
  const is_palindrome = (string) => {
    string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let reversed = new Stack();
    for (let i = 0; i < string.length; i++) {
      reversed.push(string.charAt(i));
    }
    for (let j = 0; j < string.length; j++) {
      if (string[j] === reversed.pop()) {
        console.log("is palindrome: " + true);
        return true;
      }
      console.log("is palindrome: " + false);
      return false;
    }
  };

  // True, true, true, false
  console.log(is_palindrome("dad"));
  console.log(is_palindrome("A man, a plan, a canal: Panama"));
  console.log(is_palindrome("1001"));
  console.log(is_palindrome("Tauhida"));

  // 4. atching parentheses in an expression
};

module.exports = main;
