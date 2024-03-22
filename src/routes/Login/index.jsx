import React from 'react'
import sweetrack from "../Login/SweeTrack.png"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
  const [ id , setId ] = useState('')
  const [ password , setPassword ] = useState('')
  const navigate = useNavigate()

  const handlelogin = (e) => {
    e.preventDefault()
    if(id === 'zuhra' && password === '1234'){
      navigate('/home')
    }
    else{
      alert('wrong id or password')
    }
  }

  return (
    <>
      <div className='login__container'>
        <img src={sweetrack} alt="" />
        <form className='login' onSubmit={(e) => handlelogin(e)}>
          <input type="text" placeholder='id:' value={id} onChange={e => setId(e.target.value)} />
          <input type="password" placeholder='password:' value={password} onChange={e => setPassword(e.target.value)} />
          <button className='btn' type='submit'>Log in</button>
        </form>
      </div>
    </>
  )
}

export default Login