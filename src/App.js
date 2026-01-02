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
  Phone, // Added Phone icon
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
import githubactionsImage from './assets/github-actions.png';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const portfolioData = {
    name: "Abhijeet Vishwakarma",
    tagline: "Senior DevOps Engineer",
    about: "SRE / DevOps Engineer with 6+ years of experience in designing, automating, and operating scalable, highly available systems in multi-cloud environments (Microsoft Azure, AWS, and Google Cloud Platform). Strong expertise in cloud infrastructure, CI/CD pipelines, Infrastructure as Code, monitoring and alerting, incident management, and production operations. Proven ability to work cross-functionally to translate business requirements into reliable and secure technical solutions. Solid foundation in system design, networking concepts, and Linux administration, with a strong focus on automation, reliability, and operational excellence",
    cvUrl: "https://example.com/abhijeet_vishwakarma_cv.pdf",
    skills: [
      { category: 'Cloud Platforms', items: ['Microsoft Azure', 'Amazon Web Services (AWS)', 'Google Cloud Platforms (GCP)', 'Oracle Cloud Infrastructure (OCI)','Databricks'] },
      { category: 'Version Control & Source Code Management (SCM)', items: ['Git', 'GitHub', 'GitLab', 'Bitbucket'] },
      { category: 'CI/CD (Continuous Integration / Continuous Deployment)', items: ['GitHub Actions', 'Azure DevOps', 'Jenkins', 'Spinnaker', 'ArgoCD'] },
      { category: 'Configuration Management & Infrastructure as Code (IaC)', items: ['Terraform', 'Ansible', 'ARM Template'] },
      { category: 'Containerization & Orchestration', items: ['Docker', 'Kubernetes', 'Azure Kubernetes Service'] },
      { category: 'Monitoring, Logging & Observability', items: ['Prometheus', 'Grafana', 'Datadog', 'Splunk', 'Dynatrace'] },
      { category: 'Scripting & Programming', items: ['PowerShell', 'Bash', 'Python', 'SQL'] },
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
            popupDetails: (
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li>Managed and automated cloud infrastructure across AWS and GCP, supporting production workloads with an emphasis on scalability, security, and operational reliability.</li>
                <li>Automated infrastructure provisioning using Terraform, leveraging reusable modules, workspaces, remote state management, and CI/CD integrations to enable consistent multi-environment deployments.</li>
                <li>Implemented automated testing for Infrastructure as Code (IaC) by developing unit and integration tests using Terratest (Go), reducing configuration drift and improving infrastructure stability.</li>
                <li>Developed Python-based automation workflows and Apache Airflow DAGs, orchestrating cloud and operational tasks with improved scheduling, reliability, and observability.</li>
                <li>Authored Python test cases for Airflow DAGs using Pytest, validating DAG structure, task dependencies, and execution logic to ensure correctness and prevent failures in production pipelines.</li>
                <li>Built and maintained CI/CD pipelines using GitHub Actions and Spinnaker, integrating with cloud-native services to support continuous delivery and automated deployments.</li>
                <li>Deployed and operated containerized applications on AWS, including ECS (Fargate), along with EC2, S3, Lambda, and Managed Apache Airflow, using Spinnaker and Jules pipelines for end-to-end deployment automation.</li>
                <li>Deployed secure multi-cloud architecture using Aviatrix, enabling governed, highly available connectivity into Google Cloud Platform (GCP) with strong network segmentation and centralized control.</li>
                <li>Implemented monitoring and observability solutions using Datadog, Dynatrace, and Splunk, creating dashboards and alerts to proactively detect, troubleshoot, and resolve system issues.</li>
                <li>Diagnosed and resolved CI/CD pipeline and deployment issues, performing root cause analysis across build, infrastructure, and runtime layers to ensure reliable releases and minimal downtime.</li>
              </ul>
            ),
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
            popupDetails: (
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li>Microsoft Azure experience with Azure Data Engineer and Azure DevOps CI/CD Pipelines.</li>
                <li>Hands-on experience with ETL tools such as Azure Data Factory and Azure Databricks admin activities including configuring Clusters, Workspaces, User Access Management, Cluster Pools, Policies, and data governance with Unity Catalog.</li>
                <li>Worked on setting up data platform Azure services like Data Factory, Databricks, SQL Database, Synapse Analytics, Dedicated & Spark Pools, Data Lake Storage, Stream Analytics, and other services for Data Analytics and ETL OPS teams.</li>
                <li>Experience with configuration management tools like PowerShell and Ansible.</li>
                <li>Implemented and maintained CI/CD processes, automating deployments using Azure DevOps CI/CD.</li>
                <li>Automated deployment of reliable cloud infrastructure using Terraform, reducing human efforts by 60%.</li>
                <li>Working experience on Windows and Linux Azure VMs, Key Vault, Storage Accounts, Virtual Networks, and other Azure services.</li>
                <li>Skilled in troubleshooting live production services.</li>
                <li>Achieved a remarkable 60% reduction in workload by implementing PowerShell scripting for automation, resulting in a significant 55% decrease in errors.</li>
                <li>Managed multiple Azure environments including production accounts with setup & configuration of Azure compute, networking, and data platform services.</li>
                <li>Working experience with container services: Docker, Kubernetes, AKS (Azure Kubernetes Service), ACR (Azure Container Registry), and ACI (Azure Container Instances).</li>
              </ul>
            ),
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
            popupDetails: (
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li>Implemented and managed Azure DevOps CI/CD pipelines for automated build, test, and deployment processes.</li>
                <li>Used Terraform and ARM templates for automating infrastructure provisioning across Azure environments.</li>
                <li>Leveraged PowerShell and Ansible for configuration management and automation of server and application setups.</li>
                <li>Implemented and configured various Azure services including Virtual Machines, Virtual Networks (VNets), Load Balancers, Web Apps, Backup, Azure Active Directory (Azure AD), Storage Accounts, Key Vaults, Logic Apps, and more.</li>
                <li>Extensive experience with Version Control Systems (Git), branching strategies, and best practices.</li>
                <li>Streamlined implementation and support by regularly updating configuration management tools, code, and reusable modules.</li>
                <li>Provided ongoing support for production deployment issues and assisted development teams with source code management and adoption of Azure DevOps pipelines.</li>
              </ul>
            ),
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
            popupDetails: (
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li>Installed, configured, upgraded, and maintained server systems running Windows Server and VMware ESXi.</li>
                <li>Hands-on expertise with Azure Active Directory, VMware vCenter, DHCP, shared folders & NTFS permissions, DNS, security & AD groups, disk management, and printer management.</li>
                <li>Experienced in managing physical servers, virtual machines (VMs), Hyper-V, and Azure infrastructure, including creating/managing snapshots, tags, virtual disks (VHD & VHDX), and consolidating VHDs.</li>
                <li>Designed and configured Azure networking components: Virtual Networks, Subnets, Network Settings, Virtual Machine Scale Sets (VMSS), Network Security Groups, Traffic Manager, Load Balancers, and routing; provisioned Virtual Machines.</li>
                <li>Worked with Azure App Services, Web Apps, Firewall, Network Watcher, Monitor, Key Vault, VPN, Log Analytics, Alerts, Storage Accounts, and Cost Management.</li>
                <li>Managed and maintained Azure infrastructure using PowerShell, Azure Portal, and ARM templates.</li>
                <li>Gained working knowledge of containers, microservices, Linux, PowerShell scripting, backups, and on-premises VM migrations to Azure.</li>
                <li>Identified system faults and hardware issues; coordinated with vendors for hardware replacement on HP and Dell servers.</li>
                <li>Documented solutions and root cause analyses (RCAs); developed and maintained system implementation documents, knowledge base articles, service reports, and operational procedures.</li>
                <li>Followed ITIL standards to deliver technical support, ensuring high customer satisfaction through SLA compliance and process adherence.</li>
              </ul>
            ),
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
      { degree: "Master of Computer Applications", university: "Indira Gandhi National Open University", duration: "2022 - 2024" },
      { degree: "Bachelor of Science in Computer Science", university: "University of Mumbai", duration: "2016 - 2019" },
    ],
    certifications: [
      { name: "HashiCorp Certified: Terraform Associate (002)", issuer: "HashiCorp", date: "2022", image: terraformImage },
      { name: "Github Actions Certified GH-200", issuer: "Microsoft", date: "2025", image: githubactionsImage },
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
      phone: "+91 8767765307", // Phone number added
      linkedin: "https://www.linkedin.com/in/abhijeet-vishwakarma-117409121/",
      github: "https://github.com/abhiversion2",
      twitter: "https://x.com/AbhijeetVishw10",
    }
  };

  const handleScroll = () => {
    const sections = ['home', 'about', 'skills', 'work-experience', 'projects', 'certifications', 'education', 'contact'];
    const scrollPosition = window.scrollY + 100;

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
    setIsMenuOpen(false);
  };

  const openPopup = (content) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent(null);
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
  const cardBgClass = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const cardBorderClass = isDarkMode ? 'border-indigo-500' : 'border-indigo-600';
  const cardShadowClass = isDarkMode ? 'shadow-xl' : 'shadow-lg';
  const sectionTitleClass = isDarkMode ? 'text-white' : 'text-gray-900';
  const iconColorClass = isDarkMode ? 'text-indigo-400' : 'text-indigo-600';
  const popupBgClass = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const popupTextClass = isDarkMode ? 'text-gray-200' : 'text-gray-800';

  return (
    <div className={`min-h-screen font-sans leading-relaxed transition-colors duration-300 ${mainBgClass} ${mainTextClass}`}>
      {/* Mobile Menu Button */}
      <button
        className={`fixed top-4 right-4 z-50 p-2 rounded-full md:hidden ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 transition-transform duration-300 z-40 p-6 md:p-8 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 ${sidebarBgClass}`}>
        <div className="flex flex-col h-full">
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
              <img src={myphotoImage} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h1 className={`text-2xl font-bold mt-4 ${sectionTitleClass}`}>{portfolioData.name}</h1>
            <p className="text-sm text-gray-400 mt-1">{portfolioData.tagline}</p>
          </div>
          <nav className="flex-1">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg font-medium transition-colors ${
                      activeSection === item.id
                        ? 'bg-indigo-600 text-white shadow-lg'
                        : `${isDarkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-300'}`
                    }`}
                  >
                    <item.icon size={20} />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto pt-6 border-t border-gray-700 flex justify-between items-center">
            <div className="flex space-x-4">
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Github size={24} />
              </a>
              <a href={portfolioData.contact.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
            </div>
            <button onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-indigo-600" />}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 p-6 md:p-12">
        {/* Home */}
        <section id="home" className="h-screen flex items-center justify-center text-center">
          <div className="max-w-3xl">
            <h2 className={`text-5xl md:text-6xl font-extrabold mb-4 ${sectionTitleClass}`}>
              Hi, I'm <span className="text-indigo-500">{portfolioData.name}</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8">{portfolioData.tagline}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => scrollToSection('contact')} className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">
                Get in Touch
              </button>
              <a href={portfolioData.cvUrl} target="_blank" rel="noopener noreferrer" className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition flex items-center justify-center">
                <Download size={20} className="mr-2" /> Download CV
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20">
          <div className="container mx-auto max-w-4xl">
            <h3 className={`text-3xl font-bold text-center mb-10 ${sectionTitleClass}`}>About Me</h3>
            <div className={`${cardBgClass} p-8 rounded-2xl ${cardShadowClass} border-t-4 ${cardBorderClass}`}>
              <p className="text-lg text-center text-gray-300">{portfolioData.about}</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20">
          <div className="container mx-auto">
            <h3 className={`text-3xl font-bold text-center mb-10 ${sectionTitleClass}`}>My Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {portfolioData.skills.map((skillGroup, i) => (
                <div key={i} className={`${cardBgClass} p-6 rounded-2xl ${cardShadowClass} border-t-4 ${cardBorderClass}`}>
                  <h4 className={`text-xl font-semibold mb-4 flex items-center ${sectionTitleClass}`}>
                    <GitCommit size={20} className={`mr-2 ${iconColorClass}`} />
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-2">
                    {skillGroup.items.map((item, j) => (
                      <li key={j} className="bg-gray-700 px-4 py-2 rounded-lg text-sm text-gray-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section id="work-experience" className="py-20">
          <div className="container mx-auto">
            <h3 className={`text-3xl font-bold text-center mb-10 ${sectionTitleClass}`}>Work Experience</h3>
            <div className="space-y-8 max-w-4xl mx-auto">
              {portfolioData.workExperience.map((company, i) => (
                <div key={i} className={`${cardBgClass} p-6 rounded-2xl ${cardShadowClass} border-t-4 ${cardBorderClass}`}>
                  <h4 className={`text-xl font-bold mb-4 ${sectionTitleClass}`}>{company.company}</h4>
                  <div className="space-y-4">
                    {company.roles.map((role, j) => (
                      <div
                        key={j}
                        className={`${cardBgClass} p-4 rounded-lg ${cardShadowClass} border-l-4 ${cardBorderClass} cursor-pointer hover:opacity-90 transition`}
                        onClick={() => openPopup(role.popupDetails)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h5 className={`text-lg font-semibold ${sectionTitleClass}`}>{role.title}</h5>
                          <span className="text-gray-500 text-sm">{role.duration}</span>
                        </div>
                        <p className="text-gray-300">{role.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20">
          <div className="container mx-auto">
            <h3 className={`text-3xl font-bold text-center mb-10 ${sectionTitleClass}`}>Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {portfolioData.projects.map((project, i) => (
                <div key={i} className={`${cardBgClass} p-6 rounded-2xl ${cardShadowClass} border-t-4 ${cardBorderClass} flex flex-col hover:scale-105 transition`}>
                  <h4 className={`text-xl font-bold mb-2 ${sectionTitleClass}`}>{project.title}</h4>
                  <p className="text-gray-400 flex-grow mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, k) => (
                      <span key={k} className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-700 text-indigo-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.url} className={`flex items-center ${iconColorClass} font-semibold mt-auto`}>
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="py-20">
          <div className="container mx-auto">
            <h3 className={`text-3xl font-bold text-center mb-10 ${sectionTitleClass}`}>Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {portfolioData.certifications.map((cert, i) => (
                <div key={i} className={`${cardBgClass} p-6 rounded-2xl ${cardShadowClass} border-t-4 ${cardBorderClass} text-center`}>
                  {cert.image && <img src={cert.image} alt={cert.name} className="w-24 h-24 object-contain mx-auto mb-4" />}
                  <h4 className={`text-lg font-bold ${sectionTitleClass}`}>{cert.name}</h4>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                  <p className="text-sm text-gray-500">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-20">
          <div className="container mx-auto">
            <h3 className={`text-3xl font-bold text-center mb-10 ${sectionTitleClass}`}>Education</h3>
            <div className="space-y-8 max-w-4xl mx-auto">
              {portfolioData.education.map((edu, i) => (
                <div key={i} className={`${cardBgClass} p-8 rounded-2xl ${cardShadowClass} border-t-4 ${cardBorderClass}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className={`text-xl font-bold ${sectionTitleClass}`}>{edu.degree}</h4>
                      <p className="text-gray-400">{edu.university}</p>
                    </div>
                    <span className="text-gray-500 text-sm">{edu.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20">
          <div className="container mx-auto">
            <h3 className={`text-3xl font-bold text-center mb-10 ${sectionTitleClass}`}>Get in Touch</h3>
            <div className={`max-w-2xl mx-auto p-8 rounded-2xl ${cardShadowClass} border-t-4 ${cardBorderClass} ${cardBgClass} text-center`}>
              <p className="text-lg text-gray-300 mb-8">I'm currently open to new opportunities. Feel free to reach out!</p>
              
              <div className="space-y-6">
                <a 
                  href={`mailto:${portfolioData.contact.email}`} 
                  className={`flex items-center justify-center space-x-3 ${iconColorClass} font-medium text-lg hover:underline`}
                >
                  <Mail size={28} />
                  <span>{portfolioData.contact.email}</span>
                </a>

                <a 
                  href={`tel:${portfolioData.contact.phone.replace(/\s/g, '')}`} 
                  className={`flex items-center justify-center space-x-3 ${iconColorClass} font-medium text-lg hover:underline`}
                >
                  <Phone size={28} />
                  <span>{portfolioData.contact.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-6 text-center text-gray-500 border-t border-gray-700">
          <p>© 2026 {portfolioData.name}. All rights reserved.</p>
        </footer>
      </main>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className={`max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 rounded-2xl ${popupBgClass} ${cardShadowClass} ${popupTextClass}`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-2xl font-bold ${sectionTitleClass}`}>Job Details</h3>
              <button onClick={closePopup} className="text-3xl font-bold text-gray-400 hover:text-white">&times;</button>
            </div>
            <div className="text-lg leading-relaxed">
              {popupContent}
            </div>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInPopup { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out; }
        .animate-fadeInPopup { animation: fadeInPopup 0.3s ease-out; }
      `}</style>
    </div>
  );
};

export default App;