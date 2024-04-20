import React from 'react'

const Signup = () => {
  return (
    <div>
        <p>Signup</p>
        <form>
            <div>
                <label htmlFor=""></label>
                <input type="text" name='name' />
            </div>
            <div>
                <label htmlFor=""></label>
                <input type="email" name='email' />
            </div>
            <div>
                <label htmlFor=""></label>
                <input type="password" name='password' />
            </div>
        </form>
    </div>
  )
}

export default Signup