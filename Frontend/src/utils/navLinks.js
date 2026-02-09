import { Link } from "react-scroll";

const NavLink = ({children, offset, to})=>{
    return(
        <Link 
            to={to}
            activeClass='active'
            smooth={true}
            spy={true}
            offset={!offset}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
        >
            { children }
        </Link>
    )
}

export default NavLink; 