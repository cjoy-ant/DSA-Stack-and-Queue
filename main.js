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
    if (stack.top === null) {
      return null
    }
    return top.data;
  };

  peek(stack);

  // check if the stack is empty or not
  const isEmpty = (stack) => {
    let currNode = stack.top;
    if (currNode === null) {
      return true;
    }
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
  const is_palindrome = (str) => {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let reversed = new Stack();
    for (let i = 0; i < str.length; i++) {
      reversed.push(str.charAt(i));
    }
    for (let j = 0; j < str.length; j++) {
      if (str[j] === reversed.pop()) {
        return true;
      }
      return false;
    }
  };

  // True, true, true, false
  console.log(is_palindrome("dad"));
  console.log(is_palindrome("A man, a plan, a canal: Panama"));
  console.log(is_palindrome("1001"));
  console.log(is_palindrome("Tauhida"));

  // 4. Matching parentheses in an expression
  const hasParentheses = (str) => {
    let stack = new Stack();
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        stack.push(str[i]);
      }
      if (str[i] === ")") {
        if (peek(stack) === '(') {
          stack.pop();
        }
      }
    }
    if (stack.top === null) {
      return true;
    } else {
      console.log(`missing a  + ')'`)
      return false
    }
  };

  console.log(hasParentheses("("));
};

module.exports = main;
