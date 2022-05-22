function Account({
    isLogged,
    user,
}) {
    let accountInfo = (
        <div className="container">
            <h1 className="text-center mt-4">Account</h1>
            <h2 className="text-center mb-5">Hi {user}, Welcome to Your Account</h2>
        </div>
    );
    
    return (
        isLogged 
        ? accountInfo
        : window.location.href =('/login')
    );
}
export default Account;