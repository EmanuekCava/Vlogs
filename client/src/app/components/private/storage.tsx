export const isStorage = (): boolean => {


    const user = JSON.parse(localStorage.getItem("persist:persist-vlogs") as string).user

    if(user) {
        return JSON.parse(user).isLoggedIn
    }

    return false

}