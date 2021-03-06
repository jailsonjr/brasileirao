import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { useLoading } from '../Context/LoadingContext';

export default function Navigation(props) {

  const years = [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015];

  const { setLoading} = useLoading();

  function handleClick() {
    setLoading(true);
  }

  return (
    <nav className={styles.appNav}>
      {
        years.map( year => {
          let activeLink = props.activeYear == year;
          return <Link href={`/${year}`} key={year} >
            <a className={activeLink ? styles.appNavItemActive : styles.appNavItem} onClick={handleClick}>{year}</a>
          </Link>;
        })
      }
      
    </nav>
  )
}
