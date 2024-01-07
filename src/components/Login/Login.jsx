import React from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import axios from 'axios';

const Login = () => {

    const navigate = useNavigate();

    const closemeg = () =>
      toast("Login Success", {
        type: toast.TYPE.SUCCESS,
        autoClose: 1000,
      });
  
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validate: (values) => {
        let errors = {};
  
        if (!values.email) {
          errors.email = "Please enter email";
        }
  
        if (!values.password) {
          errors.password = "Please enter password";
        }
  
        return errors;
      },
      onSubmit: async (values) => {
        try {
          //post method create new Account
          let res = await axios.post(
            "http://127.0.0.1:8080/api/v1/login",
            values
          );
          localStorage.setItem("token", res.data.token);
          navigate("/portal/dashboard");
          closemeg();
        } catch (error) {
          console.log(error);
        }
      },
    });


  return (
    <>
      <div className="login-container ">
        <form className="login-form-container  " onSubmit={formik.handleSubmit}>
          <h1 className='text-center form-heading'>Login</h1>

          <div className="row justify-content-center">
            <div className="col-8 col-lg-9 col-sm-9 col-md-9 col-xl-10">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter yor email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.getFieldMeta("email").touched && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-8 col-lg-9 col-sm-9 col-md-9 col-xl-10">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                name="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.getFieldMeta("password").touched &&
              formik.errors.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-8 col-lg-9 col-sm-9 col-md-9 col-xl-10">
              <Link className="btn forgot mt-3" to="/forgot/password">
                Forgot Password ?
              </Link>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-8 col-lg-9 col-sm-9 col-md-9 col-xl-10">
              <input
                type="submit"
                className="btn btn-primary form-btns mt-3"
                value={"Login"}
              />
            </div>
            <div className="col-8 col-lg-9 col-sm-9 col-md-9 col-xl-10">
              <p className="no-account mt-2">Don't have an account ? Click Register</p>
              <Link className="btn btn-primary form-btns mb-3" to="/register">
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login