import { useState } from "react";

export default function SignUp() {

  // form state variables

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    cPassword: '',
  });


  // Error state variables

  const [error, setError] = useState({})



  function handleInputChanges(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value })

  }

  //  console.log(userData);

  function validate(e) {
    let errorMessages = {}

    if (!/^[A-Z][a-z]{4,10}$/.test(userData.firstName)) {
      errorMessages.firstName = 'Invalid firstName';
    }

    if (!/^[A-z][a-z]{4,10}$/.test(userData.lastName)) {
      errorMessages.lastName = 'Invalid lastName'
    }

    if (!/^[A-Z][a-z]{7,11}[0-9]\W/.test(userData.password)) {
      errorMessages.password = 'Invalid password'
    }

    if (userData.password !== userData.cPassword) {
      errorMessages.cPassword = 'Passwords are not matched'

    }

    return errorMessages;

  }


  function handleSubmit(e) {
    e.preventDefault()
    let errors = validate()
    if (Object.keys(errors).length === 0) {
      console.log(userData);

    }
    setError(errors);

  }





  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="mb-2 text-sm font-medium text-gray-900">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"

              autoComplete="text"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              onChange={handleInputChanges}
            />
            {/* CONDITIONAL RENDERING */}
            {
              error.firstName && (<p className="text-red-500 text-sm">{error.firstName}</p>)
            }
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastName" className="mb-2 text-sm font-medium text-gray-900">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"

              autoComplete="text"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              onChange={handleInputChanges}
            />
            {error.lastName && (<p className="text-red-500 text-sm">{error.lastName}</p>)}
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"

              autoComplete="current-password"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              onChange={handleInputChanges}
            />
            {error.password ? <p className="text-red-500 text-sm">{error.password}</p> : <></>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="cPassword" className="mb-2 text-sm font-medium text-gray-900">
              Confirm Password
            </label>
            <input
              id="cPassword"
              name="cPassword"
              type="password"

              autoComplete="current-password"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              onChange={handleInputChanges}
            />
            {error.cPassword && (<p className="text-red-500 text-sm">{error.cPassword}</p>)}
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}



// create a form

// collect the details from user

// declare state variables


