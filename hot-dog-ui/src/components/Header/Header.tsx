import React, { ReactElement } from 'react'
import Logo from '../../assets/dandao_logo.svg'
import { Text } from './style'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
interface HeaderProps {
  children: React.ReactElement
}

const Header = ({ children, ...rest }: HeaderProps): ReactElement => {
  return (
    <div>
      <div className="navbar bg-bgPrimary">
        <div className="navbar-start">
          <div className="dropdown">
          </div>
          <div className='flex flex-col'>
            <img src={Logo} className="h-16 w-44 object-contain" />
            <Text>HOTDOG DO DANDÃO</Text>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><Text>QUEM FAZ?</Text></li>
            <li tabIndex={0}>
              <Text>O QUE FAZEMOS?</Text>
            </li>
            <li><Text>ONDE ESTAMOS?</Text></li>
          </ul>
        </div>
        <div className="navbar-end mr-2 cursor-pointer">
          <ShoppingCartIcon className='transition-all hover:scale-125' htmlColor='#fca904'/>
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
