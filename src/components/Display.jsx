import '../App.css'
import Home from './Home'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'

export default function Display () {
  return (
    <div className="lg:pl-[25%] w-screen back text-white  ">
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}
