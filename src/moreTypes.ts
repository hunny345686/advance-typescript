let res: any = "56"

let noLenth: number = (res as string).length


type Book = {
    name: string
}

let bookString = "{'name':'Hello Books'}";

let bookObj = JSON.parse(bookString)

console.log((bookObj as Book).name)

const input = document.getElementById("username") as HTMLInputElement


let val: any = "hello"

val = 1231

val.toUpperCase()

let valWithUnknow: unknown = "hello"

valWithUnknow = 1231

if (typeof valWithUnknow === "string")
    valWithUnknow.toUpperCase()



try {

} catch (error) {
    if (error instanceof Error)
        console.log(error.message)

    console.log(error)
}


type role = "admin" | "user"


