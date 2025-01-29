import React, { useState, useEffect } from 'react'
import Container from '../components/Container'
import TerminalButton from '../components/Button'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 200)
  }, [])

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <div
          className={`transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <Container blocks={[
            { texts: ["Welcome to TermiHub"], align: "center" },
            { texts: ["Website is still under construction..."], align: "left" }
          ]} />
        </div>
        <div className={`animate-pulse ${isVisible ? 'block' : 'hidden'}`}>
          <TerminalButton text="Go To Login >" onClick={() => navigate('/login')} />
        </div>
      </div>
    </>
  )
}

export default Home