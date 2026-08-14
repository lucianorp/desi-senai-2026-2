
import Header from './layout/Header'
import Body from './layout/Body'
import { Footer } from './layout/Footer'
import Contador from './layout/Body/components/Contador'


function App() {


  return (
    <>
      <Header titulo="Revisão de React" subtitulo="Props e desestruturação" />
      <Body/>
      {/* <Contador/> */}
      <Footer copy="2026. Todos os direitos reservados" />
    </>
  )
}

export default App
