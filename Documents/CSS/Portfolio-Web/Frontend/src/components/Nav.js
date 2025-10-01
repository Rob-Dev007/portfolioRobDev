//import icons
import {BiHomeAlt, BiUser} from "react-icons/bi"
import {BsClipboardData, BsBriefcase, BsChatSquare, BsBook, BsFileCode} from "react-icons/bs"

//import link
import NavLink from "../utils/navLinks";

const Nav = () => {
  return ( 
  <>
          <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
            <div className='container mx-auto'>
              <div className='w-full bg-black/80 flex justify-between h-[71px] md:h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 text-2xl text-white/50 items-center'>
                <NavLink
                  to={"home"}
                  offset={-200}
                >
                    <BiHomeAlt />
                </NavLink>
                <NavLink 
                  to={"about"}>
                  <BiUser />
                </NavLink>
                <NavLink 
                  to={"services"}
                >
                  <BsClipboardData />
                </NavLink>
                <NavLink
                  to={"work"}
                >
                  <BsBriefcase />
                </NavLink>
                <NavLink
                  to={"certificados"}
                >
                  <BsBook />
                </NavLink>
                <NavLink 
                  to={"skills"}
                >
                  <BsFileCode />
                </NavLink>
                <NavLink
                  to={"contact"}
                >
                  <BsChatSquare />
                </NavLink>
              </div>
            </div>
          </nav>
  </>
  )
};

export default Nav;
