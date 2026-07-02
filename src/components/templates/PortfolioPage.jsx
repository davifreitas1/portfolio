import Navbar from '../organisms/Navbar'
import Hero from '../organisms/Hero'
import About from '../organisms/About'
import Skills from '../organisms/Skills'
import Projects from '../organisms/Projects'
import Highlights from '../organisms/Highlights'
import Contact from '../organisms/Contact'
import Footer from '../organisms/Footer'

// PortfolioPage: o template que monta a pagina inteira na ordem certa.
// A ordem das secoes segue a jornada do recrutador: quem e -> historia ->
// o que sabe -> o que ja fez -> destaques -> como falar com ele.
export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
