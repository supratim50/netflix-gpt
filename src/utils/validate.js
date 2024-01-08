const validateEmail = (email) => {
    if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))) return false

    return true
}

const validatePassword = (pass) => {
    if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pass))) return false

    return true
}

export const validation = (email, password, setError) => {
    if(!validateEmail(email)) { // if email is not correct then 'validateEmail' will return false
      setError(error => ({...error, ...{email: true}}))
    } else {
      setError(error => ({...error, ...{email: false}}))
    }
    if(!validatePassword(password)) { // if email is not correct then 'validatePassword' will return false
      setError(error => ({...error, ...{pass: true}}))
    } else {
      setError(error => ({...error, ...{pass: false}}))
    }
  }