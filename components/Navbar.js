import { NavLink } from "react-router-dom"


export const Navbar = () => {
    return(
        <div className='b-navbar o-flex o-gap4'>
            <div className='l-navbar__left o-flex-hsa'>
                <h1 className='e-navbar__logo'>Navbar</h1>
                <ul className='e-navbar__list o-flex-hsa o-gap1 o-ul--reset'>
                    <li>MEN</li>
                    <li>WOMEN</li>
                    <li>KIDS</li>
                    <li>HOME & LIVING</li>
                    <li>BEAUTY</li>
                </ul>
            </div>
            
            <div className='l-navbar__right o-flex-hsa o-gap1'>
                <div className='e-navbar__search o-flex-hsa'>
                    <img className='e-navbar__search-icon' src='./icons/search.svg' alt=''/>
                    <input className='e-navbar__input' type='text'/>
                </div>
                <div className='e-navbar__menu o-flex-hsa'>
                    <NavLink to='/signin'>
                        <img className='e-navbar__icon' src='./icons/profile.svg' alt=''/>
                    </NavLink>
                    <img className='e-navbar__icon' src='./icons/wishlist.svg' alt=''/>
                    <img className='e-navbar__icon' src='./icons/bag.svg' alt=''/>
                </div>                
            </div>
        </div>
    )
}