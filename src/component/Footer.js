import React from "react"
import logo1 from "./pic/logo.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img src={logo1} alt='' height={100} />
          </div>
          <p>© 2023. All rights reserved by Prasuna Chandrika</p>
        </div>
      </footer>
    </>
  )
}

export default Footer