import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import styles from '../styles/Home.module.css'

export default function Navigation() {

  const years = [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015];

  return (
    <div className={styles.appNav}>
      {
        years.map( year => {
          return <span className={styles.appNavItem}>{year}</span>;
        })
      }
      
    </div>
  )
}
