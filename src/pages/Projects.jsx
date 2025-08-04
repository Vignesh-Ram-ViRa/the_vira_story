import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  VscGithub, 
  VscLinkExternal, 
  VscCalendar,
  VscTag,
  VscCode,
  VscStarFull,
  VscEye,
  VscSearch,
  VscClose
} from 'react-icons/vsc';
import { getLanguageContent } from '../utils/language';
import './Projects.css';

const Projects = () => {
  const content = getLanguageContent();
  const projects = content.projects;
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Filter projects based on search term
  const filteredProjects = projects.list.filter(project => {
    if (!searchTerm) return true;
    
    const searchLower = searchTerm.toLowerCase();
    return (
      project.name.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.category.toLowerCase().includes(searchLower) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchLower)) ||
      project.year.toString().includes(searchLower)
    );
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleGitHubClick = (githubUrl, e) => {
    e.stopPropagation();
    window.open(githubUrl, '_blank', 'noopener,noreferrer');
  };

  const handleLiveClick = (liveUrl, e) => {
    e.stopPropagation();
    window.open(liveUrl, '_blank', 'noopener,noreferrer');
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <VscStarFull className="status-icon completed" />;
      case 'in-progress':
        return <VscCode className="status-icon in-progress" />;
      default:
        return <VscEye className="status-icon" />;
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      default:
        return 'Live';
    }
  };

  return (
    <div className="projects-page">
      {/* Header Section */}
      <div className="projects-header">
        <motion.h1 
          className="projects-title"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          {projects.title}
        </motion.h1>
        <motion.p 
          className="projects-subtitle"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          {projects.subtitle}
        </motion.p>
      </div>

             {/* Search Bar */}
       <motion.div 
         className="projects-search"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.6 }}
       >
         <div className="search-container">
           <VscSearch className="search-icon" />
           <input
             type="text"
             className="search-input"
             placeholder="Search"
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
           />
           <button
             className={`search-clear ${searchTerm ? 'visible' : ''}`}
             onClick={() => setSearchTerm('')}
             title="Clear search"
           >
             <VscClose />
           </button>
         </div>
       </motion.div>

             {/* Results Count */}
       {searchTerm && (
         <motion.div 
           className="search-results"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.3 }}
         >
           <span className="results-text">
             {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
             {searchTerm && ` for "${searchTerm}"`}
           </span>
         </motion.div>
       )}

       {/* Projects Grid */}
       <motion.div 
         className="projects-container"
         variants={containerVariants}
         initial="hidden"
         animate="visible"
       >
         <div className="projects-grid">
           {filteredProjects.length === 0 && searchTerm ? (
             <motion.div 
               className="no-results"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
             >
               <VscCode size={48} />
               <h3>No projects found</h3>
               <p>Try adjusting your search terms or clearing the search to see all projects.</p>
               <button 
                 className="clear-search-btn"
                 onClick={() => setSearchTerm('')}
               >
                 <VscClose />
                 Clear Search
               </button>
             </motion.div>
           ) : (
             filteredProjects.map((project, index) => (
               <motion.div
                 key={project.id}
                 className={`project-card ${project.featured ? 'featured' : ''}`}
                 variants={cardVariants}
                 whileHover="hover"
                 onHoverStart={() => setHoveredProject(project.id)}
                 onHoverEnd={() => setHoveredProject(null)}
               >
                 {/* Project Image/Preview */}
                 <div 
                   className="project-image"
                   onClick={(e) => handleLiveClick(project.link, e)}
                   title="View Live Demo"
                 >
                   {project.image && (
                     <img 
                       src={project.image === project.link ? 
                         `https://api.screenshotmachine.com/p?key=demo&url=${encodeURIComponent(project.link)}&dimension=1024x768` : 
                         project.image
                       }
                       alt={project.name}
                       loading="lazy"
                       onError={(e) => {
                         e.target.style.display = 'none';
                         e.target.nextSibling.style.display = 'flex';
                       }}
                     />
                   )}
                   <div className="image-fallback" style={{ display: 'none' }}>
                     <VscCode size={48} />
                     <span>Project Preview</span>
                   </div>
                   
                   {/* GitHub Button */}
                   <button 
                     className="github-btn"
                     onClick={(e) => handleGitHubClick(project.github, e)}
                     title="View Source Code"
                   >
                     <VscGithub />
                   </button>

                   {/* Status Badge */}
                   <div className={`status-badge ${project.status}`}>
                     {getStatusIcon(project.status)}
                     <span>{getStatusLabel(project.status)}</span>
                   </div>

                   {/* Featured Badge */}
                   {project.featured && (
                     <div className="featured-badge" title="Featured Project">
                       <VscStarFull />
                     </div>
                   )}

                   {/* Click hint overlay */}
                   <div className="click-hint">
                     <VscLinkExternal />
                     <span>View Live Demo</span>
                   </div>
                 </div>

                 {/* Project Content */}
                 <div className="project-content">
                   <div className="project-header">
                     <h3 className="project-name">{project.name}</h3>
                     <div className="project-meta">
                       <span className="project-year">
                         <VscCalendar />
                         {project.year}
                       </span>
                       <span className="project-category">
                         <VscTag />
                         {project.category}
                       </span>
                     </div>
                   </div>

                   <p className="project-description">{project.description}</p>

                   {/* Technologies */}
                   <div className="project-technologies">
                     <div className="tech-list">
                       {project.technologies.map((tech, index) => (
                         <span key={index} className="tech-tag">
                           {tech}
                         </span>
                       ))}
                     </div>
                   </div>
                 </div>

                 {/* Hover Glow Effect */}
                 <div className="project-glow" />
               </motion.div>
             ))
           )}
         </div>
       </motion.div>

      
    </div>
  );
};

export default Projects; 