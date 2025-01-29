import React, { useState, useEffect } from 'react'

const Login = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 200)
  }, [])

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <div className={`transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-base">
            <p>+---------------------+</p>
            <p>|<i>--------</i><b>Login</b><i>--------</i>|</p>
            <p>|<i>---------------------</i>|</p>
            <p>| Username: <i>----------</i>|</p>
            <p>|<i>-</i><input className="text-green-400 w-[183px] border border-neutral-800 outline-none focus:outline-none px-1" type="text" /><i>-</i>|</p>
            <p>|<i>---------------------</i>|</p>
            <p>| Password: <i>----------</i>|</p>
            <p>|<i>-</i><input className="text-green-400 w-[183px] border border-neutral-800 outline-none focus:outline-none px-1" type="password" /><i>-</i>|</p>
            <p>|<i>---------------------</i>|</p>
            <p>|<i>--------</i><button><span className="hover:text-green-400 cursor-pointer">Enter</span></button><i>--------</i>|</p>
            <p>+---------------------+</p>
          </div>
          <br />
          <p>Website developed by ITGAUY</p>
        </div>
      </div>
    </>
  )
}

export default Login