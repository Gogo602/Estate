import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Projects from "./Components/Projects"
import Testimony from "./Components/Testimony"




const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
      <Testimony />
      <Contact />
      <Footer/>
    </div> 
  )
}

export default App
