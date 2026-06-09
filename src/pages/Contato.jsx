import styles from './Contato.module.css'
import gif3Gif from '../assets/gif3.gif'

function Contato() {
  return (
    <div className={styles.contato}>
      <img src={gif3Gif} alt="" className={styles.gif} />
      <h1>Contato</h1>
    </div>
  )
}

export default Contato
