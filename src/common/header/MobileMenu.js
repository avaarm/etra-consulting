import React, { useEffect } from 'react';
import Logo from "../../elements/logo/Logo";
import Nav from './Nav';
import { FiX } from "react-icons/fi";

const MobileMenu = ({show, onClose}) => {
    useEffect(() => {
        const subMenuToggler = (e) => {
            const parent = e.target.parentElement;
            if (parent.classList.contains('has-droupdown') || parent.classList.contains('with-megamenu')) {
                e.preventDefault();
                const subMenu = parent.querySelector('.submenu, .rn-megamenu');
                if (subMenu) {
                    subMenu.classList.toggle('active');
                    e.target.classList.toggle('open');
                }
            }
        };

        const menuContainer = document.querySelector('.popup-mobile-menu');
        menuContainer.addEventListener('click', subMenuToggler);

        return () => {
            menuContainer.removeEventListener('click', subMenuToggler);
        };
    }, []);

    return (
        <div className={`popup-mobile-menu ${show ? "active": ""}`}>
            <div className="inner">
                <div className="header-top">
                    <Logo 
                        image={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                        image2={`${process.env.PUBLIC_URL}/images/logo/logo-dark.png`}
                    />
                    <div className="close-menu">
                        <span className="close-button" onClick={onClose}><FiX /></span>
                    </div>
                </div>
                <Nav />
            </div>
        </div>
    )
}
export default MobileMenu;