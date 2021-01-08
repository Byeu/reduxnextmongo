import Head from 'next/head'
import style from "../style/index.less"
import Link from 'next/link'
import Header from './components/Header'

export default function Todo() {
  return (
    <div className={style.main}>
      <Head>
        <title>My Cool App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={style.main}>
          My Todo List
        </h1>
        <Header />
      </main>
    </div>
  )
}
