import { useState, useEffect } from 'react'

import styles from "./Card.module.css"

export const CardApi = () => {

    const [users, setUsers] = useState([])

    // filter
    const [filtro,setFiltro] =useState("")

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            // .then(data => setUsers(data))
        // console.log("executando")

        .then((data)=>{
            // simula um filtro por nome
            const filtrados = data.filter((user)=> 
                user.name.toLowerCase().includes(filtro.toLowerCase())
            )
            setUsers(filtrados)
        })
    }, [filtro])

    return (
        <>
            <h3 className={styles.title}>Usuários da API</h3>

            <div className={styles.containerFilter}>
                <input
                className={styles.inputFilter}
                type='text'
                placeholder='Filtrar por nome...'
                value={filtro}
                onChange={(e)=> setFiltro(e.target.value)}
                />

            </div>

            <div className={styles.cardContainer}>
                {
                users.length === 0 && filtro !=="" ?(
                    <p>Não há usuários com o termo buscado. Tente outro nome</p>
                ):(
                    users.map((user) => (
                        <div className={styles.card} key={user.id}>
                            <h4>{user.name}</h4>
                            <p className={styles.texto}>{user.email}</p>
                            <p className={styles.texto}>End: {user.address.street}, {user.address.city}</p>
                        </div>
                    ))
                )
                }

                {/* {
                    users.map((user) => (
                        <div className={styles.card} key={user.id}>
                            <h4>{user.name}</h4>
                            <p className={styles.texto}>{user.email}</p>
                            <p className={styles.texto}>End: {user.address.street}, {user.address.city}</p>
                        </div>
                    ))
                } */}
            </div>
        </>
    )

}