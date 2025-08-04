import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, X, Eye, Code, Database, Smartphone, Globe, User, Mail, MapPin, Phone } from 'lucide-react';




const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  // Profile data
  const profileData = {
    name: "Ariel Labuson",
    title: "Full Stack Web & Mobile Developer",
    location: "Pulilan, Bulacan, Central Luzon, Philippines",
    email: "ariellabuson08@gmail.com", 
    phone: "+63 945 157 0794", 
    bio: "Experienced full stack developer specializing in web applications and mobile solutions. Proficient in PHP, React, and React Native with a strong background in e-commerce platforms, inventory management systems, and educational applications. Passionate about creating user-friendly interfaces and robust backend systems.",
    experience: "1+ years",
    projectsCompleted: "6",
    clientsSatisfied: "6"
  };

  // Skills data based on your actual projects
  const skillsData = {
    frontend: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 98 },
      { name: "Tailwind CSS", level: 85 },
      { name: "AJAX", level: 90 }
    ],
    backend: [
      { name: "PHP", level: 95 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "Server Management", level: 80 }
    ],
    database: [
      { name: "MySQL", level: 95 },
      { name: "MongoDB", level: 80 },
      { name: "Database Design", level: 90 },
      { name: "Query Optimization", level: 85 }
    ],
    mobile: [
      { name: "React Native", level: 85 },
      { name: "Mobile UI/UX", level: 80 },
      { name: "Cross-platform Dev", level: 75 }
    ],
    tools: [
      { name: "Git/Version Control", level: 85 },
      { name: "Web Hosting", level: 80 },
      { name: "Project Management", level: 85 },
      { name: "Testing & Debugging", level: 90 }
    ]
  };
const handleViewResume = () => {
    window.open('../assets/Ariel-Labuson-CV-Resume.pdf', '_blank');
  };
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "E-Commerce and Online Networking",
      category: "web",
      image: "../assets/wemultiply.png",
      description: "Modern e-commerce platform with React and Node.js featuring real-time inventory management and secure payment processing.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      liveUrl: "https://wemultiplyapp.com/",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Web Game",
      category: "web",
      image: "../assets/rhythmix master.png",
      description: "Interactive web game for kids to learn music and rhythm.",
      tech: ["PHP", "AJAX", "MySQL", "JavaScript", "HTML", "CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "eCommerce and inventory management",
      category: "web",
      image: "../assets/pc bulacan.png",
      description: "Online platform for PC parts and accessories with advanced search and filtering options.",
      tech: ["PHP", "AJAX", "MySQL", "JavaScript", "HTML", "CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "My capstone project",
      category: "web",
      image: "../assets/upahan.png",
      description: "My capstone project is a comprehensive platform for rental Apartments Online.",
      tech: ["PHP", "AJAX", "MySQL", "JavaScript", "HTML", "CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Mobile Complain and Tracking App",
      category: "mobile",
      image: "../assets/prolilan.jpg",
      description: "Comprehensive mobile app for barangay complain.",
      tech: ["React Native", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Animal Bite Inventory Management System",
      category: "web",
      image:"../assets/animal bite.png",
      description: "Animal bite inventory management system for tracking and managing animal bite cases.",
      tech: ["PHP", "AJAX", "MySQL", "JavaScript", "HTML", "CSS"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
  ];

  const sections = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'skills', name: 'Skills', icon: Code },
    { id: 'projects', name: 'Projects', icon: Globe }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const SkillBar = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-purple-300">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: isLoaded ? `${skill.level}%` : '0%' }}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 pt-20 pb-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className={`text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6 transition-all duration-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            My Portfolio
          </h1>
          <p className={`text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto transition-all duration-1500 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Crafting digital experiences that inspire and engage
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="relative z-10 mb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-sm border ${
                    activeSection === section.id
                      ? 'bg-white/20 border-white/30 text-white shadow-lg'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {section.name}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Profile Section */}
      {activeSection === 'profile' && (
        <section className="relative z-10 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Profile Image */}
                  <div className="text-center lg:text-left">

                      <img className='w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-6' src={'../assets/profile.jpg'} alt="" />
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-8">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white">{profileData.experience}</h3>
                        <p className="text-gray-300 text-sm">Experience</p>
                      </div>
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white">{profileData.projectsCompleted}</h3>
                        <p className="text-gray-300 text-sm">Projects</p>
                      </div>
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white">{profileData.clientsSatisfied}</h3>
                        <p className="text-gray-300 text-sm">Clients</p>
                      </div>
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-2">{profileData.name}</h2>
                    <h3 className="text-xl text-purple-300 mb-6">{profileData.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-8">{profileData.bio}</p>
                    
                    {/* Contact Info */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gray-300">
                        <MapPin className="w-5 h-5 text-purple-400" />
                        {profileData.location}
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <Mail className="w-5 h-5 text-purple-400" />
                        {profileData.email}
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <Phone className="w-5 h-5 text-purple-400" />
                        {profileData.phone}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105" onClick={handleViewResume}>
                      View Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      {activeSection === 'skills' && (
        <section className="relative z-10 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Frontend Skills */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="w-6 h-6 text-purple-400" />
                    <h3 className="text-2xl font-bold text-white">Frontend Development</h3>
                  </div>
                  {skillsData.frontend.map((skill, index) => (
                    <SkillBar key={index} skill={skill} />
                  ))}
                </div>

                {/* Backend Skills */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Database className="w-6 h-6 text-purple-400" />
                    <h3 className="text-2xl font-bold text-white">Backend Development</h3>
                  </div>
                  {skillsData.backend.map((skill, index) => (
                    <SkillBar key={index} skill={skill} />
                  ))}
                </div>

                {/* Database Skills */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Database className="w-6 h-6 text-purple-400" />
                    <h3 className="text-2xl font-bold text-white">Database & Storage</h3>
                  </div>
                  {skillsData.database.map((skill, index) => (
                    <SkillBar key={index} skill={skill} />
                  ))}
                </div>

                {/* Mobile Skills */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Smartphone className="w-6 h-6 text-purple-400" />
                    <h3 className="text-2xl font-bold text-white">Mobile Development</h3>
                  </div>
                  {skillsData.mobile.map((skill, index) => (
                    <SkillBar key={index} skill={skill} />
                  ))}
                </div>
              </div>

              {/* Tools & Technologies */}
              <div className="mt-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Code className="w-6 h-6 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">Tools & Technologies</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skillsData.tools.map((skill, index) => (
                    <SkillBar key={index} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <>
          {/* Filter Tabs */}
          <div className="relative z-10 mb-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setFilter(category.id)}
                    className={`px-8 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-sm border ${
                      filter === category.id
                        ? 'bg-white/20 border-white/30 text-white shadow-lg'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <main className="relative z-10 pb-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`group cursor-pointer transition-all duration-700 ${
                      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onClick={() => openModal(project)}
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Eye className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 3).map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="px-3 py-1 text-xs rounded-full bg-gray-500/20 text-gray-300 border border-gray-500/30">
                              +{project.tech.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </>
      )}

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-slate-800/95 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image */}
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>

                {/* Details */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.liveUrl}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;