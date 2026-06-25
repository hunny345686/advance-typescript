const account = {
    name: "Saving Acount",
    amount: 3000,
    isActive: true
}

let bank: {
    name: string,
    amount: number,
    isActive?: boolean
}

bank = {
    name: "Hello",
    amount: 2000,
    isActive: false
}

type Bank = {
    name: string,
    amount: number,
    isActive?: boolean
    typeOfAcc: string[]
}

const savingAc: Bank = {
    name: "Prem",
    amount: 3000,
    typeOfAcc: ["saving", "Currunt"],
    isActive: true
}


type User = {
    username: string,
    password: string
}

const u: User = {
    password: "hekkn",
    username: "pewg",
    // isActive: false
}


type item = { name: string, quantity: number }
type address = { street: string, pin: number }

type order = { id: string, items: item[], address: address }



type chai = {
    name: string,
    price: number,
    ishot: boolean
}

const updatedChai = (update: Partial<chai>) => {
    console.log("Updating" + update)
}

const updatedChai2 = (update: Required<chai>) => {
    console.log("Updating" + update)
}

updatedChai2({ name: "prem", price: 20, ishot: false })