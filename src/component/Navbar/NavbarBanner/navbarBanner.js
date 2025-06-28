import React from 'react'
import './navbarBanner.css';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AutoAwesomeSharpIcon from '@mui/icons-material/AutoAwesomeSharp';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavbarBanner = () => {
    const { user, setShowAuthModal } = useAuth();

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
            <Link to="/rent" className='RentBanner' style={{ textDecoration: 'none', color: 'inherit' }}>
                <BedroomParentIcon className='RentIcon' />
                <span className='RentBannerText'>Rent</span>
            </Link>
            <Link to="/wishlist" className='wishlistBanner' style={{ textDecoration: 'none', color: 'inherit' }}>
                <FavoriteIcon className='wishlistIcon' />
                <span className='wishlistBannerText'>Wishlist</span>
            </Link>
            <Link to="/cart" className='cartBanner' style={{ textDecoration: 'none', color: 'inherit' }}>
                <ShoppingCartIcon className='cartIcon' />
                <span className='wishlistBannerText'>Cart</span>
            </Link>
            {!user ? (
                <button
                    className="authBannerBtn"
                    onClick={() => setShowAuthModal(true)}
                >
                    Sign In / Sign Up
                </button>
            ) : (
                <Link to="/account" className="accountBanner" style={{ textDecoration: 'none', color: 'inherit' }}>
                    {/* You can use an icon or image here */}
                    <AccountCircleIcon className='accountIcon' /> 
                    <span className='accountBannerText'>Account</span>
                </Link>
            )}
        </div>
    )
}

export default NavbarBanner