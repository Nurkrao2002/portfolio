import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <>
        <nav className='navbar1'>
            <ul className='navbarultag'>
                <li className='navbarulli'>
                    <a className='navbara' href='#Intro'>Home</a>
                </li>
                <li className='navbarulli'>
                    <a className='navbara' href='#About'>About</a>
                </li>
                <li className='navbarulli'>
                    <a className='navbara' href='#Education'>Education</a>
                </li>
                <li className='navbarulli'>
                    <a className='navbara' href='#Skills'>Skills</a>
                </li>
                <li className='navbarulli'>
                    <a className='navbara' href='#Services'>Services</a>
                </li>
                <li className='navbarulli'>
                    <a className='navbara' href='#Contact'>Contact Us</a>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Header