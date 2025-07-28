import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { AboutMe } from "../components/AboutMe"
import { SkillsSection } from "../components/Skills"
import { ProjectsSection } from "../components/Projects"
import { ContactSection } from "../components/Contact"
import { FooterSection } from "../components/FooterSection"

export const Home = () => {
    return <div className="min-h-screen bg-background text-forground overflow-x-hidden">
       {/*Theme Toggle */}
       <ThemeToggle/>
       {/*Background Effects */}
        <StarBackground/>
       {/*Navbar */}
         <Navbar/>
       {/*Main Content */}
       <main>
        <HeroSection/>
        <AboutMe/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>
       </main>
       {/*Footer */}
       <FooterSection/>
    </div>
}