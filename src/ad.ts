
//  
type User = {
    name: string;
    age: number;
};

const user: User = {
    name: "Prem",
    age: 27
};

// Level 3: Interfaces

// Use interface when expecting extension

interface User1 {
    id: number;
    name: string;
    email: string
}

const user1: User1 = {
    id: 1,
    name: "Prem",
    email: "prem@gmail.com"
};

interface Employee extends User1 {
    department: string;
}

// Level 4: Function Types

type GreetFn = (name: string) => string;

const greet: GreetFn = (name) => {
    return `Hello ${name}`;
};

// Level 5: Union Types

type Status = "loading" | "success" | "error";

let status: Status;

status = "loading";
status = "success";

// Level 6: Optional Properties

type User2 = {
    name: string;
    age?: number;
};

const user2: User2 = {
    name: "prem",
};