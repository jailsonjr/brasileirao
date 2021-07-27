import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import styles from '../styles/Home.module.css'

export default function AppSelect() {
  return (
    <div className={styles.appSelect}>
      <button className={styles.leftButton}><FaArrowLeft /></button>
      <select className={styles.selectInput}>
        <option>2004</option>
        <option>2005</option>
        <option>2006</option>
      </select>
      <button className={styles.rightButton}><FaArrowRight /></button>
    </div>
  )
}
