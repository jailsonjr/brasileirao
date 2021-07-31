import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function ImageClub(props) {

    const CHARS_WITH_ACCENT = "ÂÃÁÀÉÈÊÌÍÓÒÚÙ";
    const CHARS_WITHOUT_ACCENT = "AAAAEEEIIOOUU";

    const normalizeName = (name) => {
        
        let nameNormalized = '';
        
        name.toUpperCase().split('').map(char => {
            let getCharIndex = CHARS_WITH_ACCENT.indexOf(char);
            let getCharWithoutAccent = CHARS_WITHOUT_ACCENT[getCharIndex];

            if(getCharWithoutAccent) {
                nameNormalized = nameNormalized + getCharWithoutAccent;
            } else {
                nameNormalized = nameNormalized + char;
            }
        });

        nameNormalized = nameNormalized.replace(" ", "_");
        nameNormalized = nameNormalized.toLowerCase();

        return nameNormalized;
    }

    return (
        <div className={styles.imageClub}>
        <Image  alt="Logo of CBF" src={'/img/'+ normalizeName(props.name) +'.png'} layout="fixed" width={25} height={25} />
        </div>
    )
}
