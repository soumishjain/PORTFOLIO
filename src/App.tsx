import About from "./components/About"
import CustomCursor from "./components/CustomCursor"
import HeroPage from "./components/HeroPage"
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
    </div>
  )
}

export default App
