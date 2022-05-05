/*
Write a mini stack and register programming language
- Given a string representing a program,
  - Parse that string into commands and execute each command

- The language makes use of a stack, modeled by an array and a register, modeled by a number

Operations
- n
  - Reassigns the value of the register to n 
- PUSH, POP
  - Push adds a copy of the register value to the end of the stack
  - Pop removes the last element from the stack, and reassigns the register to this value
- ADD, SUB, MULT, DIV, REMAINDER
  - Each operation pops a value from the stack and completes the operation of the same name using the register value as the other operand. The resulting number becomes the new value for the register
- PRINT
  - Outputs the current value of the register

Algorithm
1. Parse commands
  - Split the input string on the empty space, resulting in an array of commands

2. Initialize stack to an empty array and register to the number 0

3. Iterate through the array of commands,
  - If the command string is a number
    - Reassign the register to the string, converted to a number
    - Continue to the next iteration
  - Otherwise, in the case of the following commands:
    - PUSH
      - Push the register value to the end of the stack
    - POP
      - Pop off the last value in the stack and reassign the register to this return value
    - ADD
      - Pop off the last value in the stack and reassign the register to the popped value plus the last register value
    - SUB
      - Pop off the last value in the stack and reassign the register to the last register value minus the popped value
    - MULT
      - Pop off the last value in the stack and reassign the register to this return value times the last register value
    - DIV
      - Pop off the last value in the stack and reassign the register to the last register value divided by the popped value
    - REMAINDER
      - Pop off the last value in the stack and divide the register value by the popped value. Reassign the register value to the remainder of this division.
    - PRINT 
      - Log the current register value to the screen

Error handling
- Report empty stack conditions
- Invalid tokens

- Return error message if an error occurs
- Otherwise, return undefined
*/

function minilang(program) {
  let commands = program.split(' ');
  
  let stack    = [];
  let register = 0;

  for (let idx = 0; idx < commands.length; idx += 1) {
    let command = commands[idx];
    if (command.match(/\d/)) {
      register = parseInt(command, 10);
      continue;
    }

    switch (command) {
      case 'PRINT': 
        console.log(register);
        break;
      case 'PUSH':
        stack.push(register);
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'REMAINDER':
        register = Math.floor(register % stack.pop());
        break;
    }

  }
}


minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
/*
3 -> register = 3, stack = []
push -> register = 3, stack = [3]
push -> register = 3, stack = [3, 3]
7 -> register = 7, stack = [3, 3]
div -> register = 2, stack = [3]
mult -> register = 6, stack = []
*/
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)