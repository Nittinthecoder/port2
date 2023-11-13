import React from 'react'

const Contact = () => {
  return (
    <div 
      className='text-white p-4 max-w-3xl mx-auto '
      id='contacts'
    >
      <h1 className='text-3xl font-bold'>CONTACT US</h1>
      <p>PLEASE FILL IN THE FORM BELOW</p>
      <form className=' py-4 mr-4 border-4 border-purple-400 flex flex-col justify-center items-center gap-10 rounded-xl w-[30vw] h-[25vw]  '>
        <div className=' flex flex-col gap-2'>
          <label 
          htmlFor="fullname">Full Name</label>
          <input type="text" placeholder='Nittin Nobby Mathew' id="fullname" />
        </div>
        <div className=' flex flex-col gap-2'>
          <label htmlFor="email">Email</label>
          <input type="text" placeholder='mathewnittin182002@gmail.com' id="email" />
        </div>
        <div className=' flex flex-col gap-2'>
          <label htmlFor="Message">Message</label>
          <textarea placeholder='Type your message' id="message"></textarea>
        </div>
        <button type='submit'> Send </button>
      </form>
      <div>
        <div> ERROR MESSAGES </div>
      </div>
    </div>
  )
}

export default Contact;