import Head from 'next/head'
import style from "../style/index.less"
import Link from 'next/link'
import Header from './components/Header'

export default function Home() {
  return (
    <div className={style.main}>
      <Head>
        <title>My Cool App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={style.main}>
          Welcome to my App
        </h1>
        <Header />
      </main>
    </div>
  )
}
