/**
 * Asset References - Centralized Asset Management System
 * 
 * This file manages all image URLs, external links, and asset configurations.
 * Uses GitHub LFS for large image hosting and provides fallback URLs.
 * 
 * Architecture:
 * - GitHub LFS URLs for production images
 * - Unsplash fallbacks for development/placeholder images
 * - Generic naming convention (ART_1, PHOTO_1, TRAVEL_1)
 * - Organized by content category (Art, Photography, Travel)
 * 
 * Usage:
 * import { IMAGES } from './assetReferences';
 * <img src={IMAGES.ART.ART_1} alt="Digital Art" />
 * 
 * Adding new assets:
 * 1. Upload to GitHub LFS repository
 * 2. Add reference: ART_2: `${GITHUB_LFS_BASE}/path/to/image.png`
 * 3. Update corresponding hobbyData.js entry
 */

// GitHub LFS Base URL for your assets
const GITHUB_LFS_BASE = "https://media.githubusercontent.com/media/Vignesh-Ram-ViRa/vira_assets/refs/heads/main/public/assets/images";

// GitHub Raw Base URL (for smaller files)
const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/Vignesh-Ram-ViRa/vira_assets/main/public/assets/images";

// Fallback placeholder URLs for Stack component (keeping minimal fallbacks for 3D components)
const FALLBACK_PLACEHOLDERS = {
  NATURE_1: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=500&auto=format",
  NATURE_2: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=500&auto=format",
  NATURE_3: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=500&auto=format",
};

// Your actual hosted images
export const IMAGES = {
  // Profile and avatar images
  PROFILE: {
    AVATAR: `${GITHUB_LFS_BASE}/common/Profile.jpeg`,
    MINI_AVATAR: `${GITHUB_LFS_BASE}/common/Profile.jpeg`,
  },

  // Project images
  PROJECTS: {
    AI_CODE_REVIEW: `${GITHUB_LFS_BASE}/vira_verse/preview.png`,
    TASK_MANAGER: `${GITHUB_LFS_BASE}/vira_verse/preview.png`,
    WEATHER_DASHBOARD: `${GITHUB_LFS_BASE}/vira_verse/preview.png`,
    PREVIEW_FALLBACK: `${GITHUB_LFS_BASE}/vira_verse/preview.png`,
  },

  // Art portfolio - your actual artwork
  ART: {
    ART_1: `${GITHUB_LFS_BASE}/vira_story/Digital1.png`,
    ART_2: `${GITHUB_LFS_BASE}/vira_story/Pastel1.jpg`,
    ART_3: `${GITHUB_LFS_BASE}/vira_story/Sketch1.jpg`,
    ART_4: `${GITHUB_LFS_BASE}/vira_story/Sketch2.jpg`,
    ART_5: `${GITHUB_LFS_BASE}/vira_story/Sketch3.jpg`,
    ART_6: `${GITHUB_LFS_BASE}/vira_story/Sketch4.jpg`,
  },

  // Photography portfolio - your actual photos
  PHOTOGRAPHY: {
    PHOTO_1: `${GITHUB_LFS_BASE}/vira_story/click1.jpg`,
    PHOTO_2: `${GITHUB_LFS_BASE}/vira_story/click2.jpeg`,
    PHOTO_3: `${GITHUB_LFS_BASE}/vira_story/click3.jpeg`,
    PHOTO_4: `${GITHUB_LFS_BASE}/vira_story/click5.jpeg`,
    PHOTO_5: `${GITHUB_LFS_BASE}/vira_story/click6.jpg`,
    PHOTO_6: `${GITHUB_LFS_BASE}/vira_story/click7.jpg`,
  },

  // Travel images - your actual travel photos
  TRAVEL: {
    TRAVEL_1: `${GITHUB_LFS_BASE}/vira_story/trip1.jpeg`,
    TRAVEL_2: `${GITHUB_LFS_BASE}/vira_story/trip2.jpeg`,
    TRAVEL_3: `${GITHUB_LFS_BASE}/vira_story/trip3.jpg`,
    TRAVEL_4: `${GITHUB_LFS_BASE}/vira_story/trip4.png`,
    TRAVEL_5: `${GITHUB_LFS_BASE}/vira_story/trip5.jpg`,
    TRAVEL_6: `${GITHUB_LFS_BASE}/vira_story/trip6.jpg`,
  },

  // 3D Component images (using your actual images for better preview)
  COMPONENT_IMAGES: {
    STACK_CARDS: [
      { id: 1, img: FALLBACK_PLACEHOLDERS.NATURE_1, alt: "Mountain Vista" },
      { id: 2, img: FALLBACK_PLACEHOLDERS.NATURE_2, alt: "Forest Trail" },
      { id: 3, img: FALLBACK_PLACEHOLDERS.NATURE_1, alt: "Alpine View" },
      { id: 4, img: FALLBACK_PLACEHOLDERS.NATURE_3, alt: "Ocean Coast" },
    ],
  },
};

// External links
export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/Vignesh-Ram-ViRa',
  LINKEDIN: 'https://linkedin.com/in/vignesh-ram-vira',
  EMAIL: 'mailto:vignesh@vira.dev',
  
  // Social media links
  TWITTER: 'https://twitter.com/vigneshramvira',
  INSTAGRAM: 'https://instagram.com/vignesh_ram_vira',
};

// Asset URLs and CDN configurations
export const ASSET_URLS = {
  GITHUB_LFS_BASE,
  GITHUB_RAW_BASE,
  CDN_BASE: process.env.REACT_APP_CDN_URL || '',
  UPLOAD_BASE: process.env.REACT_APP_UPLOAD_URL || '/uploads',
};

// Placeholder/fallback configurations
export const PLACEHOLDERS = {
  PROFILE_FALLBACK: "/api/placeholder/400/600",
  MINI_AVATAR_FALLBACK: "/api/placeholder/120/120",
  PROJECT_FALLBACK: "/api/placeholder/600/400",
  ART_FALLBACK: "/api/placeholder/800/600",
};

// Combine all asset references
const ASSET_REFERENCES = {
  IMAGES,
  EXTERNAL_LINKS,
  ASSET_URLS,
  PLACEHOLDERS,
};

export default ASSET_REFERENCES; 