import * as userService from '../services/userService';
function Register() {
    const createUserForm = (e) => {
        e.preventDefault();

        let fromData = new FormData(e.currentTarget);

        let username = fromData.get('username');
        let email = fromData.get('email');
        let password = fromData.get('password');

        userService.create({
            username,
            email,
            password
        }).then( result => {
            alert("Account Created!")
        })
    }

    return (
        <div className="container">
            <h1 className="text-center">Create Account</h1>
            <form onSubmit={createUserForm}>
                <input type="text" name="username" placeholder="Username" />
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
export default Register;