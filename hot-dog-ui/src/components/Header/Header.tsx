import React, { ReactElement } from 'react'
import Logo from '../../assets/dandao_logo.svg'
import { Text } from './style'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
interface HeaderProps {
  children: React.ReactElement
}

const Header = ({ children, ...rest }: HeaderProps): ReactElement => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="navbar bg-bgPrimary">
        <div className="navbar-start">
          <div className='flex flex-col'>
            <img src={Logo} className="h-16 w-44 object-contain" />
            <Text>HOTDOG DO DANDÃO</Text>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal p-0">
            <li onClick={() => navigate('/')}><Text>QUEM FAZ?</Text></li>
            <li onClick={() => navigate('/what-we-do')} tabIndex={0}>
              <Text>O QUE FAZEMOS?</Text>
            </li>
            <li onClick={() => navigate('/where-are-we')}><Text>ONDE ESTAMOS?</Text></li>
          </ul>
        </div>
        <div className="navbar-end mr-2 cursor-pointer md:flex">
          <ShoppingCartIcon className='lg:visible md:invisible sm:invisible transition-all hover:scale-125' htmlColor='#fca904'/>
          <div className="dropdown dropdown-end lg:invisible md:invisible sm:visible">
            <label tabIndex={0} className="btn border-none bg-bgPrimary m-1"><MenuIcon/></label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li onClick={() => navigate('/')}><Text>QUEM FAZ?</Text></li>
              <li onClick={() => navigate('/what-we-do')} tabIndex={0}>
                <Text>O QUE FAZEMOS?</Text>
              </li>
              <li onClick={() => navigate('/where-are-we')}><Text>ONDE ESTAMOS?</Text></li>
            </ul>
          </div>
        </div>
      </div>
      {children}
      <footer className="footer footer-center p-4 bg-bgPrimary text-base-content fixed bottom-0">
        <div>
          <Text>Copyright © 2022 - All right reserved by Ventura</Text>
        </div>
      </footer>
    </div>
  )
}

export default Header
