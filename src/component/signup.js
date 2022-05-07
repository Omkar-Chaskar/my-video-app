import { Link } from "react-router-dom";

export default function Signup() {

  return (
    <section className="signup">
      <form className="form-action" id="form">
        <h4 className="bold text-center login-header">SignUp</h4>
        <br />
        <div className="login-container">
          <label className="input-label" for="first-name">
            First name{" "}
          </label>
          <input
            className="input-action"
            type="text"
            id="first-name"
            name="first-name"
            placeholder="Adarsh"
            required
          />
          <p className="input-danger" id="invalid-name"></p>
          <br />
          <label className="input-label" for="email">
            Last name{" "}
          </label>
          <input
            className="input-action"
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Balika"
            required
          />
          <p className="input-danger" id="invalid-email"></p>
          <br />
          <label className="input-label" for="email">
            Email address{" "}
          </label>
          <input
            className="input-action"
            type="email"
            id="email"
            name="email"
            placeholder="Adarsh@balika.com"
            required
          />
          <p className="input-danger" id="invalid-email"></p>
          <br />
          <label className="input-label" for="password">
            Create Password
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
            <input type="checkbox" name="checkterms" id="checkterms" required />
            <label for="checkterms" className="p1">
              {" "}
              I accept all Terms & Conditions
            </label>
          </div>
          <br />
          <div className="text-center">
            <button
              className="button button-primary btn-full bold btn-submit"
              id="btn-submit"
              type="submit"
            >
              Create New Account
            </button>
            <Link className="link-create" to="/Login" id="btn-cancel">
              Already have an account
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}