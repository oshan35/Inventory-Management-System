import React from 'react';
import './admin-nav.css';
import { Link } from 'react-router-dom';

const AdminNavBar = () => {
  return (
    <div className='main-navbar'>
      <Link to="/admin">
        <div className='nav-option active-nav-option' href="#">
          <svg className='icon' width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 15.75H19.5V19.5H18V15.75ZM15 12H16.5V19.5H15V12ZM8.25 19.5C7.2558 19.4988 6.30267 19.1033 5.59966 18.4003C4.89666 17.6973 4.50119 16.7442 4.5 15.75H6C6 16.195 6.13196 16.63 6.37919 17C6.62643 17.37 6.97783 17.6584 7.38896 17.8287C7.8001 17.999 8.2525 18.0436 8.68895 17.9568C9.12541 17.87 9.52632 17.6557 9.84099 17.341C10.1557 17.0263 10.37 16.6254 10.4568 16.189C10.5436 15.7525 10.499 15.3001 10.3287 14.889C10.1584 14.4778 9.87004 14.1264 9.50003 13.8792C9.13002 13.632 8.69501 13.5 8.25 13.5V12C9.24456 12 10.1984 12.3951 10.9017 13.0983C11.6049 13.8016 12 14.7554 12 15.75C12 16.7446 11.6049 17.6984 10.9017 18.4017C10.1984 19.1049 9.24456 19.5 8.25 19.5Z" fill="white"/>
            <path d="M21 1.5H3C2.6023 1.5004 2.221 1.65856 1.93978 1.93978C1.65856 2.221 1.5004 2.6023 1.5 3V21C1.5004 21.3977 1.65856 21.779 1.93978 22.0602C2.221 22.3414 2.6023 22.4996 3 22.5H21C21.3976 22.4994 21.7788 22.3412 22.06 22.06C22.3412 21.7788 22.4994 21.3976 22.5 21V3C22.4996 2.6023 22.3414 2.221 22.0602 1.93978C21.779 1.65856 21.3977 1.5004 21 1.5ZM21 8.25H10.5V3H21V8.25ZM9 3V8.25H3V3H9ZM3 21V9.75H21L21.0015 21H3Z" fill="white"/>
          </svg>
          <span className='nav-text'>User List</span>
        </div>
      </Link>

      <Link to={"/add-inventory"}>
        <div className='nav-option active-nav-option' href="#">
          <svg className='icon' width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 5.33337H9.33333V10.6667H4V5.33337ZM12 6.66671V9.33337H28V6.66671H12ZM4 13.3334H9.33333V18.6667H4V13.3334ZM12 14.6667V17.3334H28V14.6667H12ZM4 21.3334H9.33333V26.6667H4V21.3334ZM12 22.6667V25.3334H28V22.6667H12Z" fill="white"/>
          </svg>
          <span className='nav-text'>Add</span>
        </div>
      </Link>
      
    </div>
  );
}

export default AdminNavBar;
