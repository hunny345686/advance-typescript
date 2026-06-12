/** 
 * This is a simple TypeScript file that demonstrates basic syntax and functionality.
 * It includes a function to greet a person by name and logs the greeting to the console.
 */
function greet(name: string): string {
    return `Hello, ${name}!`;
}

const name: string = "World";
console.log(greet(name));