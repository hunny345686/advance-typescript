const subscriber: string | number = "John Doe"; // The variable `subscriber` can hold either a string or a number value. In this case, it is assigned the string "John Doe".

let APIRequuestStatus: "pending" | "success" | "error" = "success"; // The variable `APIRequestStatus` can only hold the string values "success" or "error". Here, it is assigned the 
// value "success".

APIRequuestStatus = "pending"; // This line will cause a TypeScript error because the variable `APIRequestStatus` is declared as a constant and cannot be reassigned. Additionally, it can only hold the values "success" or "error", so assigning "pending" is not allowed.

// APIRequuestStatus = "done"; // This line will also cause a TypeScript error for the same reasons as above. The variable `APIRequestStatus` cannot be reassigned and can only hold the values "success" or "error". Assigning "done" is not allowed.

const orders = ["20", "30", "40"]; // The variable `order` is an array of strings, where each element is a string representation of a number. In this case, the array contains the strings "20", "30", and "40".

let currentOrder: string | undefined; // The variable `currentOrder` can hold either a string value or be undefined. Initially, it is declared without an assigned value, so it is undefined.
for (let order of orders) {
    {
        if (order === "6") {
            currentOrder = order;
        }
    }
}
console.log(currentOrder); // This line will output the value of `currentOrder` to the console. Since `currentOrder` was assigned the value "30" in the loop, it will print "30". string | undefined