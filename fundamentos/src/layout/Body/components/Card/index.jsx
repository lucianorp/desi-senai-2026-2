import styles from './Card.module.css'

function Card({nome, idade, cidade}){
    return(
        <div className={styles.card}>
            <h4>{nome}</h4>
            <p>{idade}</p>
            <p>{cidade}</p>
        </div>
    )
}

export default Card