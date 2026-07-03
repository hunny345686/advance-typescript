interface User {
    name: string,
    age: number
}

const user: User = {
    name: "prem",
    age: 234

}

interface BankAcc {
    getBal(acc: number): number,
    getName(acc: number): string
}

const getAcDetail: BankAcc = {
    getBal(da) {
        return 123123
    },
    getName(data) {
        return "hekkio"
    }
}

// getAcDetail.getBal("asgh")


interface User {
    name: string
}
interface User {
    age: number
}

const u: User = {
    name: "Prem",
    age: 23
}

interface A { name: string }
interface B { age: number }

interface C extends A, B {
    gender: string
}




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Generics


function wrapInArray<T>(item: T): T[] {
    return [item]
}

wrapInArray(23)
wrapInArray("asdjsgj")
wrapInArray(["1", 3])


interface Box<T> {
    content: T
}

const numberBox: Box<number> = {
    content: 10
}

const numberBoxS: Box<string> = {
    content: "Hello"
} 