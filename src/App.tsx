import About from "./components/About"
import ContactSection from "./components/contactSection"
import CustomCursor from "./components/CustomCursor"
import HeroPage from "./components/HeroPage"
import Projects from "./components/Projects"
import ScrollProgress from "./components/ScrollProgress"
import Skills from "./components/Skills"

const App = () => {
  return (
    <div className="relative">
      <CustomCursor />
      <HeroPage />
      <About />
      <ScrollProgress />
      <Skills />
      <Projects />
      <ContactSection />
    </div>
  )
}

export default App
