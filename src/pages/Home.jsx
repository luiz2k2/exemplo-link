import styles from './Home.module.css';
import gif1Gif from '../assets/gif1.gif';

function Home() {
  return (
    <div className={styles.home}>
      <h1>Home</h1>
      <img src={gif1Gif} alt="Imagem 1" />
      <button>Saiba +</button>
      <button>Contato</button>
    </div>
  );
}

export default Home;