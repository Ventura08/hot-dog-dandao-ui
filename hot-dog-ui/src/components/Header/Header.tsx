import React, { ReactElement } from 'react'
import Logo from '../../assets/dandao_logo.svg'

interface HeaderProps {
  children: React.ReactElement
}

const Header = ({ children, ...rest }: HeaderProps): ReactElement => {
  return (
    <div>
      <div className='bg-bgPrimary min-h-16 h-auto flex justify-between'>
        <div className='flex flex-col justify-center align-middle text-center pt-1 pl-3' >
          <img src={Logo} className="h-20 w-44object-contain" />
          <span className='w-auto whitespace-nowrap -mt-2' >HOTDOG DO DANDÃO</span>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Header
