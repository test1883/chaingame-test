"use client"

import Header from '@/components/Header'
import { AuthContext } from '@/context/AuthContext'
import { Button, Content, ContractPage, Right } from '@/styles'
import Head from 'next/head'
import React, { useContext, useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

const contract = () => {
  const authContext = useContext(AuthContext)
  const [contract, setContract] = useState(undefined)
  const { address } = useAccount()
  useEffect(() => {
    (async () => {
      if (address) {
        const res = await fetch(process.env.Gateway + "/get/" + address)
        if (res.status !== 404) {
          const response = await res.json()
          setContract(response)
        }
      }
    })()
  }, [address])
  
  return (
    <>
      <Head>
        <title>Chaingame | Dev Mode</title>
        <meta property="og:title" content="Chaingame" />
        <meta name="description" content="Generate Dynamic NFTs on the go" />
        <meta
          property="og:description"
          content="Generate Dynamic NFTs on the go"
        />
      </Head>
      <ContractPage>
        <Header />
        <Content>
          {contract === undefined && (
            <>
              <Button>Add Contract</Button>
              <div>No contract found on your address</div>
            </>
          )}
        </Content>
        <Right />
      </ContractPage>
    </>
  )
}

export default contract
