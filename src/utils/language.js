import LANGUAGE_CONTENT from '../constants/language.js';

/**
 * Language utility for accessing externalized static content
 * Provides a safe way to get text content with fallbacks
 * Now imports from language.js which uses centralized personal constants
 */

/**
 * Get the entire language content object
 * @returns {Object} Complete language content
 */
export const getLanguageContent = () => {
  return LANGUAGE_CONTENT;
};

/**
 * Get text content by path from language.js
 * @param {string} path - Dot notation path to the content (e.g., 'hero.title')
 * @param {string} fallback - Fallback text if path is not found
 * @returns {string} The content text or fallback
 */
export const getText = (path, fallback = 'Text not found') => {
  try {
    const keys = path.split('.');
    let content = LANGUAGE_CONTENT;
    
    for (const key of keys) {
      if (content && typeof content === 'object' && key in content) {
        content = content[key];
      } else {
        return fallback;
      }
    }
    
    return typeof content === 'string' ? content : fallback;
  } catch (error) {
    console.warn(`Language utility error for path "${path}":`, error);
    return fallback;
  }
};

/**
 * Get multiple text contents at once
 * @param {string[]} paths - Array of paths to get
 * @returns {Object} Object with path as key and content as value
 */
export const getTexts = (paths) => {
  const result = {};
  paths.forEach(path => {
    result[path] = getText(path);
  });
  return result;
};

/**
 * Get navigation items
 * @returns {Object} Navigation texts
 */
export const getNavigation = () => {
  return LANGUAGE_CONTENT.navigation;
};

/**
 * Get hero section content
 * @returns {Object} Hero section texts
 */
export const getHero = () => {
  return LANGUAGE_CONTENT.hero;
};

/**
 * Get about section content
 * @returns {Object} About section texts
 */
export const getAbout = () => {
  return LANGUAGE_CONTENT.about;
};

/**
 * Get projects section content
 * @returns {Object} Projects section texts
 */
export const getProjects = () => {
  return LANGUAGE_CONTENT.projects;
};

/**
 * Get contact section content
 * @returns {Object} Contact section texts
 */
export const getContact = () => {
  return LANGUAGE_CONTENT.contact;
};

/**
 * Get footer content
 * @returns {Object} Footer texts
 */
export const getFooter = () => {
  return LANGUAGE_CONTENT.footer;
};

/**
 * Get theme texts
 * @returns {Object} Theme-related texts
 */
export const getThemes = () => {
  return LANGUAGE_CONTENT.themes;
};

/**
 * Get common texts
 * @returns {Object} Common utility texts
 */
export const getCommon = () => {
  return LANGUAGE_CONTENT.common;
};

const languageUtils = {
  getLanguageContent,
  getText,
  getTexts,
  getNavigation,
  getHero,
  getAbout,
  getProjects,
  getContact,
  getFooter,
  getThemes,
  getCommon
};

export default languageUtils; 