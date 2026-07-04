import axios, { AxiosError, type AxiosResponse } from "axios";

interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
}

axios.get("https://api.example.com/data").then(response => {
    console.log(response.data);
})

fetch("https://jsonplaceholder.typicode.com/todos/1")


const fetchData = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios.get<Todo>("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response.data);
    } catch (error: unknown) {

        if (axios.isAxiosError(error)) {
            console.error("Error fetching data:", error.message);
        }
    }
}

fetchData()