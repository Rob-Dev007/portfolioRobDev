import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BurguerBtn from "./burguerButton";

const Header = ()=>{

    const [ clicked, setClicked ] = useState(false);
    const [ prevScroll, setPrevScroll ] = useState(window.scrollY);
    const [ visible, setVisible ] = useState(true);

    const handleClick = ()=>{
    setClicked(!clicked)
    }

    useEffect(()=>{
        const handleScroll = ()=>{
            const currentScroll = window.scrollY;
            setVisible(prevScroll > currentScroll || currentScroll === 0);
            setPrevScroll(currentScroll);
        }

        window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    },[prevScroll, visible])


    return(
        <div className={`${visible ? 'navbar' : 'navbar-hidden'}`}>
            <div>
                <Link to={'/'}>
                    <p className="text-white font-bold">K&A Cell</p>
                </Link>
            </div>
            <nav>
                <ul className={`md:justify-end md:mt-0  md:flex links ${clicked ? 'link-active' : '' }`}>
                    <Link className="link" to={'/'}>Inicio</Link>
                    <Link className="link" to={'/servicios'}>Servicios</Link>
                    <Link className="link" to={'/blog'}>Blog</Link>
                    <Link className='button-contactar' to={'/contactanos'}>Contactos</Link>
                </ul>
            </nav>
            <div className="menu-mobile">
                <BurguerBtn 
                clicked= { clicked }
                handleClick={ handleClick }
                />
            </div>
            <div className={`hidden-menu ${clicked ? 'link-active' : ''}`}></div>
        </div> 
    )

};

export default Header;