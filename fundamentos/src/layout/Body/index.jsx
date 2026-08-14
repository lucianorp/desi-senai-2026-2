import styles from './Body.module.css'
import Card from './components/Card'

function Body(){
    const usuarios = [
        {nome:"Ana", idade:22, cidade:"São Paulo"},
        {nome:"Bruno", idade:30, cidade:"Rio de Janeiro"},
        {nome:"Carlos", idade:25, cidade:"Belo Horizonte"},
        {nome:"Carlos", idade:25, cidade:"Belo Horizonte"},
        {nome:"Carlos", idade:25, cidade:"Belo Horizonte"}
    ]
    return(
        <main className={styles.body}>
            <h3>Usuários Cadastrados:</h3>
            <div className={styles.cardContainer}>
                
                {
                    usuarios.map((usuario)=>(
                        <Card
                            nome={usuario.nome}
                            idade={usuario.idade}
                            cidade={usuario.cidade}
                        />
                    ))
                }
            </div>
        </main>
    )
}

export default Body