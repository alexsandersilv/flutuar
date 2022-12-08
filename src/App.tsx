import { Footer } from './components/Footer';
import './styles/home.page.css'

function App() {
  return (
    <div id='home'>
      <img src="/img/banner.png" alt="Imagem de uma mulher ao lado de um globo do mundo com vários pontos de referencia" />
      <main>
        <section>
          <h1>
            O seu próximo <span>destino</span> pode estar aqui...
          </h1>
          <p>
            Aqui você encontra uma seleção de <span>pacotes completos</span> para as suas férias!
          </p>
          <p>
            Na Flutuar você encontra pacotes de viagens nacionais e internacionais que incluem:
            passagens aéreas, hotéis, café da manhã, e até seguro viagem com <span>preços arrasadores!</span>
          </p>
          <p>
            Se você ainda não tem um destino definido, confira nossa seção de ofertas.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App;