import { Briefcase, Code, User } from "lucide-react";

export const AboutMe = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About 
            <span className="text-primary">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">
                    Passionate Web Developer 
                </h3>
                <p className="text-muted-foreground">
                    I am a passionate web developer with a keen interest in creating dynamic and responsive web applications.
                    My journey in web development began with a fascination for how websites work,
                    and it has since evolved into a full-fledged career. I enjoy tackling challenges 
                    and continuously learning new technologies to enhance my skills.
                </p>
                <p className="text-muted-foreground">
                    I specialize in building user-friendly interfaces and ensuring seamless user experiences.
                    My goal is to create web applications that are not only functional but also visually appealing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">
                        {" "}
                        Get in Touch
                    </a>
                    <a href="/Maheen Resume.pdf" 
                    target="_blank"
                    className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                        {" "}
                        Download Resume
                    </a>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                 <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                     <div className="p-3 rounded-full bg-primary/10">
                     <Code className="h-6 w-6 text-primary"/>
                     </div>
                     <div className="text-left">
                        <h4 className="font-semibold text-lg">Web Development</h4>
                        <p className="text-muted-foreground">
                        I specialize in creating responsive 
                        and interactive web applications using modern technologies.
                        </p>
                     </div>
                    </div>
                 </div>
                 <div className="gradient-border p-6 card-hover">
                     <div className="flex items-start gap-4">
                     <div className="p-3 rounded-full bg-primary/10">
                     <User className="h-6 w-6 text-primary"/>
                     </div>
                     <div className="text-left">
                        <h4 className="font-semibold text-lg">UI/UX Design</h4>
                        <p className="text-muted-foreground">
                        I focus on creating intuitive and engaging user interfaces
                        that enhance user experience across all devices.
                        </p>
                     </div>
                    </div>
                 </div>
                 <div className="gradient-border p-6 card-hover">
                     <div className="flex items-start gap-4">
                     <div className="p-3 rounded-full bg-primary/10">
                     <Briefcase className="h-6 w-6 text-primary"/>
                     </div>
                     <div className="text-left">
                        <h4 className="font-semibold text-lg">Project Management</h4>
                        <p className="text-muted-foreground">
                        I have experience in managing projects from conception to completion,
                        ensuring timely delivery and quality standards.
                        </p>
                     </div>
                    </div>
                 </div>
              </div>
            </div>
        </div>

    </section>
}