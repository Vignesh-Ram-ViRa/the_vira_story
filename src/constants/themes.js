/**
 * Theme definitions for the portfolio application
 * Supports light, dark, and pastel themes as required by cursor rules
 */

export const themes = {
  light: {
    name: 'light',
    colors: {
      // Background colors
      background: '#ffffff',
      surface: 'rgba(255, 255, 255, 0.8)',
      surfaceElevated: '#f8fafc',
      
      // Text colors
      textPrimary: '#1f2937',
      textSecondary: '#6b7280',
      textTertiary: '#9ca3af',
      
      // Brand colors
      primary: '#2563eb',
      primaryHover: '#1d4ed8',
      accent: '#3b82f6',
      
      // Border colors
      border: '#e5e7eb',
      borderLight: '#f3f4f6',
      
      // Status colors
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#06b6d4'
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    }
  },
  
  dark: {
    name: 'dark',
    colors: {
      // Background colors
      background: '#0f172a',
      surface: 'rgba(15, 23, 42, 0.9)',
      surfaceElevated: '#1e293b',
      
      // Text colors
      textPrimary: '#f1f5f9',
      textSecondary: '#cbd5e1',
      textTertiary: '#94a3b8',
      
      // Brand colors
      primary: '#3b82f6',
      primaryHover: '#2563eb',
      accent: '#60a5fa',
      
      // Border colors
      border: '#334155',
      borderLight: '#475569',
      
      // Status colors
      success: '#34d399',
      warning: '#fbbf24',
      error: '#f87171',
      info: '#22d3ee'
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)'
    }
  },
  
  pastel: {
    name: 'pastel',
    colors: {
      // Background colors
      background: '#faf5ff',
      surface: 'rgba(250, 245, 255, 0.9)',
      surfaceElevated: '#f3e8ff',
      
      // Text colors
      textPrimary: '#581c87',
      textSecondary: '#7c3aed',
      textTertiary: '#a855f7',
      
      // Brand colors
      primary: '#a855f7',
      primaryHover: '#9333ea',
      accent: '#c084fc',
      
      // Border colors
      border: '#e9d5ff',
      borderLight: '#f3e8ff',
      
      // Status colors
      success: '#86efac',
      warning: '#fde047',
      error: '#fca5a5',
      info: '#7dd3fc'
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(168, 85, 247, 0.1)',
      md: '0 4px 6px -1px rgba(168, 85, 247, 0.15), 0 2px 4px -1px rgba(168, 85, 247, 0.1)',
      lg: '0 10px 15px -3px rgba(168, 85, 247, 0.15), 0 4px 6px -2px rgba(168, 85, 247, 0.1)',
      xl: '0 20px 25px -5px rgba(168, 85, 247, 0.2), 0 10px 10px -5px rgba(168, 85, 247, 0.15)'
    }
  }
};

/**
 * Array of available theme names for iteration
 */
export const themeNames = Object.keys(themes);

/**
 * Default theme name
 */
export const defaultTheme = 'dark';

/**
 * Get CSS custom properties for a theme
 * @param {string} themeName - Name of the theme
 * @returns {Object} CSS custom properties object
 */
export const getThemeCustomProperties = (themeName) => {
  const theme = themes[themeName] || themes[defaultTheme];
  const properties = {};
  
  // Convert theme colors to CSS custom properties
  Object.entries(theme.colors).forEach(([key, value]) => {
    const kebabKey = key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    properties[`--color-${kebabKey}`] = value;
    
    // Extract RGB values for use with alpha
    if (value.startsWith('#')) {
      const hex = value.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      properties[`--color-${kebabKey}-rgb`] = `${r}, ${g}, ${b}`;
    }
  });
  
  // Convert theme shadows to CSS custom properties
  Object.entries(theme.shadows).forEach(([key, value]) => {
    properties[`--shadow-${key}`] = value;
  });
  
  return properties;
}; 