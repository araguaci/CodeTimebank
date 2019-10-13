import React, { useState, useContext, Fragment, useEffect } from "react";
import AuthContext from "../Context/auth/authContext";
import AlertContext from "../Context/alert/alertContext";

function Register(props) {
  const authContext = useContext(AuthContext);
  const { register, error, clearErrors, isAuthenticated } = authContext;
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    name: "",
    password: "",
    password2: "",
    github: "",
    discord: "",
    skype: "",
    securityQuestion: "",
    securityAnswer: "",
    hirable: ""
  });
  const { name, password, password2, github, discord, skype, securityQuestion, securityAnswer, hirable } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (
      name === "" ||
      password === "" ||
      password2 === "" ||
      github === "" ||
      discord === "" ||
      skype === "" ||
      securityQuestion === "" ||
      securityAnswer === "" ||
      hirable === ""
    ) {
      setAlert("Please fill in all fields!", "danger");
    } else if (name.split("").length < 2) {
      setAlert("Username must be at least 2 characters long", "danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, password, github, discord, skype, securityQuestion, securityAnswer, hirable });
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/dashboard");
    }
    if (error === "Username taken!") {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error, isAuthenticated, props.history]);

  return (
    <Fragment>
      <div style={{marginTop: "85px"}} className='row'>
        <h1 style={{ fontSize: "2.4rem" }} className='col-md-12 text-center'>Register Below</h1>
      </div>
      <div className='row mt-3 mb-4'>
        <div className='col-md-12'>
          <h5 className='text-center'>
            <a href='/login' rel='noopener noreferrer' className="text-jgreen">
              Already registered? Click here to Login.
            </a>
          </h5>
        </div>
      </div>
      <div className='fullWidth d-flex justify-content-center'>
        <div className="loginStuff">
          <label htmlFor='Username' className='col-md-12 col-form-label text-center font-weight-bold'>
            Email:
        </label>
          <input
            type='email'
            name='name'
            className='form-control mb-4 inputStuff'
            placeholder='Enter your email'
            value={name}
            onChange={onChange}
          />
          <label htmlFor='Password' className='col-md-12 col-form-label text-center font-weight-bold'>
            Password:
        </label>
          <input
            type='password'
            name='password'
            className='form-control mb-2 inputStuff'
            placeholder='Super secret password'
            value={password}
            onChange={onChange}
          />
          <input
            type='password'
            name='password2'
            className='form-control mb-4 inputStuff'
            placeholder='Enter it again'
            value={password2}
            onChange={onChange}
          />

          <label htmlFor='securityQuestion' className='col-md-12 col-form-label text-center font-weight-bold'>
            Security Question:
          </label>

          <div className="forButton d-flex justify-content-center" style={{ width: "100%" }}>
            <select className='ml-4 mr-4 text-black dropdown-toggle form-control' onChange={onChange} name="securityQuestion" value={securityQuestion}>
              <option value="">Select a question</option>
              <option value="Favorite Number">Favorite Number</option>
              <option value="Favorite Letter">Favorite Letter</option>
            </select>
          </div>
          <label htmlFor='securityAnswer' className='col-md-12 col-form-label text-center font-weight-bold'>
            Security Answer:
        </label>
          <input
            type='text'
            name='securityAnswer'
            className='form-control mb-4 text-center inputStuff'
            value={securityAnswer}
            onChange={onChange}
          />

          <label htmlFor='hirable' className='col-md-12 col-form-label text-center font-weight-bold'>
            Looking for Employment:
        </label>
        <div className="forButton d-flex justify-content-center" style={{ width: "100%" }}>

          <select className='ml-4 mr-4 mb-4 text-black dropdown-toggle form-control' onChange={onChange} name="hirable" value={hirable}>
            <option value="">Select One</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          </div>

          <label htmlFor='Github' className='col-md-12 col-form-label text-center font-weight-bold'>
            Github Username:
        </label>
          <input
            type='text'
            name='github'
            className='form-control mb-4 inputStuff'
            placeholder='Github username'
            value={github}
            onChange={onChange}
          />
          <label htmlFor='Discord' className='col-md-12 col-form-label text-center font-weight-bold'>
            Discord Username:
        </label>
          <input
            type='text'
            name='discord'
            className='form-control mb-4 inputStuff'
            placeholder='Username#1234'
            value={discord}
            onChange={onChange}
          />
          <label htmlFor='Skype' className='col-md-12 col-form-label text-center font-weight-bold'>
            Skype Username:
        </label>
          <input
            type='text'
            name='skype'
            className='form-control inputStuff'
            placeholder='Skype Username Here'
            value={skype}
            onChange={onChange}
          />
          <div className="forButton d-flex justify-content-center mt-2" style={{ width: "100%" }}>
            <button style={{ marginBottom: "60px" }} className='btn btn-greyish mt-3' onClick={onSubmit}>
              Submit
          </button>
          </div>
        </div>
      </div>


    </Fragment>
  );
}

export default Register;