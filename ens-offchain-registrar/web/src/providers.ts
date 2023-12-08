import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

export const chains = [sepolia]

const { publicClient, webSocketPublicClient } = configureChains(chains, [
  publicProvider(),
])

export const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
})
