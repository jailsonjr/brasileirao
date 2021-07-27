import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function AppTitle() {
  return (
    <div className={styles.appTitle}>
        <Image  alt="Logo of CBF" className={styles.logo} src='/img/national-brazil.fw.png' width={50} height={71} />
        <div className={styles.headerTitle}>
        <h1 className={styles.title}>
            Histórico do Campeonato Brasileiro
        </h1>
        <p className={styles.subTitle}>
            Sistema de pontos corridos
        </p>
        </div>
    </div>
  )
}
