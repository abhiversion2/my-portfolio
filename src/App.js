import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  GitCommit,
  User,
  Mail,
  Home,
  Menu,
  X,
  Linkedin,
  Github,
  Twitter,
  ExternalLink,
  GraduationCap,
  Award,
  Sun,
  Moon,
  Download,
} from 'lucide-react';
import myphotoImage from './assets/myphoto.jpg';
import terraformImage from './assets/terraform.png';
import identityaccessImage from './assets/identityaccess.png';
import solutionsarchitectImage from './assets/solutionsarchitect.png';
import devopsImage from './assets/devops.png';
import redhatImage from './assets/redhat.png';
import azureadminImage from './assets/administrator.png';
import rpaImage from './assets/automation.jpg';
import dataengineerImage from './assets/dataengineer.png';
import developerImage from './assets/developer.png';
import datasciencepythonImage from './assets/datasciencewithpython.jpg';

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  // Data for the portfolio sections
  const portfolioData = {
    name: "Abhijeet Vishwakarma",
    tagline: "Senior DevOps Engineer",
    about: "I am a seasoned Senior DevOps Engineer with over 6+ years of experience in building and managing robust, scalable, and secure cloud infrastructure. My expertise lies in automating the software development lifecycle (SDLC) through Continuous Integration and Continuous Delivery (CI/CD) pipelines. I am passionate about leveraging technologies like Docker, Kubernetes, and Terraform to streamline operations and enhance developer productivity. I have a strong background in both on-premises and multi-cloud environments, and I thrive on solving complex problems to deliver reliable and high-performing systems.",
    cvUrl: "https://example.com/abhijeet_vishwakarma_cv.pdf", // Placeholder URL for CV
    skills: [
      { category: 'Cloud Platforms', items: ['Azure', 'AWS', 'GCP', 'Databricks'] },
      { category: 'Version Control & Source Code Management (SCM)', items: ['Git', 'GitHub', 'GitLab', 'Bitbucket'] },
      { category: 'CI/CD (Continuous Integration / Continuous Deployment)', items: ['GitHub Actions', 'Azure DevOps', 'Jenkins', 'Spinnaker', 'ArgoCD'] },
      { category: 'Configuration Management & Infrastructure as Code (IaC)', items: ['Terraform', 'Ansible'] },
      { category: 'Containerization & Orchestration', items: ['Docker', 'Kubernetes'] },
      { category: 'Monitoring, Logging & Observability', items: ['Prometheus', 'Grafana', 'Datadog', 'Splunk', 'Dynatrace'] },
      { category: 'Scripting & Programming', items: ['PowerShell', 'Bash', 'Python'] },
      { category: 'Code Quality & Security', items: ['SonarCloud', 'CheckOv', 'Tflint', 'Terratest'] },
    ],
    projects: [
      {
        title: "Automated CI/CD Pipeline for Microservices",
        description: "Designed and implemented a fully automated CI/CD pipeline using Jenkins and Docker, reducing deployment time from hours to minutes and significantly improving release frequency.",
        technologies: ["Jenkins", "Docker", "Kubernetes", "Git"],
        url: "#"
      },
      {
        title: "Multi-Cloud Infrastructure with Terraform",
        description: "Engineered reusable and modular Terraform code to provision and manage infrastructure across AWS and GCP, ensuring consistent and reproducible environments.",
        technologies: ["Terraform", "AWS", "GCP", "Bash"],
        url: "#"
      },
      {
        title: "Kubernetes Cluster Management System",
        description: "Developed a custom Python application to monitor, manage, and scale Kubernetes clusters, integrating with Prometheus and Grafana for real-time performance insights.",
        technologies: ["Kubernetes", "Python", "Prometheus", "Grafana"],
        url: "#"
      },
    ],
    workExperience: [
      {
        company: "Luxoft",
        roles: [
          {
            title: "Senior DevOps Engineer",
            duration: "Feb 2025 - Present",
            description: "Senior DevOps Engineer at Luxoft, based in Pune, Maharashtra, India, working remotely.",
            popupDetails: "Led the design and deployment of scalable cloud solutions using Azure and AWS, optimized CI/CD pipelines with GitHub Actions, and implemented Kubernetes orchestration for microservices. Collaborated with cross-functional teams to enhance system reliability and reduce downtime by 30%.",
          },
        ],
      },
      {
        company: "Cognizant",
        roles: [
          {
            title: "Technical Lead",
            duration: "Jun 2023 - Jan 2025",
            description: "Technical Lead at Cognizant, based in Pune, Maharashtra, India.",
            popupDetails: "Primarily working on IAC tools like Terraform, Configuration Mgmt tools like Ansible, Powershell, etc. As well as Azure Data Platform tools such as Azure Data Factory, Azure Databricks, Azure SQL Server, Azure Synapse Analytics, Azure Event Hubs and Azure Stream Analytics. Responsible for designing, implementing, and managing CI/CD pipelines using Azure DevOps and GitHub Actions. Led a team of 5 DevOps engineers to streamline deployment processes, resulting in a 40% increase in deployment efficiency. Worked closely with development teams to ensure seamless integration of DevOps practices into the software development lifecycle.",
          },
        ],
      },
      {
        company: "Wipro",
        roles: [
          {
            title: "System Engineer",
            duration: "Mar 2022 - Jun 2023",
            description: "System Engineer at Wipro, based in Mumbai, Maharashtra, India.",
            popupDetails: "Hands-On experience in building and managing Azure DevOps CI/CD pipeline, Azure DevOps services such as Boards, Artifacts, Repos, Service Connections, Create and configure build and Release pipeline for identified applications (Dev, QA, etc) as per target CICD architecture, etc. Implementing Azure DevOps Development Processes, Continuous Integration, Continuous Delivery, Application Infrastructure, etc. Run CICD Pipelines to install agents on Virtual Machines, Run PowerShell scripts, support ongoing production deployments. Responsible for the updating of configuration management tools, code, and modules for the purpose of streamlining implementation and supportability. Using Terraform for automating infrastructure provisioning, hands-on experience on various Azure Services and has an experience in provisioning them via Terraform. Experience with VCS, branching strategies with Git/GitHub and Azure Repos, Understand and provide support to development teams including source code management and Azure DevOps pipeline adoption. Good Understanding of configuration management of the infrastructure and IAC tools, PowerShell, YAML and JSON language, Scripting, Server automation tool Ansible, Kubernetes & containers.",
          },
        ],
      },
      {
        company: "Infosys",
        roles: [
          {
            title: "Senior Operations Executive",
            duration: "Jul 2021 - Mar 2022",
            description: "Senior Operations Executive at Infosys, based in Pune, Maharashtra, India.",
            popupDetails: "Install, configure, upgrade, and maintain server systems running windows server and VMware ESXI. Hands-on knowledge of Azure Active directory, VMware vCenter, DHCP, Share folder & NTFS permissions, DNS, Security & AD Groups, and Disk & Printer Management. Experience in working with physical servers and VM’s, Hyper-V and Azure Infra. Creating & managing Snapshots, Tags, Hyper-V server and virtual disks (VHD& VHDX), Consolidating VHDs. Designed and configured Azure Virtual Networks, Subnets, Azure Network Settings, VMSS, Network Security Groups, Traffic Manager, Load Balancer, Routing and Provisioning Virtual Machines. Experience on App Services, Web Apps, Firewall, Network Watcher, Monitor, Key Vault, VPN, Log Analytics, Alerts Storage Accounts, and Cost Management. Hands-on experience in Managing & Maintaining Azure infra using PowerShell, Azure Portal, and ARM templates. Working knowledge in Containers, Micro Services, Linux, PowerShell scripting, Backups,, Migration of on-premises VMs to Cloud and can handle these activities. Identifying system faults, hardware issues & co coordinating with vendor for hardware replacement on HP/Dell Servers. Documentation of solutions/RCAs, develop/maintain system implementation documents, knowledge base, service reports and operational procedures.Working on ITIL standards to provide technical support in order to ensure a high degree of Customer Satisfaction through SLA & Process Compliance.",
          },
          {
            title: "Operations Executive",
            duration: "Sep 2019 - Jun 2021",
            description: "Operations Executive at Infosys, based in Pune, Maharashtra, India.",
            popupDetails: "Assisted in managing IT infrastructure, gained initial experience with Docker and Kubernetes, and supported CI/CD pipeline setup with Jenkins. Contributed to a team project that reduced deployment errors by 15%.",
          },
        ],
      },
    ],
    education: [
      {
        degree: "Master of Computer Applications",
        university: "Indira Gandhi National Open University",
        duration: "2022 - 2024"
      },
      {
        degree: "Bachelor of Science in Computer Science",
        university: "University of Mumbai",
        duration: "2016 - 2019"
      },
    ],
    certifications: [
      { name: "HashiCorp Certified: Terraform Associate (002)", issuer: "HashiCorp", date: "2022", image: terraformImage },
      { name: "Microsoft Certified: Identity and Access Administrator Associate", issuer: "Microsoft", date: "2023", image: identityaccessImage },
      { name: "Microsoft Certified: Azure Solutions Architect Expert", issuer: "Microsoft", date: "2024", image: solutionsarchitectImage },
      { name: "Microsoft Certified: DevOps Engineer Expert", issuer: "Microsoft", date: "2024", image: devopsImage },
      { name: "Red Hat Certified: Cloud Infrastructure Engineer", issuer: "Red Hat", date: "2022", image: redhatImage },
      { name: "Microsoft Certified: Azure Administrator Associate", issuer: "Microsoft", date: "2021", image: azureadminImage },
      { name: "Automation Anywhere Certified Advanced RPA Professional (V11.0)", issuer: "Automation Anywhere", date: "2020", image: rpaImage },
      { name: "Microsoft Certified: Azure Data Engineer Associate", issuer: "Microsoft", date: "2023", image: dataengineerImage },
      { name: "Microsoft Certified: Azure Developer Associate", issuer: "Microsoft", date: "2023", image: developerImage },
      { name: "Python for Data Science", issuer: "Coursera", date: "2024", image: datasciencepythonImage },
    ],
    contact: {
      email: "vishwakarmaabhijeet739@gmail.com",
      linkedin: "https://www.linkedin.com/in/abhijeet-vishwakarma-117409121/",
      github: "https://github.com/abhiversion2",
      twitter: "https://x.com/AbhijeetVishw10",
    }
  };

  const handleScroll = () => {
    const sections = ['home', 'about', 'skills', 'work-experience', 'projects', 'certifications', 'education', 'contact'];
    const scrollPosition = window.scrollY;

    let closestSection = 'home';
    let minDistance = Infinity;

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        const distance = Math.abs(element.offsetTop - scrollPosition);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = sectionId;
        }
      }
    });

    setActiveSection(closestSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu on mobile
  };

  const openPopup = (content) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent('');
  };

  const navItems = [
    { name: 'Home', icon: Home, id: 'home' },
    { name: 'About', icon: User, id: 'about' },
    { name: 'Skills', icon: GitCommit, id: 'skills' },
    { name: 'Work', icon: Briefcase, id: 'work-experience' },
    { name: 'Projects', icon: GitCommit, id: 'projects' },
    { name: 'Certifications', icon: Award, id: 'certifications' },
    { name: 'Education', icon: GraduationCap, id: 'education' },
    { name: 'Contact', icon: Mail, id: 'contact' },
  ];

  const mainBgClass = isDarkMode ? 'bg-gray-900' : 'bg-gray-100';
  const mainTextClass = isDarkMode ? 'text-gray-200' : 'text-gray-800';
  const sidebarBgClass = isDarkMode ? 'bg-gray-800' : 'bg-gray-200';
  const sidebarBorderClass = isDarkMode ? 'border-gray-700' : 'border-gray-300';
  const cardBgClass = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const cardBorderClass = isDarkMode ? 'border-indigo-500' : 'border-indigo-600';
  const cardShadowClass = isDarkMode ? 'shadow-xl' : 'shadow-lg';
  const sectionTitleClass = isDarkMode ? 'text-white' : 'text-gray-900';
  const placeholderBgClass = isDarkMode ? 'bg-gray-700' : 'bg-gray-300';
  const placeholderBorderClass = isDarkMode ? 'border-gray-600' : 'border-gray-400';
  const hoverBgClass = isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300';
  const hoverTextClass = isDarkMode ? 'hover:text-white' : 'hover:text-gray-900';
  const activeBgClass = isDarkMode ? 'bg-indigo-600' : 'bg-indigo-600';
  const activeTextClass = isDarkMode ? 'text-white' : 'text-white';
  const iconColorClass = isDarkMode ? 'text-indigo-400' : 'text-indigo-600';
  const skillsBgClass = isDarkMode ? 'bg-gray-700' : 'bg-gray-300';
  const skillsTextClass = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const popupBgClass = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const popupTextClass = isDarkMode ? 'text-gray-200' : 'text-gray-800';

  return (
    <div className={`min-h-screen font-sans leading-relaxed transition-colors duration-300 ${mainBgClass} ${mainTextClass}`}>
      {/* Mobile Menu Button */}
      <button
        className={`fixed top-4 right-4 z-50 p-2 rounded-full md:hidden transition-transform duration-300 transform hover:scale-110 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar/Mobile Menu */}
      <aside className={`fixed top-0 left-0 h-full w-64 transition-transform duration-300 z-40 p-6 md:p-8 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 ${sidebarBgClass} ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
        <div className="flex flex-col h-full">
          <div className="flex flex-col items-center mb-8">
            <div className={`w-24 h-24 rounded-full overflow-hidden border-2 ${placeholderBorderClass} ${placeholderBgClass} shadow-lg`}>
              <img src={myphotoImage} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h1 className={`text-2xl font-bold mt-4 text-center ${sectionTitleClass}`}>{portfolioData.name}</h1>
            <p className="text-sm text-gray-400 mt-1 text-center">{portfolioData.tagline}</p>
          </div>
          <nav className="flex-1">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-3 p-3 rounded-lg font-medium transition-colors duration-200 ${
                      activeSection === item.id ? `${activeBgClass} ${activeTextClass} shadow-lg` : `${isDarkMode ? 'text-gray-400' : 'text-gray-600'} ${hoverBgClass} ${hoverTextClass}`
                    }`}
                  >
                    <item.icon size={20} />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto pt-6 flex justify-between items-center border-t border-gray-700">
            <div className="flex justify-center space-x-4">
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}>
                <Linkedin size={24} />
              </a>
              <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}>
                <Github size={24} />
              </a>
              <a href={portfolioData.contact.twitter} target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}>
                <Twitter size={24} />
              </a>
            </div>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full focus:outline-none transition-colors duration-200"
            >
              {isDarkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-indigo-600" />}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="md:ml-64 p-6 md:p-12">
        {/* Hero Section */}
        <section id="home" className="h-screen flex items-center justify-center text-center">
          <div className="max-w-3xl">
            <h2 className={`text-5xl md:text-6xl font-extrabold mb-4 animate-fadeInUp ${sectionTitleClass}`}>
              Hi, I'm <span className="text-indigo-500">{portfolioData.name}</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-light mb-8 animate-fadeInUp animate-delay-200">
              {portfolioData.tagline}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition-transform duration-300 transform hover:scale-105 animate-fadeInUp animate-delay-400"
              >
                Get in Touch
              </button>
              <a
                href={portfolioData.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-transparent border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105 animate-fadeInUp animate-delay-600"
              >
                <Download size={20} className="mr-2" /> Download CV
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-24">
          <div className="container mx-auto">
            <h3 className={`text-3xl font-bold text-center mb-10 ${sectionTitleClass}`}>About Me</h3>
            <div className={`max-w-4xl mx-auto p-8 md:p-12 rounded-2xl ${cardShadowClass} border-t-4 ${cardBorderClass} animate-slideInLeft ${cardBgClass}`}>
              <p className={`text-lg leading-relaxed text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {portfolioData.about}
              </p>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="py-20 md:py-24">
          <div className="container mx-auto">
            <h3 className={`text-3xl font-bold text-center mb-10 ${sectionTitleClass}`}>My Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto animate-slideInRight">
              {portfolioData.skills.map((skillGroup, index) => (
                <div key={index} className={`${cardBgClass} p-6 rounded-2xl ${cardShadowClass} border-t-4 ${cardBorderClass}`}>
                  <h4 className={`text-xl font-semibold mb-4 flex items-center ${sectionTitleClass}`}>
                    <span className={`${iconColorClass} mr-2`}>
                      <GitCommit size={20} />
                    </span>
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-2">
                    {skillGroup.items.map((item, itemIndex) => (
                      <li key={itemIndex} className={`${skillsBgClass} px-4 py-2 rounded-lg text-sm ${skillsTextClass}`}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="work-experience" className="py-20 md:py-24">
          <div className="container mx-auto">
            <h3 className={`text-3xl font-bold text-center mb-10 ${sectionTitleClass}`}>Work Experience</h3>
            <div className="space-y-8 max-w-4xl mx-auto animate-fadeIn">
              {portfolioData.workExperience.map((company, index) => (
                <div key={index} className={`${cardBgClass} p-6 rounded-2xl ${cardShadowClass} border-t-4 ${cardBorderClass}`}>
                  <h4 className={`text-xl font-bold mb-4 ${sectionTitleClass}`}>{company.company}</h4>
                  <div className="space-y-4">
                    {company.roles.map((role, roleIndex) => (
                      <div
                        key={roleIndex}
                        className={`${cardBgClass} p-4 rounded-lg ${cardShadowClass} border-l-4 ${cardBorderClass} cursor-pointer`}
                        onClick={() => openPopup(role.popupDetails)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h5 className={`text-lg font-semibold ${sectionTitleClass}`}>{role.title}</h5>
                          </div>
                          <span className="text-gray-500 text-sm font-light">{role.duration}</span>
                        </div>
                        <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{role.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-24">
          <div className="container mx-auto">
            <h3 className={`text-3xl font-bold text-center mb-10 ${sectionTitleClass}`}>Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fadeIn">
              {portfolioData.projects.map((project, index) => (
                <div key={index} className={`${cardBgClass} p-6 rounded-2xl ${cardShadowClass} border-t-4 ${cardBorderClass} flex flex-col hover:scale-105 transition-transform duration-300`}>
                  <h4 className={`text-xl font-bold mb-2 ${sectionTitleClass}`}>{project.title}</h4>
                  <p className={`text-sm flex-grow mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${isDarkMode ? 'bg-gray-700 text-indigo-400' : 'bg-gray-200 text-indigo-600'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className={`flex items-center ${iconColorClass} font-semibold transition-colors duration-200 mt-auto`}>
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 md:py-24">
          <div className="container mx-auto">
            <h3 className={`text-3xl font-bold text-center mb-10 ${sectionTitleClass}`}>Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fadeIn">
              {portfolioData.certifications.map((cert, index) => (
                <div key={index} className={`${cardBgClass} p-4 rounded-2xl ${cardShadowClass} border-t-4 ${cardBorderClass} text-center flex flex-col items-center`}>
                  {cert.image && (
                    <img
                      src={cert.image}
                      alt={`${cert.name} logo`}
                      className="w-24 h-24 object-contain mb-4 rounded-lg"
                    />
                  )}
                  <div>
                    <h4 className={`text-lg font-bold ${sectionTitleClass}`}>{cert.name}</h4>
                    <p className={`text-sm text-gray-400`}>{cert.issuer}</p>
                    <p className={`text-sm text-gray-500`}>{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 md:py-24">
          <div className="container mx-auto">
            <h3 className={`text-3xl font-bold text-center mb-10 ${sectionTitleClass}`}>Education</h3>
            <div className="space-y-8 max-w-4xl mx-auto animate-fadeIn">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className={`${cardBgClass} p-8 rounded-2xl ${cardShadowClass} border-t-4 ${cardBorderClass}`}>
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <h4 className={`text-xl font-bold ${sectionTitleClass}`}>{edu.degree}</h4>
                      <p className="text-lg text-gray-400">{edu.university}</p>
                    </div>
                    <span className="text-gray-500 text-sm font-light">{edu.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-24">
          <div className="container mx-auto">
            <h3 className={`text-3xl font-bold text-center mb-10 ${sectionTitleClass}`}>Get in Touch</h3>
            <div className={`max-w-2xl mx-auto p-8 md:p-12 rounded-2xl ${cardShadowClass} border-t-4 ${cardBorderClass} animate-fadeInUp ${cardBgClass}`}>
              <p className={`text-lg text-center mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm currently open to new opportunities. Feel free to reach out!
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                <a href={`mailto:${portfolioData.contact.email}`} className={`flex items-center space-x-3 ${iconColorClass} font-medium transition-colors duration-200`}>
                  <Mail size={24} />
                  <span className="text-base">{portfolioData.contact.email}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`mt-12 py-6 text-center border-t ${sidebarBorderClass} ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        </footer>
      </main>

      {/* Popup Pane */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`max-w-2xl w-full p-6 rounded-lg ${popupBgClass} ${cardShadowClass} ${popupTextClass} animate-fadeInPopup`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-2xl font-bold ${sectionTitleClass}`}>Job Details</h3>
              <button onClick={closePopup} className={`text-${isDarkMode ? 'gray-400' : 'gray-600'} hover:text-${isDarkMode ? 'white' : 'gray-900'} text-2xl font-bold`}>×</button>
            </div>
            <p className="text-lg leading-relaxed">{popupContent}</p>
          </div>
        </div>
      )}

      {/* Tailwind CSS and other scripts */}
      <style>{`
        /* Custom animations for a smoother feel */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInPopup {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out; }
        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-400 { animation-delay: 0.4s; }
        .animate-slideInLeft { animation: slideInLeft 0.8s ease-out; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-in-out; }
        .animate-fadeInPopup { animation: fadeInPopup 0.3s ease-out; }
      `}</style>
    </div>
  );
};

export default App;