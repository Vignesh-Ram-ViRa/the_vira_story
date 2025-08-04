import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  selectCurrentTheme, 
  selectAvailableThemes, 
  setTheme, 
  nextTheme, 
  toggleTheme, 
  resetTheme 
} from '../store/slices/themeSlice';
import { getThemeCustomProperties } from '../constants/themes';

/**
 * Custom hook for theme management
 * Integrates with Redux store and applies CSS custom properties
 * 
 * @returns {Object} Theme management utilities
 */
const useTheme = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectCurrentTheme);
  const availableThemes = useSelector(selectAvailableThemes);

  /**
   * Apply theme CSS custom properties to document root
   */
  useEffect(() => {
    const root = document.documentElement;
    const themeProperties = getThemeCustomProperties(currentTheme);
    
    // Apply all theme custom properties
    Object.entries(themeProperties).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
    
    // Set data attribute for theme-specific CSS selectors
    root.setAttribute('data-theme', currentTheme);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', themeProperties['--color-primary']);
    }
    
    // Optional: Update document title with theme indicator (for development)
    if (process.env.NODE_ENV === 'development') {
      const originalTitle = document.title.replace(/ \(.*\)$/, '');
      document.title = `${originalTitle} (${currentTheme})`;
    }
  }, [currentTheme]);

  /**
   * Set a specific theme
   * @param {string} themeName - Name of the theme to set
   */
  const handleSetTheme = (themeName) => {
    dispatch(setTheme(themeName));
  };

  /**
   * Switch to the next theme in the cycle
   */
  const handleNextTheme = () => {
    dispatch(nextTheme());
  };

  /**
   * Toggle between themes (cycles through all)
   */
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  /**
   * Reset to default theme
   */
  const handleResetTheme = () => {
    dispatch(resetTheme());
  };

  /**
   * Check if current theme is a specific theme
   * @param {string} themeName - Theme name to check
   * @returns {boolean} Whether current theme matches
   */
  const isTheme = (themeName) => currentTheme === themeName;

  /**
   * Get theme display name
   * @param {string} themeName - Theme name (optional, uses current if not provided)
   * @returns {string} Formatted theme display name
   */
  const getThemeDisplayName = (themeName = currentTheme) => {
    return themeName.charAt(0).toUpperCase() + themeName.slice(1);
  };

  return {
    // Current state
    currentTheme,
    availableThemes,
    
    // Actions
    setTheme: handleSetTheme,
    nextTheme: handleNextTheme,
    toggleTheme: handleToggleTheme,
    resetTheme: handleResetTheme,
    
    // Utilities
    isTheme,
    getThemeDisplayName,
    
    // Convenient theme checks
    isLight: isTheme('light'),
    isDark: isTheme('dark'),
    isPastel: isTheme('pastel'),
  };
};

export default useTheme; 