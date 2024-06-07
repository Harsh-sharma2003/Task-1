import React from 'react'
import './Firstbody.css'

export const Firstbody = () => {
  return (
    <div className="Firstbody-box">
      <div className="Firstbody-left">
        <h1 className="Firstbody-textone">Revolutionizing Study <br /> Space Management </h1>
        <p className="Firstbody-texttwo">Empowering students and study centers alike,<br /> ScholarSpace is the ultimate tool for seamless study <br /> space operations.</p>
        <br />
        <br />
        <div className="Firstbody-login">
          <button>Call on 7427077197 for Demo:</button>
        </div>
      </div>

      <div className="Firstbody-logo">
        <img src='https://scholarspace.in/SSL_files/newproductportfolio.png' alt='' />
      </div>

      <div className="wave-container">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </div>
  )
}
