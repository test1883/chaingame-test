import {
  Button,
  MagnifyingGlassSimpleSVG,
  ScrollBox,
  Typography,
} from '@ensdomains/thorin'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useAccount, useSignMessage } from 'wagmi'

import { NFT } from '@/components/NFT'
import { useDebounce } from '@/hooks/useDebounce'
import { useFetch } from '@/hooks/useFetch'
import {
  Content,
  Contract,
  Form,
  Header,
  Helper,
  Input,
  Link,
  NFTView,
  Page,
  Right,
  Sidebar,
  Spacer,
} from '@/styles'
import { WorkerRequest } from '@/types'

import styles from './styles.module.css'

interface contract {
  owner: string
  contract: string
  description: string
  avatar: string
}
export const getServerSideProps: () => Promise<{
  props: { contracts: contract[] }
}> = async () => {
  const res = await fetch('http://127.0.0.1:8787/contracts')
  const contracts = await res.json()
  return { props: { contracts } }
}

export default function App(props: any) {
  const { address } = useAccount()

  const [selectContract, setSelectedContract] = useState<number | undefined>(
    undefined
  )
  const [tokens, setTokens] = useState<any>(undefined)
  const [name, setName] = useState<string | undefined>(undefined)
  const [description, setDescription] = useState<string | undefined>(undefined)

  const regex = new RegExp('^[a-z0-9-]+$')
  const debouncedName = useDebounce(name, 500)
  const enabled = !!debouncedName && regex.test(debouncedName)

  const { data, isLoading, signMessage, variables } = useSignMessage()
  const changeContract = async (c: contract, key: number) => {
    if (selectContract !== undefined && selectContract !== key) {
      document.getElementsByClassName(styles.selected)[0].style.background =
        'none'
    }
    if (selectContract !== key) {
      setSelectedContract(key)
      const res = await fetch('http://127.0.0.1:8787/get-tokens', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ receiver: c.contract }),
      })
      setTokens(await res.json())
    }
  }
  const requestBody: WorkerRequest = {
    name: `${debouncedName}.offchaindemo.eth`,
    owner: address!,
    addresses: { '60': address },
    texts: { description },
    signature: {
      hash: data!,
      message: variables?.message!,
    },
  }

  return (
    <>
      <Head>
        <title>Offchain ENS Registrar</title>
        <meta property="og:title" content="Offchain ENS Registrar" />
        <meta
          name="description"
          content="Quick demo of how offchain ENS names work"
        />
        <meta
          property="og:description"
          content="Quick demo of how offchain ENS names work"
        />
      </Head>

      {/* <Spacer /> */}

      <Page>
        <Header>
          <ConnectButton showBalance={false} />
        </Header>
        <Sidebar>
          <Input
            label=""
            parentStyles={{ backgroundColor: 'transparent !important' }}
            icon={<MagnifyingGlassSimpleSVG />}
            placeholder="Search contract"
          />
          <ScrollBox style={{ height: '350px', width: '100%' }}>
            {props.contracts.map((c: contract, key: number) => {
              return (
                <Contract
                  onClick={() => changeContract(c, key)}
                  className={selectContract === key ? styles.selected : ''}
                  style={{
                    backgroundColor:
                      selectContract === key ? '#1A43BF' : 'none',
                  }}
                  key={key}
                >
                  <Image
                    src={c.avatar}
                    width="50"
                    height="50"
                    alt="avatar"
                    style={{ borderRadius: '100%' }}
                  />
                  <div>
                    <Typography style={{ color: 'white' }}>
                      {c.contract.slice(0, 3) +
                        '...' +
                        c.contract.slice(
                          c.contract.length - 4,
                          c.contract.length - 1
                        )}
                    </Typography>
                  </div>
                </Contract>
              )
            })}
          </ScrollBox>
        </Sidebar>
        <Content>
          <Input
            label=""
            icon={<MagnifyingGlassSimpleSVG />}
            placeholder="Search NFT"
          />
          {tokens !== undefined && (
            <NFTView>
              <NFT {...tokens[0]} />
            </NFTView>
          )}
        </Content>
        <Right></Right>
        {/* <Footer></Footer> */}
      </Page>
    </>
  )
}
