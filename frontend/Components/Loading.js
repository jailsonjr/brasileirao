import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/Home.module.css'

export default function Loading() {

    return (
        <div className={styles.appLoading}>
            <FontAwesomeIcon  icon={faSpinner} className={styles.appLoadingIcon}/>
        </div> 
    );
}