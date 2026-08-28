import {Outlet} from 'react-router'
import { Header } from '../Header'
import { Footer } from '../Footer'

export default function Main(){
    return(
        <div className='flex min-h-screen flex-col'>
            <Header/>

            <main className='flex container mx-auto p-4'>
                <Outlet/>
            </main>

            <Footer/>
        </div>
    )
}