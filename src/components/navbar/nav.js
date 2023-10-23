import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import InStock from "../../asserts/check.png";

const NavbarEdited = () => {
  return (
    <div className='main-navbar'>
      <div className='nav-option active-nav-option' >
        <Link to="/dashboard">
          <div className='item-container'>
            <svg className='icon' width="32" height="32" viewBox='0 0 20 24' xmlns="http://www.w3.org/2000/svg">
              <path d="M18 15.75H19.5V19.5H18V15.75ZM15 12H16.5V19.5H15V12ZM8.25 19.5C7.2558 19.4988 6.30267 19.1033 5.59966 18.4003C4.89666 17.6973 4.50119 16.7442 4.5 15.75H6C6 16.195 6.13196 16.63 6.37919 17C6.62643 17.37 6.97783 17.6584 7.38896 17.8287C7.8001 17.999 8.2525 18.0436 8.68895 17.9568C9.12541 17.87 9.52632 17.6557 9.84099 17.341C10.1557 17.0263 10.37 16.6254 10.4568 16.189C10.5436 15.7525 10.499 15.3001 10.3287 14.889C10.1584 14.4778 9.87004 14.1264 9.50003 13.8792C9.13002 13.632 8.69501 13.5 8.25 13.5V12C9.24456 12 10.1984 12.3951 10.9017 13.0983C11.6049 13.8016 12 14.7554 12 15.75C12 16.7446 11.6049 17.6984 10.9017 18.4017C10.1984 19.1049 9.24456 19.5 8.25 19.5Z" fill="white"/>
              <path d="M21 1.5H3C2.6023 1.5004 2.221 1.65856 1.93978 1.93978C1.65856 2.221 1.5004 2.6023 1.5 3V21C1.5004 21.3977 1.65856 21.779 1.93978 22.0602C2.221 22.3414 2.6023 22.4996 3 22.5H21C21.3976 22.4994 21.7788 22.3412 22.06 22.06C22.3412 21.7788 22.4994 21.3976 22.5 21V3C22.4996 2.6023 22.3414 2.221 22.0602 1.93978C21.779 1.65856 21.3977 1.5004 21 1.5ZM21 8.25H10.5V3H21V8.25ZM9 3V8.25H3V3H9ZM3 21V9.75H21L21.0015 21H3Z" fill="white"/>
            </svg>
            <span className='nav-text'>Dashboard</span>
          </div>
        </Link>
      </div>

      <div className='nav-option active-nav-option' >
        <Link to="/inventories">
          <div className='item-container'>
            <svg className='icon' width="32" height="32" viewBox='0 0 26 28' xmlns="http://www.w3.org/2000/svg">
                <path d="M4 5.33337H9.33333V10.6667H4V5.33337ZM12 6.66671V9.33337H28V6.66671H12ZM4 13.3334H9.33333V18.6667H4V13.3334ZM12 14.6667V17.3334H28V14.6667H12ZM4 21.3334H9.33333V26.6667H4V21.3334ZM12 22.6667V25.3334H28V22.6667H12Z" fill="white"/>
            </svg>
            <span className='nav-text'>Search</span>
          </div>
        </Link>
        
      </div>

      <div className='nav-option active-nav-option' >
        <Link to="/transactions">
          <div className='item-container'>
            <svg className='icon' width="32" height="32" viewBox='0 0 26 24' xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6901 4.92188L12.356 0.328125C12.1568 0.117188 11.8867 0 11.6034 0H11.3333V6H17V5.71406C17 5.41875 16.8893 5.13281 16.6901 4.92188ZM9.91667 6.375V0H1.0625C0.473698 0 0 0.501562 0 1.125V22.875C0 23.4984 0.473698 24 1.0625 24H15.9375C16.5263 24 17 23.4984 17 22.875V7.5H10.9792C10.3948 7.5 9.91667 6.99375 9.91667 6.375ZM2.83333 3.375C2.83333 3.16781 2.99182 3 3.1875 3H6.72917C6.92484 3 7.08333 3.16781 7.08333 3.375V4.125C7.08333 4.33219 6.92484 4.5 6.72917 4.5H3.1875C2.99182 4.5 2.83333 4.33219 2.83333 4.125V3.375ZM2.83333 7.125V6.375C2.83333 6.16781 2.99182 6 3.1875 6H6.72917C6.92484 6 7.08333 6.16781 7.08333 6.375V7.125C7.08333 7.33219 6.92484 7.5 6.72917 7.5H3.1875C2.99182 7.5 2.83333 7.33219 2.83333 7.125ZM9.20833 19.4944V20.625C9.20833 20.8322 9.04984 21 8.85417 21H8.14583C7.95016 21 7.79167 20.8322 7.79167 20.625V19.4864C7.29185 19.4592 6.80576 19.2745 6.40289 18.9544C6.23023 18.817 6.22138 18.5433 6.37766 18.3853L6.89784 17.8598C7.02047 17.7361 7.20286 17.7305 7.3463 17.8256C7.51763 17.9391 7.71198 18 7.91385 18H9.15831C9.44607 18 9.6807 17.7225 9.6807 17.3817C9.6807 17.1028 9.52088 16.8572 9.29245 16.785L7.30026 16.1522C6.47727 15.8906 5.90219 15.0544 5.90219 14.1183C5.90219 12.9689 6.74555 12.0352 7.79122 12.0056V10.875C7.79122 10.6678 7.94971 10.5 8.14539 10.5H8.85372C9.0494 10.5 9.20789 10.6678 9.20789 10.875V12.0136C9.70771 12.0408 10.1938 12.225 10.5967 12.5456C10.7693 12.683 10.7782 12.9567 10.6219 13.1147L10.1017 13.6402C9.97909 13.7639 9.79669 13.7695 9.65326 13.6744C9.48193 13.5605 9.28758 13.5 9.0857 13.5H7.84125C7.55349 13.5 7.31885 13.7775 7.31885 14.1183C7.31885 14.3972 7.47867 14.6428 7.70711 14.715L9.6993 15.3478C10.5223 15.6094 11.0974 16.4456 11.0974 17.3817C11.0974 18.5316 10.254 19.4648 9.20833 19.4944Z" fill="white"/>
            </svg>

            <span className='nav-text'>Transactions</span>
          </div>

        </Link>
      </div>

      <div className='nav-option active-nav-option'>
        <Link to="/products">
          <div className='item-container'>
            <img src={InStock} alt="Last Option Icon" className="icon" />
            <span className='nav-text'>In stock</span>
          </div>
        </Link>
      </div>
      

      
    </div>
  );
}

export default NavbarEdited;
