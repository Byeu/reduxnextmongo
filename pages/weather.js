import Head from 'next/head'
import { connect } from "react-redux"
import { setInfo } from "../redux/actions/main"
import { useState } from "react"
import style from "../style/index.less"
import Header from './components/Header'

function Weather(props) {
  const { userInfo, setInfo } = props;
  const [ name, setName] = useState ("");
  return (
    <div className="xcontainer">
      <Head>
        <title>The Weather</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={style.main}>
          <Header />
          <h1 className="title">
           Today is Fine for { userInfo.name }
          </h1>
          <input 
            name="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            />
          <button 
            onClick={() => setInfo(name)}>
              Submit
          </button>
        </div>
      </main>
    </div>
  )
}


const mapStateToProps = state => ({
  userInfo: state.main
})

const mapDispatchToProps = {
  setInfo: setInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)