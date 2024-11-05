import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
// import { object, ObjectSchema, string } from "yup";

const FormikPractice = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Is required"),
    email: Yup.string().required("Is required").email("invalid email"),
    password: Yup.string()
      .required("Is required")
      .min(5, "Is less then 5")
      .max(8, "is not more then 8"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(">>>>>", values);
    },
    validationSchema,
    // validate: (values) => {
    //   let errors = {};
    //   if (!values.name) {
    //     errors.name = "Name is Required";
    //   }
    //   if (!values.email) {
    //     errors.email = "Email is Required";
    //   } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)) {
    //     errors.email = "Email is not valid";
    //   }

    //   if (!values.password) {
    //     errors.password = "Password is Required";
    //   } else if (
    //     !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(
    //       values.password
    //     )
    //   ) {
    //     errors.password = "password is not valid";
    //   }
    //   return errors;
    // },
  });

  console.log("visited fields>>>>>", formik.touched);
  return (
    <div className="space-y-3">
      <h1>Formik Practice</h1>
      <div className="p-5 space-y-2 border rounded-md">
        <form className="space-y-2" onSubmit={formik.handleSubmit}>
          <div className="flex items-center gap-3">
            <label htmlFor="name" className="w-16">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="p-1 border rounded focus:outline-dotted focus:outline-red-400 "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </div>
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-700">{formik.errors.name}</div>
          ) : null}
          <div className="flex items-center gap-3">
            <label htmlFor="email" className="w-16">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="p-1 border rounded focus:outline-dotted focus:outline-red-400  "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-700">{formik.errors.email}</div>
          ) : null}
          <div className="flex items-center gap-3">
            <label htmlFor="password" className="w-16">
              password:
            </label>
            <input
              type="text"
              id="password"
              name="password"
              className="p-1 border rounded focus:outline-dotted focus:outline-red-400  "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-700">{formik.errors.password}</div>
          ) : null}
          <div className="w-full flex justify-center">
            <button
              className="mx-auto bg-red-500 text-slate-50 rounded py-1 px-4 cursor-pointer hover:bg-red-700"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormikPractice;
