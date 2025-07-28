import { ArrowRight, ExternalLink , Github } from "lucide-react";


const projects=[
    {
        id: 1,
        title: "RealTime Code Collaboration",
        description: "A real-time code collaboration tool that allows multiple users to edit code simultaneously.",
        image: "/projects/RCC.png",
        tags:["MERN Stack", "WebSocket","Socket.io", "Tailwind CSS"],
        demourl:"https://realtime-code-collab-7ybfyeep2-mohideen-maheen-s-projects.vercel.app",
        GitHub:"https://github.com/Maheen0312/realtime-code-collab.git",
    },
    {
        id: 2,
        title: "CRUD Application",
        description: " A simple CRUD application that allows users to create, read, update, and delete data.",
        image: "/projects/CRUD App.png",
        tags:["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
        demourl:"c:\Users\mahee\Desktop\crud-app\frontend\index.html",
    },
    {
        id: 3,
        title: "React Movie App",
        description: "A movie application built with React that allows users to search for movies and view details.",
        image: "/projects/Movie App.png",
        tags:["React", "Node.js","Tailwind CSS"],
        demourl:"",
    },
    {
        id: 4,
        title: "E-commerce Platform",
        description: "Interactive analytics dashboard and I have develop to experience a User Experience.",
        image: "/projects/E-commerce Platform.png",
        tags:["HTML", "CSS", "JavaScript"],
        demourl:"c:\Users\mahee\Desktop\html tutorial\maheen.html",
    },

];


export const ProjectsSection = () => {
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Featured 
                <span className="text-primary">
                {" "}
                Projects
                </span>
                </h2>
                <p className="text-center text-muted-foregorund mb-12 max-w-2xl mx-auto">
                 Here are some of my recent Projects. Each Projects was carefully crafted 
                 with attention to detail, Performance , and User Experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key) => (
                        <div 
                        key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48  overflow-hidden">
                               <img src={project.image} 
                               alt={project.title} 
                               className="w-full h-full object-fit transition-tranform duration-500 group-hover:scale-110" 
                               />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                   {project.tags.map((tag) =>(
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                    {tag}
                                    </span>
                                   ))}
                                </div>
                            
                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                                </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="flex space-x-3">
                                <a 
                                  href={project.demourl} 
                                  target="_blank"
                                  className="text-foregorund/80 hover:text-primary transition-colors duration-300"
                                >
                                    <ExternalLink size={20}/>
                                </a>
                                <a 
                                  href={project.GitHub}
                                  target="_blank"
                                  className="text-foregorund/80 hover:text-primary transition-colors duration-300"
                                 >
                                    <Github size={20}/>
                                </a>
                              </div>
                              </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                    href="https://github.com/Maheen0312" 
                    target="_blank"
                    className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check My GitHub <ArrowRight size={20}/>
                    </a>
                </div>
            </div>
        </section>
    )
}