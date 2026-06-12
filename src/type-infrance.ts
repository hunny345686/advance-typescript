// type infrence is a feature in TypeScript that allows the compiler to automatically determine the type of a variable based on its initial value. This means that you don't have to explicitly declare the type of a variable, as TypeScript will infer it for you.

let name = "TypeScript"; // type infrence will infer the type of 'name' as string

let age = Math.random() > .5 ? 10 : 20; // type infrence will infer the type of 'age' as number

let age1 = Math.random() > .5 ? 10 : ""; // type infrence will infer the type of 'age1' as (number | string)


// type anotetion is a way to explicitly declare the type of a variable in TypeScript. This is useful when you want to provide more information about the type of a variable, or when you want to ensure that a variable has a specific type.

let name1: string = "TypeScript"; // type anotetion explicitly declares the type of 'name1' as string   
let no: number = 10; // type anotetion explicitly declares the type of 'no' as number
let isActive: boolean = true; // type anotetion explicitly declares the type of 'isActive' as boolean   
