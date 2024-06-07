import React from 'react'
import { Firstbody } from '../components/Firstbody/Firstbody'
import { Secondbody } from '../components/Secondbody/Secondbody'
import { Thirdbody } from '../components/Thirdbody/Thirdbody'
import Footer from '../components/Footer/Footer'
import './Home.css'

export const Home = () => {
  return (
    <div>
        <Firstbody/>
        <Secondbody/>
        <Thirdbody/>
        <Footer/>
        <div className="footer-last">
        <div>© Copyright 2024. All Rights Reserved by Cryptics India Group</div>
        <div>
            <a href="#" className="footer-last-a">Terms</a> 
            <a href="#" className="footer-last-b">Privacy</a>
        </div>
    </div>
    </div>
  )
}
