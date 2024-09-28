import Image from "next/image";
import Link from 'next/link'
import Landing from './components/landing'
import About from './components/about'
import Experience from './components/experience'
import Projects from './components/projects'
import Contact from './components/contact'

export default function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li class="text-sky-400"><Link href="#about">About</Link></li>
          <li><Link href="#experience">Experience</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>

      <Landing></Landing>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}
