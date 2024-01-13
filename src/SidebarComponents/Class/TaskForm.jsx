import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const TaskForm = ({ number }) => {
  const { user } = useSelector((state) => state.user);
  console.log("user",user);
  const params = useParams();

  const Taskmes = () =>
    toast("Task Submited Success", {
      type: toast.TYPE.SUCCESS,
      autoClose: 1000,
    });

  const formik = useFormik({
    initialValues: {
      front: "",
      back: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.front) {
        errors.front = "Please enter frontend url";
      }

      if (!values.back) {
        errors.back = "Please enter backend url";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        //post method create new Account
        await axios.post(
          `http://127.0.0.1:8080/api/v1/task/${params.id}`,
          values,
          user._id
        );
        Taskmes();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <div className="col-xl-8 col-lg-7">
        <div class="cards  shadow mb-4 mt-3">
          <div class="card-header py-3 ps-3">
            <h2 class="class-tittle">Today Task {number}</h2>
          </div>
          <div className="task-bg">
            <form className="task-form" onSubmit={formik.handleSubmit}>
            <h1 className="text-center task-head">HTML</h1>
              <div className="row justify-content-center">
                <div className="col-8 col-lg-9 col-sm-9 col-md-9 col-xl-10">
                  <label>Frontend Deployed URL</label>
                  <input
                    type="text"
                    className="form-control"
                    name="front"
                    placeholder="Enter your frontend url"
                    value={formik.values.front}
                    onChange={formik.handleChange}
                  />
                  {formik.getFieldMeta("front").touched &&
                  formik.errors.front ? (
                    <div className="text-danger">{formik.errors.front}</div>
                  ) : null}
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-8 col-lg-9 col-sm-9 col-md-9 col-xl-10">
                  <label>Backend Deployed URL</label>
                  <input
                    type="text"
                    className="form-control"
                    name="back"
                    placeholder="Enter your backend url"
                    value={formik.values.back}
                    onChange={formik.handleChange}
                  />
                  {formik.getFieldMeta("back").touched && formik.errors.back ? (
                    <div className="text-danger">{formik.errors.back}</div>
                  ) : null}
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-8 col-lg-9 col-sm-9 col-md-9 col-xl-10">
                  <input
                    type="submit"
                    className="btn btn-primary form-btns mt-3"
                    value={"Submit"}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskForm;
