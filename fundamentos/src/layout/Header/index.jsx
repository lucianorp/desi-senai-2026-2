import styles from './Header.module.css'

function Header({titulo,subtitulo}){
    return(
        <header className={styles.header}>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
        </header>
    )
}

export default Header


