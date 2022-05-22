
export const login = (username) => {
    // localStorage.setItem('username', username);
    sessionStorage.setItem('email',username);
}

export const getUser =() => {
    // let username = localStorage.getItem('username');
    let user = sessionStorage.getItem('email');
    return user;
}

export const isAuthenticated = () => {
    return Boolean(getUser());
}