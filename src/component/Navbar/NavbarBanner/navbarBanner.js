import React from 'react'
import './navbarBanner.css';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AutoAwesomeSharpIcon from '@mui/icons-material/AutoAwesomeSharp';
import { Link } from 'react-router-dom';

const NavbarBanner = () => {
    return (
    <div className='navbarBanner'>
        <Link to="/" className='HomeBanner' style={{ textDecoration: 'none', color: 'inherit' }}>
            <HomeIcon className='HomeIcon' />
            <span className='HomeBannerText'>Home</span>
        </Link>
        <Link to="/ecobot" className='EcoBotBanner' style={{ textDecoration: 'none', color: 'inherit' }}>
            <AutoAwesomeSharpIcon className='EcoBotIcon' />
            <span className='EcoBotText'>EcoBot</span>
        </Link>
        <div className='wishlistBanner'>
            <FavoriteIcon className='wishlistIcon' />
            <span className='wishlistBannerText'>Wishlist</span>
        </div>
        <div className='cartBanner'>
            <ShoppingCartIcon className='cartIcon' />
            <span className='wishlistBannerText'>cart</span>
        </div>
        <div className='accountBanner'>
            <AccountCircleIcon className='accountIcon' />
            <span className='accountBannerText'>Account</span>
        </div>
    </div>
    )
}

export default NavbarBanner
