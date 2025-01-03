function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: any): number {
  if (typeof b === 'number') {
    return a + b; 
  } else {
    console.error('Error: Invalid input. Only numbers are allowed.');
    return a; // or throw an error, or return some default value
  }
}

let result1 = addSafe(5, 10); // Correct addition
let result2 = addSafe(5, "10"); // Error handling