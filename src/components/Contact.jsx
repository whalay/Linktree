import React from "react";
import useInput from "../hooks/user-input";
import { useState } from "react";

const Contact = (props) => {
const [successMsg, setSuccessMsg] = useState("")



  const {
    value: enteredFname,
    isValid: enteredFnameIsValid,
    hasError: FnameHasError,
    valueChangeHandler: FnameChangedHandler,
    inputBlurHandler: FnameBlurHandler,
    reset: resetFname,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLname,
    isValid: enteredLnameIsValid,
    hasError: LnameHasError,
    valueChangeHandler: LnameChangedHandler,
    inputBlurHandler: LnameBlurHandler,
    reset: resetLname,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredFnameIsValid && enteredLnameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
    formIsValid = true;
  }

 const successHandler = () => {
  setSuccessMsg("Your form have been submitted successfully");
 }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    successHandler();

    resetFname();
    resetLname();
    resetEmail();
    resetMessage();
  };

  return (
    <div className="flex flex-col md:justify-center items-center  md:w-screen h-screen  px-3">
      <div className="mt-10 md:mt-0">
        <div className="pb-6">
         <p className="text-xl md:text-2xl text-green-400 text-center font-semibold">{successMsg }</p> 
          <h1 className="text-2xl font-bold  py-2">Contact Me</h1>
          <p className="">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>
        <form
          onSubmit={submitHandler}
          className="md:w-full md:max-w-lg flex flex-col "
        >
          <div className="flex justify-start  flex-wrap -mx-3 md:mb-3">
            <div className="w-full md:w-1/2 px-3  md:mb-0">
              <label htmlFor="first_name" className=" block tracking-wide mb-2">
                First name
              </label>
              <input
                onChange={FnameChangedHandler}
                onBlur={FnameBlurHandler}
                value={enteredFname}
                type="text"
                id="first_name"
                placeholder="Enter your first name"
                className={`block w-full  border   px-2 py-1 mb-3 leading-tight rounded-md ${
                  FnameHasError ? "border-red-500" : "border-gray-300"
                }`}
              />
              {FnameHasError && (
                <p className="text-red-600">Please input your First name</p>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3  ">
              <label htmlFor="last_name" className=" block  tracking-wide mb-2">
                Last name
              </label>
              <input
                onChange={LnameChangedHandler}
                onBlur={LnameBlurHandler}
                value={enteredLname}
                type="text"
                id="last_name"
                placeholder="Enter your first name"
                className={`block w-full  border   px-2 py-1 mb-3 leading-tight rounded-md ${
                  LnameHasError ? "border-red-500" : "border-gray-300"
                }`}
              />
              {LnameHasError && (
                <p className="text-red-600">Please input your Last name</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label htmlFor="email" className="block tracking-wide mb-2">
                Email
              </label>
              <input
                onChange={emailChangedHandler}
                onBlur={emailBlurHandler}
                value={enteredEmail}
                type="email"
                id="email"
                placeholder="yourname@gmail.com"
                className={`block w-full  border   px-2 py-1 mb-3 leading-tight rounded-md ${
                  emailHasError ? "border-red-500" : "border-gray-300"
                }`}
              />
              {emailHasError && (
                <p className="text-red-600">Please input your Email Address</p>
              )}
            </div>
          </div>
          <label htmlFor="message" className="block tracking-wide mb-2">
            Message
          </label>
          <textarea
            onChange={messageChangedHandler}
            onBlur={messageBlurHandler}
            value={enteredMessage}
            name="message"
            id="message"
            rows="3"
            placeholder="Send me a message and i'll reply you as soon as possible"
            className={`px-2 py-1 mb-3 border  rounded-lg ${messageHasError ? 'border-red-500' :'border-gray-300'}`}
          ></textarea>
          {messageHasError && (
            <p className="text-red-600">Please enter a message</p>
          )}
          <div className="w-full mb-3">
            <label className="" htmlFor=""></label>
            <input type="checkbox" name="" id="" className="mr-3" />
            <span className="">
              You agree to providing your data to Soliu Yusuf who may contact you.
            </span>
          </div>

          <div className="w-full py-3">
            <button
              className={`bg-blue-700 text-white w-full py-2 rounded-lg ${!formIsValid ? ' cursor-not-allowed focus:outline-none disabled:opacity-50' : 'opacity-100'}` }
              disabled={!formIsValid}
              id="btn__submit"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
