import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  VscGithub, 
  VscLinkExternal, 
  VscCalendar,
  VscTag,
  VscCode,
  VscStarFull,
  VscEye
} from 'react-icons/vsc';
import { getLanguageContent } from '../utils/language';
import './Projects.css';

const Projects = () => {
  const content = getLanguageContent();
  const projects = content.projects;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Get unique categories for filter
  const categories = ['all', ...new Set(projects.list.map(project => project.category))];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all' 
    ? projects.list 
    : projects.list.filter(project => project.category === selectedCategory);

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

      {/* Category Filter */}
      <motion.div 
        className="projects-filter"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category === 'all' ? 'All Projects' : category}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Project Image/Preview */}
              <div className="project-image">
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
                
                {/* Overlay with quick actions */}
                <div className="project-overlay">
                  <div className="overlay-actions">
                    <button 
                      className="action-btn primary"
                      onClick={(e) => handleLiveClick(project.link, e)}
                      title="View Live Site"
                    >
                      <VscLinkExternal />
                      <span>Live Site</span>
                    </button>
                    <button 
                      className="action-btn secondary"
                      onClick={(e) => handleGitHubClick(project.github, e)}
                      title="View Source Code"
                    >
                      <VscGithub />
                      <span>Code</span>
                    </button>
                  </div>
                </div>

                {/* Status Badge */}
                <div className={`status-badge ${project.status}`}>
                  {getStatusIcon(project.status)}
                  <span>{getStatusLabel(project.status)}</span>
                </div>

                                 {/* Featured Badge */}
                 {project.featured && (
                   <div className="featured-badge">
                     <VscStarFull />
                     <span>Featured</span>
                   </div>
                 )}
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

                {/* Project Links */}
                <div className="project-links">
                  <button 
                    className="project-link live"
                    onClick={(e) => handleLiveClick(project.link, e)}
                  >
                    <VscLinkExternal />
                    <span>Live Demo</span>
                  </button>
                  <button 
                    className="project-link github"
                    onClick={(e) => handleGitHubClick(project.github, e)}
                  >
                    <VscGithub />
                    <span>GitHub</span>
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="project-glow" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Projects Summary */}
      <motion.div 
        className="projects-summary"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <div className="summary-card">
          <h3 className="summary-title">Development Portfolio</h3>
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-number">{projects.list.length}</span>
              <span className="stat-label">Total Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{projects.list.filter(p => p.featured).length}</span>
              <span className="stat-label">Featured</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{projects.list.filter(p => p.status === 'completed').length}</span>
              <span className="stat-label">Completed</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects; 