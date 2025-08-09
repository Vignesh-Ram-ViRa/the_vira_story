/**
 * External Links Constants
 * 
 * Centralized management of all external URLs and hobby-related data
 * to maintain our core rule of no hardcoded content anywhere.
 */

// Hobby external website links
export const HOBBY_EXTERNAL_LINKS = {
  BOOKWORM: "https://example.com/bookworm",
  FILMFRENZY: "https://example.com/filmfrenzy", 
  OTAKUHUB: "https://example.com/otakuhub",
  BADMINTON_RULES: "https://en.wikipedia.org/wiki/Badminton"
};

// Hobby status text configurations
export const HOBBY_STATUS_TEXT = {
  // Featured hobbies (with modals)
  ART_PORTFOLIO: "Art Portfolio",
  JOURNEY_MEMORIES: "Journey Memories", 
  INTERACTIVE_GALLERY: "Interactive Gallery",
  
  // External link hobbies
  BOOKWORM: "BookWorm",
  FILMFRENZY: "Film Frenzy",
  OTAKUHUB: "Otaku Hub",
  BADMINTON_RULES: "Base Rules"
};

// Hobby content data
export const HOBBY_CONTENT = {
  SKETCHING: {
    title: "Sketching",
    description: "Freehand art and potrait sketches"
  },
  TRAVEL: {
    title: "Travel", 
    description: "Exploring new places and cultures"
  },
  PHOTOGRAPHY: {
    title: "Photography",
    description: "Capturing life's beautiful moments"
  },
  READING: {
    title: "Reading",
    description: "Fantasy and Fiction"
  },
  MOVIES: {
    title: "Movies", 
    description: "Cinema and Cinema!"
  },
  ANIME: {
    title: "Anime",
    description: "Eastern anime and mangas"
  },
  BADMINTON: {
    title: "Badminton",
    description: "Staying active and mobile"
  }
};

// Section headers and content
export const ABOUT_SECTION_CONTENT = {
  HERO: {
    title: "The Person Behind the Code",
    subtitle: "Welcome to my personal space! Here's where the professional meets the personal,and where you get to know the real me beyond the developer."
  },
  ACHIEVEMENTS: {
    title: "Creative Achievements",
    subtitle: "Beyond the technical world",
    items: {
      ART: {
        icon: "🎨",
        title: "Freehand Outline and Model Drawing", 
        description: "Technical Exams- Senior - DGE",
        badge: "Art & Design"
      },
      TYPING: {
        icon: "⌨️",
        title: "Technical Typewriting - English",
        description: "Technical Exams - Junior - DTE", 
        badge: "Technical Skill"
      },
      LANGUAGE: {
        icon: "🇮🇳",
        title: "Hindi - DB Hindi Pracharak Sabha",
        description: "Rastrabasha Praveen",
        badge: "Cultural"
      }
    }
  },
  HOBBIES: {
    title: "My Hobbies & Interests",
    subtitle: "What keeps me inspired outside of work"
  }
};

const externalLinksConfig = {
  HOBBY_EXTERNAL_LINKS,
  HOBBY_STATUS_TEXT,
  HOBBY_CONTENT,
  ABOUT_SECTION_CONTENT
};

export default externalLinksConfig; 