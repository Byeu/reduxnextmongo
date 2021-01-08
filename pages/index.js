import Head from 'next/head'
import style from "../style/index.less"
import Link from 'next/link'
import Header from './components/Header'

export default function Home() {
  return (
    <div className="xcontainer">
      <Head>
        <title>My Cool App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={style.main}>        
          <Header />
          <h1 className="title">
            Welcome to my App
          </h1>
        </div>
      </main>
    </div>
  )
}
