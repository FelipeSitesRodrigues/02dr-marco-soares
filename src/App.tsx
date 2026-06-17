import Header from './components/Header'
import Hero from './components/Hero'
import PracticeAreas from './components/PracticeAreas'
import About from './components/About'
import Authority from './components/Authority'
import Testimonials from './components/Testimonials'
import Differentials from './components/Differentials'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <PracticeAreas />
        <About />
        <Authority />
        <Testimonials />
        <Differentials />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
