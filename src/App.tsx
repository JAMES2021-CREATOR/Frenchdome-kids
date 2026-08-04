import Contact from "./Component/Contact";
import './App.css'
import About from './Component/About'
import Courses from './Component/Courses'
import FAQ from './Component/FAQ'
import Grammar from './Component/Grammar'
import Hero from './Component/Hero'
import Practice from './Component/Practice'
import Testimonials from './Component/Testimonials'
import Translator from './Component/Translator'
import Vocabulary from './Component/Vocabulary'
import Login from "./Component/Login";

function App() {

  return (
    <>
    <Hero/>
    <About />
    <Courses/>
    <Vocabulary />
    <Grammar/>
    <Translator/>
    <Practice/>
    <Testimonials />
    <FAQ/>
    <Contact/>  
    <Login/>
    
    </>
  )
}

export default App
