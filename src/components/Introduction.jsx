import React from 'react'

const Introduction = () => {
  return (
    <figure className='flex flex-col w-[50%] border-4 rounded-md px-3 py-2'>
        <article>
            <div className='display-flex mb-4  h-fit'>
            <h1 className='text-2xl font-bold'>Dilip Dandi</h1>
            <h3 className='text-xl font-semibold'>Software Engineer</h3>
            </div>
            <div className='flex flex-col items-start justify-center gap-2'>
                <p className='font-semibold'>
                 - Frontend Developer with passion for UI/UX design & frontend development.
                </p>
                <p className='font-semibold'>
                - Seeking opportunity in Frontend development & UI/UX designing.
                </p>
                <p className='font-semibold'>
                - I have hands on expeirence in developing web applications and websites using reactJS and vanilla JS.
                </p>
              <p className='font-semibold'>
              - For more information, you can contact me.
              </p>
            </div>
        </article>
    </figure>
  )
}

export default Introduction
