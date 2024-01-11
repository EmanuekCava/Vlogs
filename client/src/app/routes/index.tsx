import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import Info from '../components/index/info/info'
import Login from '../components/index/auth/login'
import Register from '../components/index/auth/register'
import { isStorage } from '../components/private/storage';

const Index = () => {

  const [isRegister, setIsRegister] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    (() => {
      if(isStorage()) {
        navigate('/main')
      }
    })()
    
  }, [])

  return (
    <div className='container-index'>
      {
        isRegister ? (
          <Register setIsRegister={setIsRegister} />
        ) : (
          <>
            <Login setIsRegister={setIsRegister} />
            <Info />
          </>
        )
      }
    </div>
  )
}

export default Index