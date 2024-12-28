import React,{useState} from 'react'

export default function Hospitality() {

  const [details,setDetails] = useState({
    guestName:'',
    email:'',
    phone:'',
    entryDate:'',
    exitDate:'',
    nOfGuests:'',
    requests:''
  })


  let [error,setErrors] = useState({});

  let collectDetails = e =>{
      setDetails({...details,[e.target.name] : e.target.value});
  }

  let submitDetails = _ =>{

    let errorDisplay = {}

    if(!/^[A-Z][a-z]{7,}$/.test(details.guestName)){
       errorDisplay.nameError = 'Invalid Username 😒'
    }

    if(!/^[A-Z][a-z]{7,}[0-9]*@gmail.com$/.test(details.email)){
      errorDisplay.emailError = 'Invalid EmailId'
   }
   
   if(!/^[0-9]{10}$/.test(details.phone)){
    errorDisplay.contactError = 'Invalid Mobile Number'
   }

   if(!/[0-9]+/.test(details.nOfGuests)){
     errorDisplay.guestsError = 'Enter number of guests Properly'
    }
    
    setErrors(errorDisplay)
    
  }

  


  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-6">Book Your Stay</h2>

          <form className="space-y-6">

            <div>
              <label htmlFor="guestName" className="block text-sm font-medium text-gray-700">Guest Name</label>
              <input type="text" id="guestName" name="guestName" required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onKeyUp={collectDetails} />
              {error.nameError && (<p className='text-red-500 text-sm'>{error.nameError}</p>)}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" name="email" required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onKeyUp={collectDetails} />
                {error.emailError && (<p className='text-red-500 text-sm'>{error.emailError}</p>)}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" id="phone" name="phone" required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onKeyUp={collectDetails} />
                {error.contactError && (<p className='text-red-500 text-sm'>{error.contactError}</p>)}
            </div>

            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
              <div>
                <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700">Check-In Date</label>
                <input type="date" id="checkIn" name="entryDate" required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onKeyUp={collectDetails} />
              </div>
              <div>
                <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700">Check-Out Date</label>
                <input type="date" id="checkOut" name="exitDate" required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onKeyUp={collectDetails} />
              </div>
            </div>

            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Number of Guests</label>
              <input type="number" id="guests" name="nOfGuests" min="1" max="10" required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onKeyUp={collectDetails} />
                {error.guestsError && (<p className='text-red-500 text-sm'>{error.guestsError}</p>)}
            </div>

            <div>
              <label htmlFor="requests" className="block text-sm font-medium text-gray-700">Special Requests</label>
              <textarea id="requests" name="requests" rows="3"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            </div>

            <div>
              <button type="submit"
                className="w-full flex justify-center bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-sm font-medium" onClick={submitDetails}>
                Book Now
              </button>
            </div>
          </form>

        </div>
      </div>

    </div>
  )
}
