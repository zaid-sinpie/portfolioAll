import React from 'react'

const Contact = () => {
  return (
    <form className='flex flex-col items-center justify-center mb-4 border-2 rounded-md px-4 py-4' action="#">
        <h1 className='uppercase text-2xl font-bold text-[#c4ea2e]'>Contact Me</h1>
        <div className='flex flex-col text-xl mb-4 gap-2 text-[#c4ea2e]'>
            <label htmlFor="name">Name</label>
            <input className='rounded text-[#343333] outline-none' type="text" id='name'name='name' required />
        </div>
        <div className='flex flex-col text-xl mb-4 gap-2 text-[#c4ea2e]'>
            <label htmlFor="email">Email</label>
            <input className='rounded text-[#343333] outline-none' type="email" id='email' name='email' required />
        </div>
        <div className='flex flex-col mb-4 text-xl w-full gap-2 text-[#c4ea2e]'>
            <label htmlFor="message">Message</label>
            <textarea className='rounded-md text-[#343333] outline-none' cols={"20"} name="message" id="message"></textarea>
        </div>
        <button className=' bg-[#dfb11c] px-2 py-2 rounded w-full'>Submit</button>
    </form>
  )
}

export default Contact
