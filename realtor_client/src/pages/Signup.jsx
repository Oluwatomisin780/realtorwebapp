import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { IoLogoGoogle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Your email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  return (
    <React.Fragment>
      <Header />
      <section className="w-full h-[100vh] flex flex-col justify-center items-center md:px-0 px-5 bg-gray-100">
        <div className="shadow-[0px_8px_16px_#D0D2D5] bg-white py-8 px-10 rounded-xl">
         
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={loginSchema}
          >
            {({
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              values,
            }) => (
              <Form onSubmit={handleSubmit}>
                <button
                  type="button"
                  className="w-full text-white bg-blue-600 mb-6 border-0 py-3 px-8 focus:outline-none rounded lg:text-lg text-base"
                  // onClick={() => signIn('google')}
                >
                  <IoLogoGoogle
                    size={30}
                    className="absolute mx-auto pr-2 my-auto"
                  />
                  SignUp with Google
                </button>
                <div className="flex">
                  <hr className="relative top-3 w-[20%]" />
                  <span className="mx-auto">or continue with email</span>
                  <hr className="relative top-3 w-[20%]" />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-10 text-lg text-black"
                  >
                    Email
                  </label>
                  <Field
                    type="text"
                    id="full-name"
                    name="email"
                    values={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter your email here"
                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-[#287CCD] rounded border border-gray-600 focus:border-[#287CCD] text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errors.email && touched.email ? (
                    <div className="text-xs text-[red] mt-2">
                      {errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-10 text-lg text-black"
                  >
                    Password
                  </label>
                  <Field
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    values={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter your password here"
                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-[#287CCD] rounded border border-gray-600 focus:border-[#287CCD] text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <div
                    className="absolute top-11 right-0 px-3 py-2 cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <BsEye size={20} />
                    ) : (
                      <BsEyeSlash size={20} />
                    )}
                  </div>
                  {errors.password && touched.password ? (
                    <div className="text-xs text-[red] mt-2">
                      {errors.password}
                    </div>
                  ) : null}
                  
                </div>
                <button
                  type="submit"
                  className="w-full mb-3 text-white bg-[#287CCD] border-0 py-2 px-8 focus:outline-none hover:bg-[#287CCD] rounded text-lg"
                >
                  SignUp
                </button>
                <p className="text-center text-xs text-black mb-4">
                  By continuing, you agree to Ogidi Brown's{' '}
                  <Link to="/" className="text-[#287CCD]">
                    Terms and Conditions
                  </Link>{' '}
                  and{' '}
                  <Link to="/" className="text-[#287CCD]">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <p className="text-center text-xs text-black">
                  Already have an account?{' '}
                  <Link
                   to="/login"
                    className="text-center text-xs text-[##287CCD]"
                  >
                    Login
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Signup;
