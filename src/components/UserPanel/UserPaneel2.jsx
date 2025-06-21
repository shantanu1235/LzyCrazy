import React from 'react'
import lzycrazy from '../../assets/lzy.png'
import './UserPanel.css'
import Signup from '../Singin/Sign'
import { MdSearch } from 'react-icons/md' // <-- Add this import
import Login from '../Login/login'

const UserPanel2 = () => {
  return (
    <div className='body'>
      <section className='main-section'>
        <div className='img-div'>
          <img src={lzycrazy} alt="" className='image-sec' />
        </div>

        <div className='search-container'>
          <MdSearch className="search-icon" />
          <input type="text" id='search' placeholder='search here' className='search-input' />
        </div>

        <div>
          <ul>
            <div> <li><a href="/about">About us </a></li></div>
            <div> <li><a href="/lazy">LazyCrazy Services</a></li></div>
            <div><li><a href="/lazy-market">LazyCrazy Marketpalce</a></li></div>
            <div><li><a href="/hire">We are Heiring</a></li>    </div>
            <div>  <li><a href="/news">LzyCrazy News</a></li> </div>
          </ul>
        </div>
      </section>
      <Login/>
    </div>
  )
}

export default UserPanel2