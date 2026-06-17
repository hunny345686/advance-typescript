function getData(data: string | number) {

    if (typeof data === "string") {
        return `Data is String ${data}`
    }

    return `Data is Number ${data}`

}

getData("hello")


class SvingAccount {

    getAmount() {
        return `Amount is  1000`
    }
}

class CuuruntAccount {
    getAmount() {
        return `Amount is  12000`
    }
}

function getAmount(getAmout: SvingAccount | CuuruntAccount) {
    if (getAmount instanceof SvingAccount) {
        return getAmout.getAmount()
    }
}

type Account = {
    AcNumber: number,
    name: string
}

function getAccountDetail(obj: any): obj is Account {

    return (
        (typeof obj === "object" && obj !== null && typeof obj.AcNumber === "number" && typeof obj.name === "string")
    )
}