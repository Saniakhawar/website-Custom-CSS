import React from 'react'

const page = () => {
  return (
    <div>
        <section className='contact-form'>
            <h2 className='fade-in'>Contact Us</h2>
            <form>
                <input type="text" placeholder='Full Name' required/>
                <input type="email" placeholder='Email' required/>
                <input type="text" placeholder='Phone number' />
                <textarea placeholder='Message' rows={5} required></textarea>
                <button type='submit'>Submit</button>
            </form>
        </section>
    </div>
  )
}

export default page