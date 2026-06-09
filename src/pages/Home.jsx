import { BrowserRouter, Link } from 'react-router-dom'
import styles from './Home.module.css'
import gif1Gif from '../assets/gif1.gif'

function Home() {
  return (
    <div className={styles.home}>
      <h1>Home</h1>

      <img src={gif1Gif} alt="" className={styles.gif} />

       <BrowserRouter>
        <Link to="/sobre">
          <button>Saiba +</button>
      </Link>
      
      <Link to="/sobre">
        <button>Contato</button>
        </Link>
        </BrowserRouter>
    </div>
  )
}

export default Home