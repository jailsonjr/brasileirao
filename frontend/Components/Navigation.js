import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Navigation(props) {

  const years = [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015];

  return (
    <div className={styles.appNav}>
      {
        years.map( year => {
          let activeLink = props.activeYear == year;
          return <Link href={`/${year}`} key={year} >
            <a className={activeLink ? styles.appNavItemActive : styles.appNavItem}>{year}</a>
          </Link>;
        })
      }
      
    </div>
  )
}
