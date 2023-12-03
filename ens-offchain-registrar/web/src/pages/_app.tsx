import { ThorinGlobalStyles, darkTheme } from '@ensdomains/thorin'
import {
  RainbowKitProvider,
  darkTheme as darkThemeRk,
} from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { WagmiConfig } from 'wagmi'

import { Layout } from '@/components/Layout'
import { useIsMounted } from '@/hooks/useIsMounted'

import { chains, wagmiConfig } from '../providers'

export default function App({ Component, pageProps }: AppProps) {
  const isMounted = useIsMounted()

  return (
    <ThemeProvider theme={darkTheme}>
      <ThorinGlobalStyles />
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          chains={chains}
          theme={darkThemeRk({
            accentColor: '#1A43BF',
          })}
          modalSize="wide"
          children={
            <Layout>{isMounted && <Component {...pageProps} />}</Layout>
          }
        ></RainbowKitProvider>
      </WagmiConfig>
    </ThemeProvider>
  )
}
