const data: string[] = ["a", "b"]

const rating: Array<number> = [1, 2, 3, 4]

type User = {
    name: string,
    age: number
}

const users: User[] = [{
    name: "prem",
    age: 20
}, {
    name: "shyam",
    age: 40
}]


// readonly

const cities: string[] = ["chd", "ambala"]

cities[0] = "hello"

const citiesReadonly: readonly string[] = ["chd", "ambala"]

// citiesReadonly[0] = "hello"  Iisue Here


let userTuple: [string, number];
userTuple = ["Prem", 34]

// Enums

enum Ratings {
    "Bad",
    "Good",
    "V good",

}

const ratings = Ratings["V good"]

enum status {
    PENDING = 100,
    SERVED,// 101
    CANCELLED// 102
}



