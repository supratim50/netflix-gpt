export const validateEmail = (email) => {
    if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))) return false

    return true
}

export const validatePassword = (pass) => {
    if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pass))) return false

    return true
}