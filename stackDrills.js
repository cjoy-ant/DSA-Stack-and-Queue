const Stack = require("./stack");

const stackDrills = () => {
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
      return null;
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
        if (peek(stack) === "(") {
          stack.pop();
        }
      }
    }
    if (stack.top === null) {
      return true;
    } else {
      console.log(`missing a  + ')'`);
      return false;
    }
  };

  console.log(hasParentheses("("));

  // 5. Sort stack
  // const sort = (input, tempStack=null, temp) => {
  //   if (tempStack === null) {
  //     tempStack = new Stack();
  //   }
  //   if (input.top === null) {
  //     input = tempStack;
  //     return input;
  //   }
  //   temp = input.pop();
  //   if (tempStack.top === null || temp < tempStack.top.data) {
  //     return sort(input, tempStack);
  //   } else {
  //     while (tempStack.top !== null && temp > tempStack.top.top) {
  //       input.push(tempStack.pop());
  //     }
  //     tempStack.push(temp);
  //     return sort(input, tempStack);
  //   }
  // };

  // like tower of Hanoi
  // // const sort = (input, ouput=null, temp=null) => {
  // //   if (output === null) {
  // //     output = new Stack()
  // //   }
  // //   if (temp === null) {
  // //     temp = new Stack()
  // //   }
  // //   let counter = 0
  // //   let currNode = input.top
  // //   while (currNode !== null) {
  // //     counter ++
  // //     currNode = currNode.next
  // //   }
  // //   for (let i=0; i < counter; i++) {
  // //     let node = input.top
  // //     if (node > node.next) {

  // //     }
  // //   }
  // // };

  // let testStack = new Stack();
  // let output = null;
  // let temp = null;
  // testStack.push(10);
  // testStack.push(100);
  // testStack.push(1);
  // testStack.push(1000);
  // console.log(sort(testStack, output, temp));
  // UNFINISHED
};

module.exports = stackDrills;
