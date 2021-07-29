import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function AppTitle(props) {
  return (
    <div className={styles.appTitle}>
      <div className={styles.logo}>
      <Image  alt="Logo of CBF" src='/img/national-brazil.fw.png' layout="fixed" width={50} height={71} />
      </div>
        
        <div className={styles.headerTitle}>
          <h1 className={styles.title}>
              Histórico do Campeonato Brasileiro {props.year}
          </h1>
          <p className={styles.subTitle}>
              Sistema de pontos corridos
          </p>
        </div>
    </div>
  )
}
