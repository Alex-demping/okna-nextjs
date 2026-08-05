import { User } from "@/types/auth";


const STORAGE_KEY = "auth-user";


const USERS: (User & { password: string })[] = [
    {
        id: 1,
        login: "admin",
        password: "123456",
        role: "admin",
    },
];



export function login(
    login: string,
    password: string
): User | null {


    const user = USERS.find(
        (item) =>
            item.login === login &&
            item.password === password
    );


    if (!user) {
        return null;
    }


    const {
        password: _,
        ...userData
    } = user;


    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(userData)
    );


    return userData;
}




export function logout() {

    localStorage.removeItem(STORAGE_KEY);

}




export function getUser(): User | null {


    if (typeof window === "undefined") {
        return null;
    }


    const user = localStorage.getItem(
        STORAGE_KEY
    );


    if (!user) {
        return null;
    }


    try {

        return JSON.parse(user);

    } catch {

        return null;

    }
}