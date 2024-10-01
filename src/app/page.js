import Image from "next/image";

import Navbar from './components/navbar'
import Landing from './components/landing'
import About from './components/about'
import Experience from './components/experience'
import Projects from './components/projects'
import Contact from './components/contact'

export default function Home() {
  return (
    <div>
      

      <Navbar></Navbar>

      <Landing></Landing>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}
