import React, { useState } from 'react'

const Login = ({ handleLogin, handleCreateAccount }) => {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()

    if (isCreatingAccount) {
      const result = handleCreateAccount(firstName, email, password)

      if (result) {
        setMessage(result)
        return
      }

      setFirstName('')
    } else {
      handleLogin(email.trim().toLowerCase(), password)
    }

    setEmail('')
    setPassword('')
    setMessage('')
  }

  const switchForm = () => {
    setIsCreatingAccount(!isCreatingAccount)
    setMessage('')
  }

  return (
    <div className='flex min-h-screen w-screen items-center justify-center px-4'>
      <div className='w-full max-w-lg rounded-2xl border-2 border-emerald-600 p-8 sm:p-12'>
        <h1 className='mb-6 text-center text-2xl font-semibold text-white'>
          {isCreatingAccount ? 'Create your account' : 'Welcome back'}
        </h1>

        <form
          onSubmit={submitHandler}
          className='flex flex-col items-center justify-center'
        >
          {isCreatingAccount && (
            <input
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
              className='w-full rounded-full border-2 border-emerald-600 bg-transparent px-5 py-3 text-xl text-white outline-none placeholder:text-gray-400'
              type='text'
              placeholder='Enter your name'
              autoComplete='name'
            />
          )}

          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className='mt-4 w-full rounded-full border-2 border-emerald-600 bg-transparent px-5 py-3 text-xl text-white outline-none placeholder:text-gray-400'
            type='email'
            placeholder='Enter your email'
            autoComplete='email'
          />

          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className='mt-4 w-full rounded-full border-2 border-emerald-600 bg-transparent px-5 py-3 text-xl text-white outline-none placeholder:text-gray-400'
            type='password'
            placeholder='Enter your password'
            autoComplete={isCreatingAccount ? 'new-password' : 'current-password'}
          />

          <div className='mt-6 flex w-full flex-col gap-3 sm:flex-row'>
            <button
              type='submit'
              className='w-full rounded-full bg-emerald-600 px-6 py-3 text-lg font-semibold text-white hover:bg-emerald-700'
            >
              {isCreatingAccount ? 'Create Account' : 'Login'}
            </button>

            <button
              type='button'
              onClick={switchForm}
              className='w-full rounded-full border border-emerald-600 px-6 py-3 text-lg font-semibold text-emerald-400 hover:bg-emerald-600 hover:text-white'
            >
              {isCreatingAccount ? 'Back to Login' : 'Create Account'}
            </button>
          </div>
        </form>

        {message && (
          <p className='mt-4 text-center text-sm text-red-300' role='alert'>
            {message}
          </p>
        )}
      </div>
    </div>
  )
}

export default Login
