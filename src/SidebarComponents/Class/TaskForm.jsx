import axios from "axios";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../Context/userContext";

const TaskForm = ({ number, data }) => {
  const { user } = useContext(UserContext);

  const name = user.name;
  const studentId = user.id;
  const description = data.title;
  const day = number;
  const Taskmes = () =>
    toast("Task Submited Success", {
      type: toast.TYPE.SUCCESS,
      autoClose: 1000,
    });

  const formik = useFormik({
    initialValues: {
      front: "",
      back: "",
      studentId,
      day,
      name,
      description,
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
        //post method Task submit
        const taskDetail = await axios.post(
          `https://student-task-portal.onrender.com/api/v1/task`,
          values
        );
        Taskmes();
        console.log(taskDetail);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <div className="col-xl-8 col-lg-7">
        <div className="cards  shadow mb-4 mt-3">
          <div className="card-header py-3 ps-3">
            <h2 className="class-tittle">Today Task {number}</h2>
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
