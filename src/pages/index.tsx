import type { NextPage } from 'next'
import Head from 'next/head'

import { Content, Header, NavBar } from '@/components'

import styles from '@/styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create dashboard</title>
        <meta name="description" content="Created by streamline" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <div className={styles.container}>
        <NavBar />
        <Header />
        <Content />
      </div>
    </div>
  )
}

export default Home
