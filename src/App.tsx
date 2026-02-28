import About from "./components/About"
import CustomCursor from "./components/CustomCursor"
import HeroPage from "./components/HeroPage"
import ScrollProgress from "./components/ScrollProgress"

const App = () => {
  return (
    <div className="relative">
      <CustomCursor />
      <HeroPage />
      <About />
      <ScrollProgress />
    </div>
  )
}

export default App
