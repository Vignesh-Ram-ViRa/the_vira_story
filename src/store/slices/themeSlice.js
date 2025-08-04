import { createSlice } from '@reduxjs/toolkit';
import { themeNames, defaultTheme } from '../../constants/themes';

/**
 * Theme slice for Redux store
 * Manages current theme state and theme switching logic
 */

const initialState = {
  currentTheme: localStorage.getItem('portfolio-theme') || defaultTheme,
  availableThemes: themeNames,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      const newTheme = action.payload;
      if (themeNames.includes(newTheme)) {
        state.currentTheme = newTheme;
        // Persist theme preference to localStorage
        localStorage.setItem('portfolio-theme', newTheme);
      }
    },
    nextTheme: (state) => {
      const currentIndex = themeNames.indexOf(state.currentTheme);
      const nextIndex = (currentIndex + 1) % themeNames.length;
      const newTheme = themeNames[nextIndex];
      state.currentTheme = newTheme;
      // Persist theme preference to localStorage
      localStorage.setItem('portfolio-theme', newTheme);
    },
    toggleTheme: (state) => {
      // Toggle between light and dark themes (legacy support)
      const currentIndex = themeNames.indexOf(state.currentTheme);
      let newTheme;
      
      if (state.currentTheme === 'light') {
        newTheme = 'dark';
      } else if (state.currentTheme === 'dark') {
        newTheme = 'pastel';
      } else {
        newTheme = 'light';
      }
      
      state.currentTheme = newTheme;
      localStorage.setItem('portfolio-theme', newTheme);
    },
    resetTheme: (state) => {
      state.currentTheme = defaultTheme;
      localStorage.setItem('portfolio-theme', defaultTheme);
    }
  },
});

// Export actions
export const { setTheme, nextTheme, toggleTheme, resetTheme } = themeSlice.actions;

// Export selectors
export const selectCurrentTheme = (state) => state.theme.currentTheme;
export const selectAvailableThemes = (state) => state.theme.availableThemes;

// Export reducer
export default themeSlice.reducer; 