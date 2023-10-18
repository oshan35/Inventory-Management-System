import React from 'react'
import { Link } from 'react-router-dom';
import './adminHedder.css'

const AdminPageHedder = () => {
    return(
        <>
            <div className='hedder'>
                <div className='nav-icon'>
                    <svg className='hedder-icon'>
                        <path d="M26 10H6" stroke="#605DEC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 16H6" stroke="#605DEC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18 22H6" stroke="#605DEC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className='name'>
                    <span className='company-name'>InventoSync Admin Panal</span>
                </div>
            </div>
        </>
    );
}

export default AdminPageHedder;