import React from 'react'
import "./Header.css"

const Header = ({fun}) => {
  return (
    <header>
        <div className='logo-div'>
            <img src='https://media.licdn.com/dms/image/C560BAQGuaOKqrv080A/company-logo_200_200/0/1668497687688?e=2147483647&v=beta&t=EdBkr2SYrhi2V9UOztBXJ6ihnIvYjey00Goh1oCe0oU' alt='Helivers-Logo' className='logo'/>
        </div>
        <nav className='navbar'>
            <input type='text' placeholder='Search...' className='Search_Input' onChange={fun}/>
        </nav>
    </header>
  )
}

export default Header