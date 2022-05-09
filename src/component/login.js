import { Link } from "react-router-dom";

export default function Login() {

  return (
    <section className="login">
      <form className="form-action" id="form">
        <h4 className="bold text-center login-header">LogIn</h4>
        <br />
        <div className="login-container">
          <label className="input-label" htmlFor="email">
            Email address
          </label>
          <input
            className="input-action"
            type="email"
            id="email"
            name="email"
            placeholder="Jane@compony.com"
            required
          />
          <p className="input-danger" id="invalid-email"></p>
          <br />
          <label className="input-label" htmlFor="password">
            Password
          </label>
          <input
            className="input-action"
            type="password"
            id="password"
            name="password"
            minLength="8"
            maxLength="15"
            placeholder="********"
            required
          />
          <p className="input-danger" id="invalid-password"></p>
          <div>
            <div>
              <input
                type="checkbox"
                name="checkterms"
                id="checkterms"
                required
              />
              <label htmlFor="checkterms" className="p1">
                {" "}
                Remember me
              </label>
            </div>
            <div className="link-forgot">
              <a href="./forgotpassword.html">Forgot your Password?</a>
            </div>
          </div>

          <div className="text-center">
            <button
              className="button button-primary btn-full bold btn-submit"
              id="btn-submit"
              type="submit"
            >
              Login
            </button>
            <Link className="link-create" to="/Signup" id="btn-cancel">
              Create New Account
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}