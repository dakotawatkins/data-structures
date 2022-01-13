/**Initialize an empty stack
Remove all spaces from the expression
For each character in the expression
If the character is an operand, push it onto the stack
If the character is an operator
Pop two operands a and b from the stack
Evaluate a op b where op is whichever operation is being considered
Push the results back onto the stack
Return the value on the stack */

const Stack = require("./lib/stack");

const evaluate = (expression) => {
  let stack = new Stack();

  // remove all spaces from the expression
  expression = expression.replace(/\s/g, "");

  expression.split("").forEach((character) => {
    if (!"+-*/".includes(character)) {
      stack.push(parseInt(character));
    }
    if ("+-*/".includes(character)) {
      let a = stack.pop();
      let b = stack.pop();

      const mathMachine = {
        "+": b + a,
        "-": b - a,
        "/": b / a,
        "*": b * a,
      };

      const result = mathMachine[character];

      stack.push(parseInt(result));
    }
  });

  return stack.pop();
};

module.exports = evaluate;