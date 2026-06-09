import styles from './Sobre.module.css'
import gif2Gif from '../assets/gif2.gif'

function Sobre() {
  return (
    <div className={styles.sobre}>
      <img src={gif2Gif} alt="" className={styles.gif} />
      <h1>Sobre</h1>

    </div>
  )
}

export default Sobre
