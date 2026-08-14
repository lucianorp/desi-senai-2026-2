import styles from './Footer.module.css'

export function Footer({copy}){
    return(
        <p className={styles.footer}>{copy}</p>
    )
}

