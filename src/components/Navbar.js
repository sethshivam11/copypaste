import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme={props.mode}
      id="navbar"
    >
      <div className="container-fluid">
        <img
          src="favicon.svg"
          alt=""
          style={{ width: "30px", height: "30px" }}
          className="mx-2"
        />
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {props.li1}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.li2}
              </Link>
            </li>
          </ul>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
              checked={props.mode === 'dark'? "dark": "light"}
            />
            <label
              className={
                props.mode === "light"
                  ? "form-check-label, text-dark"
                  : "form-check-label, text-light"
              }
              htmlFor="flexSwitchCheckDefault"
            >
              Dark
            </label>
          </div>
          <div id="colorPallete">
            <button id="red" onClick={props.redColor}></button>
            <button id="green" onClick={props.greenColor}></button>
            <button id="blue" onClick={props.blueColor}></button>
            <button id="black" onClick={props.blackColor}></button>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  li1: PropTypes.string,
  li2: PropTypes.string,
  mode: PropTypes.string
};
Navbar.defaultProps = {
  title: "Set title",
  li1: "Home",
  li2: "About",
  mode: "light",
};
