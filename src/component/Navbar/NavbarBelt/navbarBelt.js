import React from 'react';
import './navbarBelt.css';
import ecofurnishlogo from '../../../assets/ecofurnishlogo.png';

const NavbarBelt = () => {
    return (
    <div className='navbarBelt'>
        <img className='ecofurnishlogoNavbar' src={ecofurnishlogo} alt='ecofurnish logo' />
        <span className='ecofurnishtextNavbar'>EcoFurnish</span>

    </div>
    )
}

export default NavbarBelt