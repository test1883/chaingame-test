import { Header as Hd, HeaderLogo, HeaderNav } from '@/styles'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'

const Header = () => {
  return (
    <Hd>
      <HeaderLogo>ChainGame</HeaderLogo>
      <HeaderNav>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div>Dev Mode</div>
        </div>
        <ConnectButton showBalance={false} />
      </HeaderNav>
    </Hd>
  )
}

export default Header
