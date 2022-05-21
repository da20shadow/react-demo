import {useNavigate} from 'react-router-dom';

function Login() {

  let navigate = useNavigate();

  const onFormSubmit = (e) => {
    e.preventDefault();
    
    //TODO: Login

    // navigate('/account',{replace: true});
    navigate('/account');
  }

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <h2 className="text-center mb-3 fw-bold">Log in</h2>
        <div className="col-sm-10 col-lg-5 col-xxl-4 shadow-lg bg-light rounded-3 py-3">
          <div className="card-body py-3">
            <h3 className="text-center text-success">Success Message</h3>
            <h3 className="text-center text-danger">Error Message</h3>

            <form className="needs-validation was-validated" onSubmit={onFormSubmit}>
              {/* Email */}
              <div className="mb-1">
                <label className="form-label" htmlFor="loginEmail">
                  Email
                </label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                  pattern="^([a-zA-Z0-9_.-])+@([a-zA-Z])+[.]([a-zA-Z]{2,4})+$"
                  id="loginEmail"
                  required="required"
                />
                <div className="invalid-feedback">Enter Email!</div>
                <div className="valid-feedback">Good!</div>
              </div>

              {/* Password  */}
              <div className="mb-1">
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="loginPassword"
                  required="required"
                />
                <div id="passwordErrorMessage" className="invalid-feedback">
                  Enter Password!
                </div>
                <div className="valid-feedback">Good!</div>
              </div>

              {/* Login Button */}
              <div className="d-grid gap-2 my-4">
                <button
                  type="submit"
                  name="login"
                  className="btn btn-primary d-block"
                >
                  Login
                </button>
              </div>

              {/* Forgot Password Link  */}
              <div className="col-12 d-flex justify-content-center">
                <a href="forgot_password.php">Forgot password?</a>
              </div>

              {/* Register Link  */}
              <div className="text-center mt-3">
                <p>
                  Not a member? <a href="register.php">Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
